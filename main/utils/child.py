import pickle
import numpy as np

def load_model():
    with open("ml_model.pkl", "rb") as file:
        model = pickle.load(file)
    return model

def encode_feature(value, mapping):
    """카테고리 값을 숫자로 변환하는 함수"""
    return mapping.get(value, 0)

def predict_abuse(gender, age, bruise, fracture, malnutrition, hygiene, 
                  head_injury, self_harm, domestic_violence, abuse_reports):
    model = load_model()

    # 카테고리 변환
    gender = 1 if gender == "male" else 0
    bruise = encode_feature(bruise, {"none": 0, "yes": 1})
    malnutrition = encode_feature(malnutrition, {"none": 0, "yes": 1})
    hygiene = encode_feature(hygiene, {"poor": 0, "clean": 1})
    head_injury = encode_feature(head_injury, {"none": 0, "yes": 1})
    self_harm = encode_feature(self_harm, {"none": 0, "yes": 1})
    domestic_violence = encode_feature(domestic_violence, {"none": 0, "yes": 1})

    # 입력 데이터 배열 생성
    input_data = np.array([[gender, age, bruise, fracture, malnutrition, hygiene,
                             head_injury, self_harm, domestic_violence, abuse_reports]])

    # 확률 예측 (예측값이 1일 확률)
    probability = model.predict_proba(input_data)[0, 1] * 100
    return round(probability, 2)  # 소수점 2자리까지 반올림