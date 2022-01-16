function submitForm(event) {
  let inputemail = document.querySelector("#email-input");
  let inputuser = document.querySelector("#username-input");
  event.preventDefault();
  alert(
    `Thank you ${inputuser.value}... Your message has been sent and I shall get back to you shortly.`
  );
}

let form = document.querySelector("#signup-form");
form.addEventListener("submit", submitForm);
