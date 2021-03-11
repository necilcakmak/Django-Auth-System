from django.contrib import admin
from .models import UserAccount

@admin.register(UserAccount)
class AccountAdmin(admin.ModelAdmin):
    list_display = ('email', 'is_active', 'is_admin', 'is_staff')
    search_fields = ('email',)
