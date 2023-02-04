from django.urls import path, include
from .views import main, home, CourseInfoView

urlpatterns = [
    path('home', CourseInfoView.as_view())
    # path('contact/', contact, name='contact')
]