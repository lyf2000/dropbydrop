from django import forms
from django.contrib import admin

# Register your models here.
from backend.blog.models import Blog, Post


@admin.register(Blog)
class BlogAdmin(admin.ModelAdmin):
    # TODO add list of posts, filter
    pass


@admin.register(Post)
class PostAdmin(admin.ModelAdmin):

    def get_form(self, request, obj=None, **kwargs):
        kwargs['widgets'] = {'text': forms.Textarea}
        return super().get_form(request, obj, **kwargs)
