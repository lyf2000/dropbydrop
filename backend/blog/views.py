from rest_framework import generics

from backend.blog.models import Blog
from backend.blog.serializers import BlogListSerializer, BlogDetailSerializer


# TODO add pagination
class BlogListView(generics.ListAPIView):
    queryset = Blog.objects.all()
    serializer_class = BlogListSerializer


class BlogDetailView(generics.RetrieveAPIView):
    queryset = Blog
    serializer_class = BlogDetailSerializer
