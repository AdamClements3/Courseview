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
from django.views.decorators.csrf import csrf_exempt
from .pullData import pullData

import json

# import matplotlib.pyplot as plt



# Create your views here.
# def main(request):
#     return HttpResponse("<h1>This is a main page.</h1>")

# def home(request):
#     return HttpResponse("<h1>Home page andy</h1>")

class CourseInfoView(generics.ListAPIView):
        queryset = CourseInfo.objects.all()
        serializer_class = UserInputSerializer

@csrf_exempt
def SendInfo(request):
    if request.method == 'POST':
        json_data = json.loads(request.body)
        courseName = json_data['params']['valueDep']
        courseNum = json_data['params']['valueCourse']
        CourseInfo.objects.create(
            CourseNumber = courseNum,
            CourseTitle = courseName
        )
        your_json = {"courseNum": courseNum, "courseTitle": courseName, "grades": [1, 2, 3]}

        # Return function logic here
        
        data = pullData(courseName,courseNum)
        passData = {
             "stuff": data
        }



        return JsonResponse(passData,status=status.HTTP_200_OK)


# class SendInfo(request):
#     serializer_class = UserInputSerializer
#     def post(self, request, *args, **kwargs):
#         data = request.GET.get()
#     def post(self, request, format=None):
#         if request.method == 'POST':
#             newValue = request.POST.get('newValue')
#         if success:
#             return Response({'Data Update Successful' : 'Good job'}, status = status.HTTP_200_OK)
#         else:
#             return Response({'Bad Request': 'Something bad lmao'}, status=status.HTTP_400_BAD_REQUEST)


def display_graph(request):
    image_file = io.BytesIO