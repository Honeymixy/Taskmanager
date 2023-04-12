from django.urls import path
from .views import TaskList, TaskRetrieve, TaskCreate,TaskUpdate, TaskDestroy

urlpatterns = [
    path('tasks/', TaskList.as_view()),
    path('create/', TaskCreate.as_view()),
    path('tasks/detail/<int:pk>/', TaskRetrieve.as_view()),
    path('tasks/update/<int:pk>/', TaskUpdate.as_view()),
    path('tasks/delete<int:pk>/', TaskDestroy.as_view()),
]