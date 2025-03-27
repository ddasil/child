document.getElementById('loginButton').addEventListener('click', function(event) {
    event.preventDefault(); // 기본 제출 동작 방지
  
    // 입력값 가져오기
    const loginUserid = document.getElementById('loginUserid').value;
    const loginPwd = document.getElementById('loginPwd').value;
  
    // 로컬 스토리지에서 사용자 데이터 가져오기
    const users = JSON.parse(localStorage.getItem('users')) || [];
  
    // 입력한 아이디와 비밀번호가 일치하는지 확인
    const user = users.find(u => u.userid === loginUserid && u.pwd1 === loginPwd);
  
    if (user) {
        alert('로그인 성공!');
        console.log('홈 페이지로 이동 중...');
        window.location.href = '/home2/'; // 이동할 HTML 페이지 경로
    } else {
        alert('로그인 실패: 아이디 또는 비밀번호가 틀렸습니다.');
        console.error('로그인 실패: 일치하는 사용자가 없습니다.');
    }
});
  console.log(localStorage.getItem('users'));
  
          // "뒤로가기" 버튼 클릭 시 실행
          function navigateToBack() {
            window.location.href = '/';  // ✅ Django의 home view는 root 경로
          }
      
          // "회원가입" 버튼 클릭 시 실행
          function navigateToSignup() {
            window.location.href = '/signup/'; // 이동할 HTML 페이지 경로
          }
          
          function restartPage() {
            //  홈페이지를 돌아갑니다.
            window.location.href = '/home/';
          }