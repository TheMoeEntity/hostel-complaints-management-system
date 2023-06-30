from django.urls import path 
from . import views 

urlpatterns = [
    path('complaints/create/', views.ComplaintsViewSet.as_view({'post': 'create'}), name='create-complaint'),
    path('complaints/', views.ComplaintsViewSet.as_view({'get':'list'}), name='complaints-list'),
    path('complaints/<str:pk>/', views.ComplaintsViewSet.as_view({'get': 'retrieve', 'put': 'update', 'patch': 'partial_update', 'delete': 'destroy'}), name='complaint-details'),
]
