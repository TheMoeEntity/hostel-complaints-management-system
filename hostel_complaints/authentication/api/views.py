from rest_framework.generics import CreateAPIView
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.validators import ValidationError


from django.contrib.auth import get_user_model
from ..models import *
from .serializers import AccountSerializer
from dashboard.api.renderers import CustomRenderer


class AccountCreateView(CreateAPIView):
    '''
        API endpoint for creating a student account 
    '''
    serializer_class = AccountSerializer
    permission_classes = [AllowAny]
    renderer_classes = [CustomRenderer]
    
    def perform_create(self, serializer):
        super().perform_create(serializer)
        if "matric_number" in self.request.data:
            user = serializer.save(is_student=True) 
            StudentUser.objects.create(
                                    user=user, 
                                    matric_number=self.request.data['matric_number'],
                                  )
        else:
            user = serializer.save(is_porter=True)
            PorterUser.objects.create(user=user)
            
        
    
        