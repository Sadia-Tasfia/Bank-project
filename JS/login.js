// step-1: add click event handler with the submit button
document.getElementById("submit-btn").addEventListener('click',function(){

  // step-2: get the email address inside the email input
  // always remember to use .value to get the text from input field
  const emailField = document.getElementById("user-email");
  const email = emailField.value;

  // step-3:get the password
  const passwordField = document.getElementById("password");
  const password = passwordField.value;
  // console.log(password);

  // Danger: Do'not verify email pass on the client side to apply this process(don't use this process ever)
  // step-4: Verify email and password
  if (
    ((email !== "function" && email !== "object") ||
      email === "string" ||
      email === "number") &&
      password !== "function" &&
      password !== "object" ||
      password === "string" && 
      password === "number"
  ) {
    window.location.href = "bank.html";
  } else {
    alert("Invalid Email/Password");
  }
});