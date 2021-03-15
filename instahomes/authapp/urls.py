from django.urls import path, include
from . import views
from rest_framework_simplejwt import views as jwt_views

urlpatterns = [
    # path('', include('djoser.urls')),
    # path('', include('djoser.urls.jwt')),
    path('token/obtain/', views.ObtainTokenPairView.as_view(), name='token_create'),  
    path('token/refresh/', jwt_views.TokenRefreshView.as_view(), name='token_refresh'),
    path('user/create/', views.UserCreateView.as_view(), name='user_create'),
    # path('login', views.login, name='login'),
    # path('register', views.register, name='register'),
    # path('logout', views.logout, name='logout'),
    # path('dashboard', views.dashboard, name='dashboard')
]
