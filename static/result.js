// 서버 응답에서 받은 머신러닝 예측 결과
const min = 40;
const max = 80;

const predictionResponse = {
  score: Math.floor(Math.random() * (max - min + 1)) + min,
  recommendation: `즉시 관련 기관에 신고하거나 전문가의 도움을 요청하세요.`,
};

// 결과를 보여줄 HTML 요소
const resultText = document.getElementById('resultText');
const instructionsText = document.getElementById('instructionsText');

// 예측 점수에 따른 결과 표시 로직
if (predictionResponse.score >= 70) {
  resultText.textContent = `아동학대 의심 (${predictionResponse.score}% 예상)`;
  instructionsText.innerHTML = predictionResponse.recommendation; // innerHTML 사용으로 줄바꿈 적용
} else {
  resultText.textContent = `아동학대 X (${predictionResponse.score}% 예상) `;
  instructionsText.textContent =
    "아동은 안전합니다. 하지만, 지속적인 관심과 세심한 관찰로 그들의 건강과 행복을 함께 지켜주세요.";
}


function _class(name){
  return document.getElementsByClassName(name);
}

let tabPanes = _class("tab-header")[0].getElementsByTagName("div");

for(let i=0;i<tabPanes.length;i++){
  tabPanes[i].addEventListener("click",function(){
    _class("tab-header")[0].getElementsByClassName("active")[0].classList.remove("active");
    tabPanes[i].classList.add("active");
    
    _class("tab-indicator")[0].style.top = `calc(80px + ${i*50}px)`;
    
    _class("tab-content")[0].getElementsByClassName("active")[0].classList.remove("active");
    _class("tab-content")[0].getElementsByTagName("div")[i].classList.add("active");
    
  });
}
