// document.getElementById('signup').addEventListener('submit', function(event) {
//   event.preventDefault(); // 기본 제출 동작 방지

//   // 기존 데이터 가져오기 (배열)
//   let users = JSON.parse(localStorage.getItem('users')) || [];

//   // 폼 데이터 가져오기
//   const formData = {
//     userid: document.getElementById('userid').value,
//     pwd1: document.getElementById('pwd1').value,
//     fullname: document.getElementById('fullname').value,
//     email: document.getElementById('email').value,
//     tel: document.getElementById('tel').value,
//     daycareName: document.getElementById('daycare-name').value,
//     daycareAddress: document.getElementById('daycare-address').value,
//     daycarePhone: document.getElementById('daycare-phone').value,
//   };

//   // 중복 아이디 확인
//   const existingUser = users.find(user => user.userid === formData.userid);
//   if (existingUser) {
//     alert('이미 존재하는 아이디입니다.');
//     return;
//   }

//   // 새로운 사용자 추가
//   users.push(formData);
//   localStorage.setItem('users', JSON.stringify(users));

//   alert('회원가입 완료!');
//   window.location.href = 'login.html'; // 회원가입 후 이동할 페이지
// });
