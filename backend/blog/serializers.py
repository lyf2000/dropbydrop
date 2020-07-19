from rest_framework import serializers

from .models import Blog, Post


class PostSerializer(serializers.ModelSerializer):

    class Meta:
        model = Post
        fields = '__all__'


class BlogDetailSerializer(serializers.ModelSerializer):
    posts = PostSerializer(many=True)

    class Meta:
        model = Blog
        fields = ['title', 'posts']


class BlogListSerializer(serializers.ModelSerializer):

    class Meta:
        model = Blog
        fields = '__all__'
