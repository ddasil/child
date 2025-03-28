var blendAmount = 70;
var delay = -10;
var windowWidth = window.innerWidth;
var body = document.getElementById("bg");

document.onmousemove = function(e){
  mouseX = Math.round(e.pageX / windowWidth * 100 - delay);
  col1 = mouseX - blendAmount;
  col2 = mouseX + blendAmount;
  bg.style.background = "linear-gradient(to right, #ffc3a0 "+ col1 +"%, #ffafbd "+ col2 +"%)";
}

// 로고 버튼 재시작
function restartPage() {
  window.location.reload();
}

// 로그아웃 버튼
function goToSignout() {
  window.location.href = "/home/";
}

// 배경 사진 호버 효과
$(".hover").mouseleave(function () {
  $(this).removeClass("hover");
});

// 로그인 팝업 함수 (alert 사용, true 반환 시 이동)
function showLoginPopup() {
  alert("로그인이 필요한 항목입니다. 로그인 페이지로 이동합니다.");
  return true; // 이동 허용
}

// ✅ home.js 로딩 확인
console.log("✅ home.js 로딩 완료");

// // ✅ 모든 main-button 클릭 이벤트 처리
// document.querySelectorAll(".main-button").forEach(button => {
//   button.addEventListener("click", function (e) {
//     // 로그인이 안 된 상태에서만 팝업 실행되도록 HTML에서 조건 설정해야 함
//     console.log("🔔 main-button 클릭됨");
//   });
// });

// ✅ 미로그인 상태에서만 showLoginPopup 연결
const needLoginBtn = document.getElementById("need-login-button");
if (needLoginBtn) {
  needLoginBtn.addEventListener("click", function () {
    console.log("📢 showLoginPopup 실행됨");
    showLoginPopup();
  });
}