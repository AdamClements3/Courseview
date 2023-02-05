from rest_framework import serializers
from .models import CourseInfo

class UserInputSerializer(serializers.ModelSerializer):
    class Meta:
        model = CourseInfo
        fields = '__all__'