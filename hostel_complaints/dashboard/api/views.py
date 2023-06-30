from django.contrib.auth import get_user_model
from django.shortcuts import get_object_or_404
from rest_framework import (
    viewsets,
    permissions,
    generics,
    serializers,
    validators
)
from django_auto_prefetching import AutoPrefetchViewSetMixin 
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.filters import SearchFilter

from .serializers import *
from .renderers import CustomRenderer
from ..filters import ComplaintFilter
from .permissions import CustomPermissions
from authentication.models import StudentUser

class ComplaintsViewSet(AutoPrefetchViewSetMixin, viewsets.ModelViewSet):
    serializer_class = ComplaintSerializer
    queryset = Complaint.objects.all()
    search_fields = ["title", "student"]
    filter_backends = [DjangoFilterBackend, SearchFilter]
    filterset_class = ComplaintFilter
    renderer_classes = [CustomRenderer]
    
    def get_queryset(self):
            return super().get_queryset().filter(hostel=self.request.user.hostel)
        

    def get_permissions(self):
        
        if self.action == "create":
            self.permission_classes = [permissions.IsAuthenticated]  
        elif self.action in ["update", "partial_update", "destroy"]:
            self.permission_classes = [CustomPermissions]
        else:
            self.permission_classes = [permissions.AllowAny]
            
        return super().get_permissions()
    
    def perform_create(self, serializer):
        # Assign users with is_instructor field to create courses
        if not self.request.user.is_student:
            raise validators.ValidationError(
                                            {
                                            "detail": "User must have is_student = True to create a complaint"
                                            }
                                            )
        student = get_object_or_404(StudentUser, user=self.request.user)
        serializer.save(student=student, hostel=student.user.hostel)
        
    

        
