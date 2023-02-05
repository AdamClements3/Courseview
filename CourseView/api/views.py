from django.shortcuts import render
from django.http import HttpResponse
from .forms import InputBox
from .models import CourseInfo
from rest_framework import generics, status
from .serializers import UserInputSerializer

import io

from rest_framework.views import APIView
from rest_framework.response import Response
from django.http import JsonResponse

# import matplotlib.pyplot as plt



# Create your views here.
# def main(request):
#     return HttpResponse("<h1>This is a main page.</h1>")

# def home(request):
#     return HttpResponse("<h1>Home page andy</h1>")

class CourseInfoView(generics.ListAPIView):
        queryset = CourseInfo.objects.all()
        serializer_class = UserInputSerializer

class SendInfo(APIView):
    serializer_class = UserInputSerializer
    def post(self, request, format=None):
        courseNum = request.GET.get(CourseInfo.courseNumber)
        courseDep = request.GET.get(CourseInfo.courseTitle)

        data = UserInputSerializer(CourseInfo).data
        return Response(data, status=status.HTTP_200_OK)



def display_graph(request):
    image_file = io.BytesIO