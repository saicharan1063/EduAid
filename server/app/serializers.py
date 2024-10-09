# backend/school_support_portal/api/serializers.py
from rest_framework import serializers
from .models import School
from .models import Company

# backend/school_support_portal/api/serializers.py
from rest_framework import serializers
from .models import School

from django.contrib.auth.hashers import make_password
from rest_framework import serializers
from .models import School

class SchoolSerializer(serializers.ModelSerializer):
    class Meta:
        model = School
        fields = [
            'email',
            'password',
            'address',
            'city',
            'state',
            'zip_code',  # Ensure this matches the field name in your model
            'contact_name',  # Ensure this matches the field name in your model
            'phone',
            'picture',
            'type',
        ]

    def create(self, validated_data):
        # Hash the password before saving
        validated_data['password'] = make_password(validated_data['password'])
        school = School(**validated_data)  # Create the School instance
        school.save()  # Save the instance
        return school



class CompanySerializer(serializers.ModelSerializer):
    class Meta:
        model = Company
        fields = [
            'email',
            'password',
            'address',
            'city',
            'state',
            'zip_code',  # Ensure this matches the field name in your model
            'contact_name',  # Ensure this matches the field name in your model
            'phone',
            'picture',
            'type',
        ]

    def create(self, validated_data):
        # Hash the password before saving
        validated_data['password'] = make_password(validated_data['password'])
        company = Company(**validated_data)  # Create the Company instance
        company.save()  # Save the instance
        return company
