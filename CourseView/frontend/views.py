from django.shortcuts import render

# Create your views here.

# Render the index template, let React take care of it afterwards
def index(request, *args, **kwargs):
    return render(request, 'frontend/index.html')