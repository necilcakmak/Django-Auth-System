from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager

class UserAccountManager(BaseUserManager):
    def create_user(self, email, name, password=None):
        if not email:
            raise ValueError('Users must have an email adress')

        email=self.normalize_email(email)
        user= self.model(email=email, name=name)

        user.set_password(password)
        user.save()

        return user

    def create_superuser(self, email, name, password=None):
        user=self.create_user(email=self.normalize_email(email),password=password, name=name)
        user.is_admin=True
        user.is_staff=True
        user.is_superuser=True
        user.save()
        return user

class UserAccount(AbstractBaseUser, PermissionsMixin):
    email= models.EmailField(max_length=50, unique=True)
    name=models.CharField(max_length=50)
    image=models.ImageField(upload_to="users/%Y%m/%d/",default="users/default_user_image.jpg")
    is_active=models.BooleanField(default=True)
    is_staff=models.BooleanField(default=False)
    is_admin=models.BooleanField(default=False)
    is_superuser=models.BooleanField(default=False)
    objects=UserAccountManager()
    USERNAME_FIELD='email'
    REQUIRED_FIELDS=['name']

    def get_full_name(self):
        return self.name

    def get_short_name(self):
        return self.name    

    def __str__(self):
        return self.email    