
from django.shortcuts import render, redirect
from django.contrib.auth import logout

def goHome(request):
    logout(request)  # 세션 초기화 = 로그아웃
    return render(request, 'home.html')