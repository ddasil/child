document.getElementById('loginButton').addEventListener('click', function(event) {
  event.preventDefault(); // 기본 제출 동작 방지

  const loginUserid = document.getElementById('loginUserid').value;
  const loginPwd = document.getElementById('loginPwd').value;

  const users = JSON.parse(localStorage.getItem('users')) || [];

  const user = users.find(u => u.userid === loginUserid && u.pwd1 === loginPwd);

  if (user) {
    alert('로그인 성공!');
    console.log('홈 페이지로 이동 중...');
    
    // ✅ 로그인 성공 시 currentUser 저장
    localStorage.setItem('currentUser', user.userid);

    window.location.href = '/home2/';
  } else {
    alert('로그인 실패: 아이디 또는 비밀번호가 틀렸습니다.');
    console.error('로그인 실패: 일치하는 사용자가 없습니다.');
  }
});