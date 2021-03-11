from django.contrib import admin
from .models import Post, Category

@admin.register(Post)
class PostAdmin(admin.ModelAdmin):
    list_display=('title','is_active','publishing_date')
    list_filter=('publishing_date',)
    search_fields=('tittle',)

@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display=('categoryName','is_active')
    search_fields=('categoryName',)
