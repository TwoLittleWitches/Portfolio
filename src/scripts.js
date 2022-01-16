function submitForm(event) {
  let username = document.querySelector("#input-username");
  event.preventDefault();
  alert(
    `Thank you ${username}... Your message has been sent and I will be in touch soon.`
  );
}

let form = document.querySelector("#message-form");
form.addEventListener("submit", submitForm);
