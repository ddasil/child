from django.shortcuts import render

# Create your views here.
#add1
def goSignup(request):
    return render(request, 'signup.html')
#add2