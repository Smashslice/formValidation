document.addEventListener("DOMContentLoaded", function(){
  const form = document.getElementById("myForm");
  form.addEventListener("submit", validateForm);
})

function validateForm(event){
  const errorMessage = document.getElementById("nameError");
  event.preventDefault();
  let nameValid = false;
  let emailValid = false;
  let phoneValid = false;
  let boxChecked = false;
  nameValid = validateName();
  emailValid = validateEmail();
  phoneValid = validatePhone();
  boxChecked = validateCheckBox();

  if (nameValid && emailValid && phoneValid && boxChecked){
    event.target.submit();
  } else {
    errorMessage.classList.remove("hide");
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

function validateCheckBox(){
  const errorMessage = document.getElementById("nameError");

  const checkBox = document.getElementById("checkBox");

  let validate = true;
  validate = checkBox.checked;

  if (validate) {
    return true;
  } else {
    errorMessage.innerText = "Please agree to the Terms and Conditions before continuining.";
    return false;
  }
}