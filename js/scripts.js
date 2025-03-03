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
 
  const errorMessage = document.getElementById("nameError");
  const emailInput = document.getElementById("emailInput");
  const phoneInput = document.getElementById("poneNumber");


  
  const validateEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  validate = validateEmail.test(emailInput.value.trim());

  const validatePhone = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/
  validate = validatePhone.test(phoneInput.value.trim());

  if (validate) {
    event.target.submit();
  } else {
    errorMessage.innerText = "Please add a name with at least 5 characters";
  }
}

function validateName(){
  const nameInput = document.getElementById("nameInput");
  let validate = true;
  const validateName = /\w{5,}/;
  validate = validateName.test(nameInput.value.trim());
}

function validateEmail(){

}

function validatePhone(){

}