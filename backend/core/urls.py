from django.contrib import admin
from django.urls import path, include, re_path
from django.views.generic import TemplateView
from django.contrib.staticfiles.urls import static
from django.conf import settings


# from django.views.static import serve as _serve

# def serve(request, path):
#     if '.' not in path:
#         path = 'index.html'
#     return _serve(request, path, '/vue')


urlpatterns = [
    path('admin/', admin.site.urls),
    # re_path(r'(?P<path>(^/?$|.*\.(js|css)))', serve),
    # path('', TemplateView.as_view(template_name='base/index.html'), name='home'),
    path('api/', include('backend.users.urls', namespace='users')),
    path('api/', include('backend.blog.urls', namespace='blog')),

]

urlpatterns += [
    # path('ckeditor/', include('ckeditor_uploader.urls')),

]


if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
