# backend/school_support_portal/api/models.py
from django.db import models

class School(models.Model):
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=128)  # Use a proper length for hashed passwords
    address = models.TextField()
    city = models.CharField(max_length=100)
    state = models.CharField(max_length=100)
    zip_code = models.CharField(max_length=10)
    contact_name = models.CharField(max_length=100)
    phone = models.CharField(max_length=15)
    picture = models.ImageField(upload_to='school_pictures/', null=True, blank=True)
    type = models.CharField(max_length=20, default='School')  # Optional: Default value for type


class Company(models.Model):
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=128)
    address = models.CharField(max_length=255)
    city = models.CharField(max_length=100)
    state = models.CharField(max_length=100)
    zip_code = models.CharField(max_length=10)
    contact_name = models.CharField(max_length=100)
    phone = models.CharField(max_length=15)
    picture = models.ImageField(upload_to='company_pictures/')
    type = models.CharField(max_length=20, default='Company')
# backend/school_support_portal/api/models.py
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager
from django.db import models


