
//검색
const button = document.querySelector('.search-button');
const input = document.querySelector('.search-input');


function updateValue(spanId, value) {
  document.getElementById(spanId).textContent = value;
}

function validateForm() {
  const form = document.getElementById("evaluationForm");

  // HTML5 기본 유효성 검사
  if (form.checkValidity()) {
    alert("모든 질문에 답변했습니다. 다음 페이지로 이동합니다.");
    window.location.href = "로딩.html"; // 다음 페이지 URL로 변경
  } else {
    alert("모든 질문에 답변해주세요!");
  }
}



function submitData() {
  // 폼 데이터 수집
  const data = {
    name: document.getElementById("name").value,
    age: document.getElementById("age").value,
    gender: document.querySelector('input[name="gender"]:checked')?.value,
    bruise: document.querySelector('input[name="bruise"]:checked')?.value,
    fracture: document.getElementById("fracture").value,
    malnutrition: document.querySelector('input[name="malnutrition"]:checked')?.value,
    hygiene: document.querySelector('input[name="hygiene"]:checked')?.value,
    head_injury: document.querySelector('input[name="head_injury"]:checked')?.value,
    self_harm: document.querySelector('input[name="self_harm"]:checked')?.value,
    domestic_violence: document.querySelector('input[name="domestic_violence"]:checked')?.value,
    abuse_reports: document.getElementById("abuse_reports").value
  };

  // 모든 필드가 채워졌는지 확인
  if (Object.values(submit).includes(undefined) || Object.values(submit).includes("")) {
    alert("모든 질문에 답변해주세요!");
    return;
  }

  // 서버로 데이터 전송
  fetch("http://localhost:5000/predict", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
    .then(response => response.json())
    .then(result => {
      alert(`예측 결과: ${result.prediction}`);
      // 결과 페이지로 이동 (선택 사항)
      // window.location.href = "result_page.html";
    })
    .catch(error => {
      console.error("에러 발생:", error);
      alert("데이터 전송 중 문제가 발생했습니다.");
    });
}
