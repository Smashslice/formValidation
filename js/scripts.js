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
  const nameInput = document.getElementById("nameInput");

  let validate = true;
  let garbage = /\w{5,}/;
  validate = garbage.test(nameInput.value.trim())

  const errorMessage = document.getElementById("nameError");
  // errorMessage.innerHTML = "";
  // if (!nameInput.value.trim()) {
  //   errorMessage.innerText = "Please add a name";
  //   validate = false;
  // } else if (nameInput.value.length <5) {
  //   errorMessage.innerText = "Name must be at least 5 characters";
  //   validate = false;
  // }

  if (validate) {
    event.target.submit();
  } else {
    errorMessage.innerText = "Please add a name with at least 5 characters";
  }
}