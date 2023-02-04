from django.db import models

# Create your models here.

class CourseInfo(models.Model):
    CourseNumber = models.CharField(max_length=4, default="")
    CourseTitle = models.CharField(max_length=4, default="")

