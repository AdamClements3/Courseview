from django.urls import path, include
from .views import CourseInfoView, SendInfo

urlpatterns = [
    path('home', CourseInfoView.as_view()),
    path('send-info', SendInfo)
    # path('contact/', contact, name='contact')
]