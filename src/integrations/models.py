from django.db import models


class Links(models.Model):
    link = models.CharField(max_length=255)
    short_link = models.CharField(max_length=255)
