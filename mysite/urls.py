"""
URL configuration for mysite project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from login import views as login_views

#add1
import home.views
import home2.views
import main.views
import loading.views
import login.views
import signup.views
import result.views
# from . import views
#add2


urlpatterns = [
    path('admin/', admin.site.urls),
    path("", home.views.goHome, name='home'), #홈 페이지
    path("home2/", home2.views.goHome2, name='home2'), #홈 페이지
    path("main/", main.views.goMain, name='main'), # 아동학대 위험 진단 페이지
    path('loading/', loading.views.goLoading, name='loading'), # 로딩 페이지
    path('login/', login.views.goLogin, name='login'), # 로그인 페이지
    path('signup/', signup.views.goSignup, name='signup'), # 회원가입 페이지
    path('result/', result.views.goResult, name='result'), # 회원가입 페이지


]
