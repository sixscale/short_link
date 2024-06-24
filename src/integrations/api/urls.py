from .views import CreateShortLinkAPI
from django.urls import path, include

urlpatterns = [
    path('create-short-link', CreateShortLinkAPI.as_view()),
]
