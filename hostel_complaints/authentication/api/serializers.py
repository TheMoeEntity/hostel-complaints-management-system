from ..models import *
from rest_framework import serializers
from django.contrib.auth.hashers import make_password

class AccountSerializer(serializers.ModelSerializer):
    password2 = serializers.CharField(style={"input_type": "password"}, write_only=True)
    
    class Meta:
        model = CustomUser 
        fields = ["id", "first_name", "last_name", "email", "hostel", "password", "password2"]
        extra_kwargs = {
            "password": {"write_only": True}
        }
        
    def validate(self, data):
        if data["password"] != data["password2"]:
            raise serializers.ValidationError("The two passwords do not match !")
        return data 
    
    def create(self, validated_data):
        email = validated_data["email"]
        password = validated_data["password"]
        first_name = validated_data["first_name"]
        last_name= validated_data["last_name"]
        hostel = validated_data["hostel"]
        confirm_account = CustomUser.objects.filter(email=email)
        if confirm_account.exists():
            raise serializers.ValidationError("An account already exists with this email")
        new_account = CustomUser.objects.create_user(
                                                     email=email, password=password,
                                                     first_name=first_name, last_name=last_name,
                                                     hostel=hostel
                                                     )
        return new_account
    

