from rest_framework import generics

from backend.blog.models import Blog, Post
from backend.blog.serializers import BlogListSerializer, BlogDetailSerializer, PostSerializer


# TODO add pagination
class BlogListView(generics.ListAPIView):
    queryset = Blog.objects.all()
    serializer_class = BlogListSerializer


class BlogDetailView(generics.RetrieveAPIView):
    queryset = Blog
    serializer_class = BlogDetailSerializer


class PostDetail(generics.RetrieveAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
