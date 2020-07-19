from django.contrib import admin

# Register your models here.
from backend.blog.models import Blog, Post


@admin.register(Blog)
class BlogAdmin(admin.ModelAdmin):
    # TODO add list of posts, filter
    pass


@admin.register(Post)
class PostAdmin(admin.ModelAdmin):
    pass
