# Generated by Django 5.1 on 2024-08-20 06:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('books', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='book',
            name='is_read',
        ),
        migrations.RemoveField(
            model_name='book',
            name='notes',
        ),
        migrations.AddField(
            model_name='book',
            name='priority',
            field=models.CharField(default='Low', max_length=6),
        ),
        migrations.AddField(
            model_name='book',
            name='status',
            field=models.CharField(default='In Queue', max_length=9),
        ),
    ]
