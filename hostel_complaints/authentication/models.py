from django.db import models
from django.contrib.auth.models import AbstractUser
from django.utils.translation import gettext_lazy as _ 
import uuid
from django.conf import settings
# Create your models here.

from .manager import CustomUserManager


HOSTELS = (
    ("Professor Biobaku Hall", "Professor Biobaku Hall"),
    ("Queen Amina Hall", "Queen Amina Hall"),
    ("King Jaja Hall", "King Jaja hall")
)
 
 
class CustomUser(AbstractUser):
    username = None 
    id = models.UUIDField(primary_key=True, editable=False, default=uuid.uuid4, max_length=6)
    email = models.EmailField(_('email address'), unique=True)
    first_name = models.CharField(max_length=50, null=True, blank=True) 
    last_name = models.CharField(max_length=50, null=True, blank=True)
    matric_number = models.CharField(max_length=11, unique=True, null=True, blank=True)
    hostel = models.CharField(max_length=100, choices=HOSTELS, null=True, blank=True)
    is_student = models.BooleanField(default=False)
    is_porter = models.BooleanField(default=False)
    
    USERNAME_FIELD = "matric_number"
    REQUIRED_FIELDS = ["first_name", "last_name", "hostel"]
    
    objects = CustomUserManager()
    
    def __str__(self):
        return self.email 
       

class StudentUser(models.Model):
    user = models.OneToOneField(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, primary_key=True)
    created_at = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return self.user.first_name


class PorterUser(models.Model):
    user = models.OneToOneField(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, primary_key=True)
    created_at = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return self.user.email