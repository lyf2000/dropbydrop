from django.contrib import admin
from django.urls import path, include
from django.views.generic import TemplateView
from django.contrib.staticfiles.urls import static
from django.conf import settings


urlpatterns = [
    path('admin/', admin.site.urls),
    path('', TemplateView.as_view(template_name='base/index.html'), name='home'),
    path('', include('backend.users.urls', namespace='users')),
    path('', include('backend.blog.urls', namespace='blog')),

]

urlpatterns += [
    path('ckeditor/', include('ckeditor_uploader.urls')),

]


if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
