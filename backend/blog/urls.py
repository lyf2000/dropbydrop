from django.urls import path

from .views import BlogListView, BlogDetailView, PostDetail

app_name = 'blog'

urlpatterns = [
    path('blogs', BlogListView.as_view(), name='blog-list'),
    path('blogs/<int:pk>', BlogDetailView.as_view(), name='blog-detail'),
    path('posts/<int:pk>', PostDetail.as_view(), name='post-detail'),

]
