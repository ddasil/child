from django.http import JsonResponse
import json

def predict(request):
    if request.method == 'POST':
        data = json.loads(request.body)  # 요청 데이터 파싱
        # 예측 로직 수행
        prediction_result = "예측 결과"  # 예제 값
        return JsonResponse({'prediction': prediction_result})
    return JsonResponse({'error': 'Invalid request method'}, status=405)