from django.db import models
from ckeditor_uploader.fields import RichTextUploadingField


class Blog(models.Model):
    title = models.CharField(max_length=128)


class Post(models.Model):
    blog = models.ForeignKey('Blog', on_delete=models.CASCADE, related_name='posts')

    title = models.CharField(max_length=256)
    # text = RichTextUploadingField()
    text = models.CharField(max_length=1024*16)

    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)
