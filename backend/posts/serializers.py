from rest_framework import serializers
from .models import Post


class PostSerializer(serializers.ModelSerializer):
    username = serializers.SerializerMethodField('get_username_from_post')
    categoryname=serializers.SerializerMethodField('get_categoryname_from_category')
    class Meta:
        model = Post
        fields = ['id', 'title','description', 'is_active', 'publishing_date','post_image', 'username','categoryname']
        # fields='__all__' dersek bütün alanlar gelir.

    def get_username_from_post(self, blog_post):
        username = blog_post.author.name
        return username

    def get_categoryname_from_category(self, blog_category):
        categoryname= blog_category.category.categoryName
        return categoryname