from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login

# Create your views here.
#add1
# def goLogin(request):
#     return render(request, 'login.html')
#add2
def goLogin(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')
        user = authenticate(request, username=username, password=password)

        if user:
            login(request, user)
            return redirect('home2')
        else:
            return render(request, 'login.html', {'error': '아이디 또는 비밀번호가 틀렸습니다.'})
    return render(request, 'login.html')