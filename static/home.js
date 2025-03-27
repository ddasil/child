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

//로고 버튼 재시작
function restartPage() {
  // 현재 페이지를 다시 로드합니다.
  window.location.reload();
}
// 로그인버튼
function goBack() {
  window.location.href = "/signon/"; // 로그인 페이지로 이동
}

//회원가입 버튼
function goToSignup() {
  window.location.href = "/signup/"; // 회원가입 페이지로 이동
}

//로그아웃 버튼
function goToSignout() {
  window.location.href = "/home/"; // 로그인 전 메인 페이지로 이동
}

// 배경 사진
/* Demo purposes only */
$(".hover").mouseleave(
  function () {
    $(this).removeClass("hover");
  }
);

// 아동학대 위험 진단 버튼
function goToMain() {
  window.location.href = "/main/"; // 메인 페이지로 이동
}