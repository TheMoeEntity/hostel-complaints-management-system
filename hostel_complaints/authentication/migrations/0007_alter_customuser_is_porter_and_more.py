# Generated by Django 4.2.2 on 2023-06-29 15:02

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('authentication', '0006_alter_customuser_is_porter_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='customuser',
            name='is_porter',
            field=models.BooleanField(default=False),
        ),
        migrations.AlterField(
            model_name='customuser',
            name='is_student',
            field=models.BooleanField(default=False),
        ),
    ]
