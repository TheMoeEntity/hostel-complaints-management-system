from .base import *
import dj_database_url

DEBUG = True


ALLOWED_HOSTS = ["eventmanagement-y16a.onrender.com"]


# Render PostgreSQL live database
DATABASES = {
    'default': dj_database_url.parse(config("DATABASE_URL"))
}