from django.shortcuts import render

# Create your views here.
#add1
def goLogin(request):
    return render(request, 'login.html')
#add2