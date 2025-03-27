from django.test import TestCase  # TestCase를 Django 테스트 모듈에서 import
from utils.child import load_model, predict  # 테스트 대상 함수 import

class ChildUtilsTest(TestCase):
    def test_load_model(self):
        try:
            model = load_model()
            self.assertIsNotNone(model)  # 모델이 None이 아닌지 확인
            print("모델 로드 성공!")
        except Exception as e:
            self.fail(f"모델 로드 실패: {e}")  # 실패 시 메시지 출력

    def test_predict(self):
        try:
            sample_data = [[5, 1, 5, 0, 0, 0, 0, 0, 0, 0]]  # 입력 데이터 샘플
            prediction = predict(sample_data)
            self.assertIsInstance(prediction, list)  # 결과가 리스트인지 확인
            print(f"예측 성공! 결과: {prediction}")
        except Exception as e:
            self.fail(f"예측 실패: {e}")  # 실패 시 메시지 출력