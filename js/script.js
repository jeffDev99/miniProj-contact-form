// select inputes and messages
const firstnameInp = document.querySelector("#firstnameInp");
const firstnameMsg = document.querySelector("#firstnameMsg");
const lastnameInp = document.querySelector("#lastnameInp");
const lastnameMsg = document.querySelector("#lastnameMsg");
const emailInp = document.querySelector("#email");
const emailValidateMsg = document.querySelector("#emailValidateMsg");
const QueryTypeEls = document.querySelectorAll('input[name="QueryType"]');
const QueryTypeMsg = document.querySelector("#QueryTypeMsg");
const messageInp = document.querySelector("#message");
const messageMsg = document.querySelector("#messageMsg");
const policyCheck = document.querySelector("#policyCheck");
const checkboxMsg = document.querySelector("#checkboxMsg");
const submitBtn = document.querySelector("#submitBtn");

const contactFormEl = document.querySelector("#contactForm");
const modalSentEl = document.querySelector("#modalSent");

let firstnameValidateNull = false,
  lastNameValidateNull = false,
  emailValidateType = false,
  QueryTypeValidateChecked = false,
  messageValidateNull = false,
  checkboxValidateNull = false;

// handle radio button
QueryTypeEls.forEach((element) => {
  element.addEventListener("click", (e) => {
    QueryTypeEls.forEach((item) => {
      item.parentElement.style.backgroundColor = "transparent";
      item.parentElement.style.borderColor = "hsl(186, 15%, 59%)";
    });
    e.target.parentElement.style.backgroundColor = "hsl(148, 38%, 91%)";
    e.target.parentElement.style.borderColor = "hsl(169, 82%, 27%)";
  });
});

// functions
function nullValidation(input, msg) {
  if (input.value.trim() === "" || input.value.trim() === null) {
    input.classList.add("error");
    msg.classList.add("show");
    return false;
  } else {
    input.classList.remove("error");
    msg.classList.remove("show");
    return true;
  }
}
function radioCheckValidation(radioEls, msg) {
  let radioArray = Array.from(radioEls);
  let isRadioChecked = radioArray.some((item) => item.checked);
  if (!isRadioChecked) {
    msg.classList.add("show");
    return false;
  } else {
    msg.classList.remove("show");
    return true;
  }
}
function checkboxCheckValidation(checkbox, msg) {
  if (!checkbox.checked) {
    msg.classList.add("show");
    return false;
  } else {
    msg.classList.remove("show");
    return true;
  }
}
function validateEmail(emailInp, msg) {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailRegex.test(emailInp.value)) {
    emailInp.classList.add("error");
    msg.classList.add("show");
    return false;
  } else {
    emailInp.classList.remove("error");
    msg.classList.remove("show");
    return true;
  }
}
// events
window.addEventListener("load", () => {
  firstnameInp.focus();
  QueryTypeEls.forEach((item) => {
    if (item.checked) {
      item.parentElement.style.backgroundColor = "hsl(148, 38%, 91%)";
      item.parentElement.style.borderColor = "hsl(169, 82%, 27%)";
    }
  });
});
submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  firstnameValidateNull = nullValidation(firstnameInp, firstnameMsg);
  lastNameValidateNull = nullValidation(lastnameInp, lastnameMsg);
  emailValidateType = validateEmail(emailInp, emailValidateMsg);
  QueryTypeValidateChecked = radioCheckValidation(QueryTypeEls, QueryTypeMsg);
  messageValidateNull = nullValidation(messageInp, messageMsg);
  checkboxValidateNull = checkboxCheckValidation(policyCheck, checkboxMsg);
  if (firstnameValidateNull && lastNameValidateNull && emailValidateType && QueryTypeValidateChecked && messageValidateNull && checkboxValidateNull) {
    modalSentEl.classList.add("show");
    setTimeout(() => {
      modalSentEl.classList.remove("show");
      setTimeout(() => {
        contactFormEl.submit();
      }, 500);
    }, 3000);
  }
});
