# Generated by Django 3.0.8 on 2020-08-02 02:25

import ckeditor_uploader.fields
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0003_auto_20200719_1701'),
    ]

    operations = [
        migrations.AlterField(
            model_name='post',
            name='text',
            field=ckeditor_uploader.fields.RichTextUploadingField(),
        ),
    ]
