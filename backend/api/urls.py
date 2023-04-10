from django.urls import path
from .views import TaskList, TaskRetrieve, TaskCreate, TaskDestroy

urlpatterns = [
    path('tasks/', TaskList.as_view()),
    path('create/', TaskCreate.as_view()),
    # path('tasks/<int:pk>/', TaskDetail.as_view(), name='task-detail'),
]