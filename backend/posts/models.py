from django.db import models
from accounts.models import UserAccount

class Category(models.Model):
    categoryName=models.CharField(max_length=50,null=True,unique=True)
    is_active=models.BooleanField(default=True)

    def __str__(self):
        return self.categoryName;

class Post(models.Model):
    title=models.CharField(max_length=100,verbose_name="Post Başlık")
    description=models.TextField(blank=True,null=False)
    post_image=models.ImageField(upload_to="posts/%Y%m/%d/",default="posts/default_post_image.jpg")
    publishing_date=models.DateTimeField(auto_now=True)
    is_active=models.BooleanField(default=True)

    category=models.ForeignKey(Category,null=True,on_delete=models.DO_NOTHING)
    author = models.ForeignKey(UserAccount, null=True, on_delete=models.DO_NOTHING)

    def __str__(self):
        return self.title;