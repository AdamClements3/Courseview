from django.shortcuts import render
from django.http import HttpResponse
from .forms import InputBox
from .models import CourseInfo
from rest_framework import generics
from .serializers import UserInputSerializer

# Create your views here.
# def main(request):
#     return HttpResponse("<h1>This is a main page.</h1>")

# def home(request):
#     return HttpResponse("<h1>Home page andy</h1>")

class CourseInfoView(generics.ListAPIView):
        queryset = CourseInfo.objects.all()
        serializer_class = UserInputSerializer
