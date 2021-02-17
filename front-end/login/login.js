var log = document.getElementById("login");
var reg = document.getElementById("register");
var btn = document.getElementById("button");

function register(){
    log.style.left = "-400px";
    reg.style.left = "50px";
    btn.style.left = "110px";
}

function login(){
    log.style.left = "50px";
    reg.style.left = "450px";
    btn.style.left = "0px";
}

/* controllo inserimento password */
/*var myInput = document.getElementById("password");
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");
var check_passw_lowecase = false; 
var check_passw_lowecase = false;
var check_passw_uppercase = false;
var check_passw_number = false;
var check_passw_length = false;
var check_password = false;

// When the user clicks on the password field, show the message box
myInput.onfocus = function() {
  document.getElementById("message").style.display = "block";
}

// When the user clicks outside of the password field, hide the message box
myInput.onblur = function() {
  document.getElementById("message").style.display = "none";
}

// When the user starts to type something inside the password field
myInput.onkeyup = function() {
  // Validate lowercase letters
  var lowerCaseLetters = /[a-z]/g;
  if(myInput.value.match(lowerCaseLetters)) {
    check_passw_lowecase = true;
    } else {
        check_passw_lowecase = false;
    }

  // Validate capital letters
  var upperCaseLetters = /[A-Z]/g;
  if(myInput.value.match(upperCaseLetters)) {
    check_passw_uppercase = true;
    } else {
        check_passw_uppercase = false;
    }

  // Validate numbers
  var numbers = /[0-9]/g;
  if(myInput.value.match(numbers)) {
    check_passw_number = true;
    } else {
        check_passw_number = false;
    }

  // Validate length
  if(myInput.value.length >= 8) {
    check_passw_length = true;
    } else {
        check_passw_length = false;
    }

    if(check_passw_length == true && check_passw_lowecase == true && check_passw_number == true && check_passw_uppercase == true){
        document.getElementById('control_message').style.color = 'green';
        document.getElementById('control_message').innerHTML = 'password corretta'; 
        check_password = true;
    } else{
        document.getElementById('control_message').style.color = 'red';
        document.getElementById('control_message').innerHTML = 'password errata';
        check_password = false;
    }
}*/


/* funzione per il controllo sul reinserimento della password */
var check = function() {
    if (document.getElementById('password').value ==
      document.getElementById('confirm_password').value) {
      document.getElementById('control_message').style.color = 'green';
      document.getElementById('control_message').innerHTML = 'password corretta';
    } else {
      document.getElementById('control_message').style.color = 'red';
      document.getElementById('control_message').innerHTML = 'password errata';
    }
  }
