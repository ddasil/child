from django.test import TestCase  # Django의 TestCase 가져오기
from main.utils.child import load_model, predict  # 테스트할 함수 가져오기
import numpy as np  # 배열 처리를 위한 numpy

class ChildUtilsTest(TestCase):
    def test_load_model(self):
        """
        load_model() 함수가 제대로 모델을 로드하는지 테스트
        """
        try:
            model = load_model()
            self.assertIsNotNone(model)  # 모델이 None이 아닌지 확인
            print("모델 로드 성공!")
        except Exception as e:
            self.fail(f"모델 로드 실패: {e}")

    def test_predict(self):
        """
        predict() 함수가 입력값에 대해 예측을 반환하는지 테스트
        """
        try:
            # 샘플 데이터를 2D 배열로 준비
            sample_data = np.array([[5, 1, 5, 0, 0, 0, 0, 0, 0, 0]])
            prediction = predict(sample_data)
            # self.assertIsInstance(prediction, list)  # 결과가 리스트인지 확인
            print(f"예측 성공! 결과: {prediction}")
        except Exception as e:
            self.fail(f"예측 실패: {e}")
            
