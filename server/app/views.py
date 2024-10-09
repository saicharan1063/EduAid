# backend/school_support_portal/api/views.py
from rest_framework import generics
from rest_framework.response import Response
from rest_framework import status
from .models import School
from .serializers import SchoolSerializer
from .models import Company
from .serializers import CompanySerializer
from django.contrib.auth import authenticate
from django.contrib.auth.hashers import check_password

class SchoolSignupView(generics.CreateAPIView):
    queryset = School.objects.all()
    serializer_class = SchoolSerializer

# backend/school_support_portal/api/views.py



class SchoolLoginView(generics.GenericAPIView):
    def post(self, request):
        email = request.data.get('email')
        password = request.data.get('password')

        try:
            school = School.objects.get(email=email)
            # Check if the provided password matches the hashed password in the database
            if check_password(password, school.password):
                return Response({"message": "Login successful"}, status=status.HTTP_200_OK)
            else:
                return Response({"message": "Invalid credentials"}, status=status.HTTP_401_UNAUTHORIZED)
        except School.DoesNotExist:
            return Response({"message": "Invalid credentials"}, status=status.HTTP_401_UNAUTHORIZED)





class CompanySignupView(generics.CreateAPIView):
    queryset = Company.objects.all()
    serializer_class = CompanySerializer

class CompanyLoginView(generics.GenericAPIView):
    def post(self, request):
        email = request.data.get('email')
        password = request.data.get('password')
        try:
           company = Company.objects.get(email=email)
           if check_password(password,company.password):
                return Response({"message": "Login successful"}, status=status.HTTP_200_OK)
           else:
                return Response({"message": "Invalid credentials"}, status=status.HTTP_401_UNAUTHORIZED)
        except Company.DoesNotExist:
            return Response({"message": "Invalid credentials"}, status=status.HTTP_401_UNAUTHORIZED)
        