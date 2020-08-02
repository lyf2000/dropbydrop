from rest_framework import serializers
from datetime import datetime

from .models import Blog, Post


class ReprCreatedDateTimeField(serializers.DateTimeField):

    def to_representation(self, value):
        return value.strftime("%b %d, %Y")


class PostSerializer(serializers.ModelSerializer):
    
    created = ReprCreatedDateTimeField()
    updated = serializers.DateTimeField(format='%b %d, %Y, %H:%M')

    class Meta:
        model = Post
        fields = '__all__'
        

class BlogDetailSerializer(serializers.ModelSerializer):
    posts = PostSerializer(many=True)

    class Meta:
        model = Blog
        fields = ['id', 'title', 'posts']


class BlogListSerializer(serializers.ModelSerializer):

    class Meta:
        model = Blog
        fields = '__all__'
