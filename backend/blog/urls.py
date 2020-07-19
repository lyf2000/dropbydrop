from django.urls import path

from .views import BlogListView

app_name = 'blog'

urlpatterns = [
    # path('index/', index, name='index'),
    path('blogs', BlogListView.as_view(), name='blog-list'),

]
