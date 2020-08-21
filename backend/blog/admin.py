from django import forms
from django.contrib import admin
from ckeditor_uploader.widgets import CKEditorUploadingWidget

from backend.blog.models import Blog, Post


@admin.register(Blog)
class BlogAdmin(admin.ModelAdmin):
    # TODO add list of posts, filter
    pass


class PostAdminForm(forms.ModelForm):
    text = forms.CharField(widget=forms.Textarea)
    class Meta:
        model = Post
        fields = '__all__'


@admin.register(Post)
class PostAdmin(admin.ModelAdmin):
    form = PostAdminForm

    # def get_form(self, request, obj=None, **kwargs):
    #     kwargs['widgets'] = {'text': forms.Textarea}
    #     return super().get_form(request, obj, **kwargs)
