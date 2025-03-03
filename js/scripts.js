document.addEventListener("DOMContentLoaded", function(){
  const button = document.getElementById("clickMe");
  // let myDog = "Stitch";

  button.addEventListener("click",(event) => {
    console.log(event.target);
  });

  const form = document.getElementById("myForm");
  form.addEventListener("submit", validateForm);
})

function validateForm(event){
  event.preventDefault();
  let nameValid = false;
  let emailValid = false;
  let phoneValid = false;
  nameValid = validateName();
  emailValid = validateEmail();
  phoneValid = validatePhone();

  if (nameValid && emailValid && phoneValid){
    event.target.submit();
  }
}

function validateName(){
  const errorMessage = document.getElementById("nameError");

  const nameInput = document.getElementById("nameInput");

  let validate = true;
  const validateName = /\w{5,}/;

  validate = validateName.test(nameInput.value.trim());

  if (validate) {
    return true;
  } else {
    errorMessage.innerText = "Please add a name with at least 5 characters";
    return false;
  }
}

function validateEmail(){
  const errorMessage = document.getElementById("nameError");

  const emailInput = document.getElementById("emailInput");

  const validateEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  validate = validateEmail.test(emailInput.value.trim());

  if (validate) {
    return true;
  } else {
    errorMessage.innerText = "Email invalid, please check format and try again.";
    return false;
  }
}

function validatePhone(){
  const errorMessage = document.getElementById("nameError");

  const phoneInput = document.getElementById("phoneNumber");

  const validatePhone = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/
  validate = validatePhone.test(phoneInput.value);

  if (validate) {
    return true;
  } else {
    errorMessage.innerText = "Phone number invalid, please check format and try again.";
    return false;
  }
}