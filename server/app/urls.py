# backend/school_support_portal/api/urls.py
from django.urls import path
from .views import SchoolSignupView, SchoolLoginView, CompanySignupView, CompanyLoginView

urlpatterns = [
    path('school/signup/', SchoolSignupView.as_view(), name='school_signup'),
    path('school/login/', SchoolLoginView.as_view(), name='school_login'),
    path('company/signup/', CompanySignupView.as_view(), name='company_signup'),
    path('company/login/', CompanyLoginView.as_view(), name='company_login'),
]
