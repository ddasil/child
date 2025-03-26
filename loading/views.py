from django.shortcuts import render

# Create your views here.
#add1
def goLoading(request):
    return render(request, 'loading.html')
#add2