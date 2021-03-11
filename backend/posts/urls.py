from django.urls import path
from . import views

urlpatterns=[
    path('post-list',views.postList,name="post-list"),
    path('post-detail/<int:pk>',views.postDetail,name="post-detail"),
]