"use strict";

let user = {
  login: "",
  password: "",
  isRegistration: false,
  reason: "",
};

let possibleReasons = ["Boring content.", "Bad mood.", "Wrong weather."];

let questions = {
  start: "Do you want to login?",
  reason: "Why?\nPlease, type number of reason or tell uour own reason!\n",
  correctLogin: "What is your login?",
  incorrectLogin: "Login is incorrect. 5 characters min. Try again.",
  canceled: "Registration has been canceled.",
  pass: "Enter your password.",
  passConfirm: "Confirm you password",
};

function checkReasons() {
  let msgContent = `${questions.reason}`;
  for (let i = 0; i < possibleReasons.length; i++) {
    msgContent += `Reason ${i + 1}: ${possibleReasons[i]}\n`;
  }
  let answer = prompt(msgContent);
  if (!answer) {
    answer = "No reason given.";
  }
  return answer;
}

function checkLogin() {
  let isValid = false;
  let username = prompt(questions.correctLogin);
  while (!isValid) {
    if (username === null) {
      username = questions.canceled;
      isValid = true;
    } else if (username.length < 4) {
      username = prompt(questions.incorrectLogin);
    } else {
      isValid = true;
    }
  }
  return username;
}

function chekPassword() {
  let password = prompt(questions.pass);
  let passwordConfirm = prompt(questions.passConfirm);
  while (password !== passwordConfirm) {
    password = prompt(questions.pass);
    passwordConfirm = prompt(questions.passConfirm);
  }
  return password;
}

function main(user) {
  const msg = confirm(`${questions.start}`);
  if (msg) {
    user.login = checkLogin();
    user.password = chekPassword();
  } else {
    user.reason = checkReasons();
  }
  console.log(user);
}

main(user);
alert("FINISH");
