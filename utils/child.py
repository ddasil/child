import pickle
import os

def load_model():
    # 모델 파일 경로 설정
    current_path = os.path.dirname(__file__)
    model_path = os.path.join(current_path, 'ml_model.pkl')
    
    # 모델 로드
    with open(model_path, 'rb') as f:
        model = pickle.load(f)
    return model

def predict(input_data):
    # 저장된 모델 로드 후 예측 실행
    model = load_model()
    prediction = model.predict(input_data)
    return prediction