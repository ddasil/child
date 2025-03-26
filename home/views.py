from django.shortcuts import render

# Create your views here.
#add1
def goHome(request):
    return render(request, 'home.html')
#add2