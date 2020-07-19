from rest_framework import generics

from backend.blog.models import Blog
from backend.blog.serializers import BlogSerializer


# TODO add pagination
class BlogListView(generics.ListAPIView):
    queryset = Blog.objects.all()
    serializer_class = BlogSerializer
