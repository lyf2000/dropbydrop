from django.db import models

# Create your models here.

class Blog(models.Model):
    title = models.CharField(max_length=128)


class Post(models.Model):
    blog = models.ForeignKey('Blog', on_delete=models.CASCADE, related_name='blogs')

    title = models.CharField(max_length=256)
    text = models.CharField(max_length=512)
