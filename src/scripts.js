function submitForm(event) {
  let name = document.querySelector("#name");

  event.preventDefault();
  alert(
    `Thank you ${name}... Your message has been sent and I will be in touch soon.`
  );
}

let form = document.querySelector("#message-form");
form.addEventListener("submit", submitForm);
