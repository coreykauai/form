let pw = document.querySelector("#create_password");
let cpw = document.querySelector("#confirm_password");
let submit = document.querySelector("#sub");
let messages = document.querySelector(".msg");
let show = document.querySelector("#showpassword");
let forms = document.querySelector("#myform");
let uinput = document.getElementsByClassName(".inputs");

forms.addEventListener("submit", function (event) {
  console.log("submitted");
  event.preventDefault();
});

function validate() {
  return pw.value === cpw.value;
}

submit.addEventListener("click", function (event) {
  if (!validate()) {
    event.preventDefault();
    messages.innerHTML = "*Passwords do not match";
    document.getElementById("confirm_password").style.border = "1px solid red";
    document.getElementById("create_password").style.border = "1px solid red";
  } else if (pw.value === "") {
    event.preventDefault();
    messages.innerHTML = "*Enter valid password";
    document.getElementById("confirm_password").style.border = "1px solid red";
    document.getElementById("create_password").style.border = "1px solid red";
  } else if (input.value === "") {
    event.preventDefault();
  } else {
    // event.preventDefault();
    window.location.href = "/login.html";
  }
});

function showpw() {
  if (pw.type === "password") {
    pw.type = "text";
    cpw.type = "text";
  } else {
    pw.type = "password";
  }
}

function invalid() {
  if (!validate()) {
    input = "invalid";
  }
}
