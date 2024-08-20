from django.db import models

# Create your models here.
class Book(models.Model):
    title = models.CharField(max_length=255)
    author = models.CharField(max_length=255)
    status = models.CharField(max_length=9, default="In Queue")
    priority = models.CharField(max_length=6, default="Low")
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title