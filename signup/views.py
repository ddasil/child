from django.shortcuts import render, redirect
from django.contrib.auth.models import User
from django.contrib import messages

def goSignup(request):
    if request.method == "POST":
        username = request.POST.get("userid")
        password = request.POST.get("pwd1")

        if User.objects.filter(username=username).exists():
            messages.error(request, "이미 존재하는 아이디입니다.")
            return render(request, "signup.html")

        # User 모델에 저장
        user = User.objects.create_user(username=username, password=password)
        user.save()

        messages.success(request, "회원가입이 완료되었습니다.")
        return redirect("login")  # 🔥 여기서 로그인 페이지로 이동!
    
    return render(request, "signup.html")