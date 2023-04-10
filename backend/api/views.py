from django.shortcuts import render

from rest_framework import generics
from .models import Task
from .serializers import TaskSerializer


class TaskList(generics.ListAPIView):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer
    
class TaskCreate(generics.CreateAPIView):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer

class TaskRetrieve(generics.RetrieveAPIView):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer
    
class TaskUpdate(generics.UpdateAPIView):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer
    
class TaskDestroy(generics.DestroyAPIView):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer