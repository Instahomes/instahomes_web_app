# Generated by Django 3.1.5 on 2021-03-03 13:42

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0002_useraccount_user_type'),
    ]

    operations = [
        migrations.DeleteModel(
            name='UserAccount',
        ),
    ]
