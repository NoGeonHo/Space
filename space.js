const loginForm = document.querySelector(".login_form"),
  input = loginForm.querySelector("input");

const checklist = document.querySelector(".checkList"),
  check = checklist.querySelector(".check"),
  h1 = check.querySelector("h1");

const nameList = "name";
const show = "showing";
const hidden = "hidden";
const mainCheck = "user";

function saveName(nameUser) {
  localStorage.setItem(nameList, nameUser);
}

function createName(event) {
  event.preventDefault();
  loginForm.classList.remove(hidden);
  const strName = input.value;
  saveName(strName);
}

function yesName() {}

function noName() {}

function paintName(text) {
  const btn1 = document.createElement("button");
  const btn2 = document.createElement("button");

  check.classList.add(mainCheck);

  check.append(btn1);
  btn1.innerText = "✔";
  btn1.classList.add("yesBtn");
  btn1.addEventListener("click", yesName);

  check.append(btn2);
  btn2.innerText = "X";
  btn2.classList.add("noBtn");
  btn2.addEventListener("click", noName);

  h1.innerText = `your name is ${text}?`;
  loginForm.classList.add(hidden);
}

function handleName() {
  loginForm.classList.add(show);
  loginForm.addEventListener("submit", createName);
}

function loadName() {
  const checkName = localStorage.getItem(nameList);

  if (checkName === null) {
    handleName();
  } else {
    paintName(checkName);
  }
}

function init() {
  loadName();
}
init();
