# Generated by Django 4.2.2 on 2023-06-29 13:43

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('authentication', '0005_alter_customuser_is_porter_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='customuser',
            name='is_porter',
            field=models.BooleanField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='customuser',
            name='is_student',
            field=models.BooleanField(blank=True, null=True),
        ),
    ]
