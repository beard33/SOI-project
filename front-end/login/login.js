let log = document.getElementById("login");
let reg = document.getElementById("register");
let btn = document.getElementById("button");
let switchLogin = document.getElementById("switch-login");
let switchRegister = document.getElementById("switch-register");

function register(){
    log.style.left = "-400px";
    reg.style.left = "50px";
    btn.style.left = "110px";
    switchLogin.style.color = "black";
    switchRegister.style.color = "whitesmoke";
}

function login(){
    log.style.left = "50px";
    reg.style.left = "450px";
    btn.style.left = "0px";
    switchLogin.style.color = "whitesmoke";
    switchRegister.style.color = "black";
}

/* funzione per il controllo sul reinserimento della password */
var check = function() {
  let pwd = document.getElementById('password').value;
  let repeatedPwd = document.getElementById('confirm_password').value;

    if (!(pwd && repeatedPwd)){     
       document.getElementById('control_message').innerHTML = ' ';
    } else if (pwd == repeatedPwd) {
      document.getElementById('control_message').style.color = 'green';
      document.getElementById('control_message').innerHTML = 'PASSWORD MATCH';
    } else {
      document.getElementById('control_message').style.color = 'red';
      document.getElementById('control_message').innerHTML = 'PASSWORD MISMATCH';
    }
  }
