const user = document.querySelector('#user');
user.addEventListener('keyup', function(e) {
    const u_times = document.querySelector('.u_times');
    const u_check = document.querySelector('.u_check');
    if(user.value.length == 0 || user.value.length < 9) {
    user.style.border = '2px solid red';
    u_times.style.display = 'block';
    u_check.style.display = 'none';
    return false;
    }else {
        user.style.border = '2px solid lime';
        u_check.style.display = 'block';
        u_times.style.display = 'none';
    }
}) 

const pass = document.querySelector('#pass');
pass.addEventListener('keyup', function(e) {
    const p_times = document.querySelector('.p_times');
    const p_check = document.querySelector('.p_check');
    if(pass.value.length == 0 || pass.value.length < 9) {
    pass.style.border = '2px solid red';
    p_check.style.display = 'none';
    p_times.style.display = 'block';
    return false;
    }else {
        pass.style.border = '2px solid lime';
        p_check.style.display = 'block';
        p_times.style.display = 'none';
    }
}) 

function validate() {
 if(user.value == 0 || user.value.length < 9){
  document.getElementById('error').innerHTML = 'Please fill the required fields!';
  return false;
 }else if (pass.value == 0 || pass.value.length < 9) {
    document.getElementById('error').innerHTML = 'Please fill the required fields!';
    return false;
 }else {
 alert('Succesfull logged in');
 }
}