const body = document.querySelector("body"),
  audioE = body.querySelector("audio");

const loginForm = document.querySelector(".login_form"),
  input = loginForm.querySelector("input");

const checkList = document.querySelector(".checkList"),
  check = checkList.querySelector(".check"),
  h1 = check.querySelector("h1");

const nameList = "name";
const show = "showing";
const hidden = "hidden";
const mainCheck = "user";
const suc = "success";
const can = "cancel";
const reName = "reName";

function paintImage() {
  const image = new Image();
  image.src = `Images/space.gif`;
  body.appendChild(image);
  image.classList.add("img");

  const spaceLogo = document.createElement("h1");
  body.appendChild(spaceLogo);
  spaceLogo.innerText = "Space";
  spaceLogo.classList.add("space_logo");
}

function startAudio() {
  const audioFile = new Audio();
  audioFile.src = "./audio/Space.wav";
  console.log(audioFile);

  setTimeout(function () {
    audioFile.play();
    audioFile.currentTime = 0;
    audioFile.loop = true;
  }, 3000);
}

function saveName(nameUser) {
  localStorage.setItem(nameList, nameUser);
}

function createName(event) {
  event.preventDefault();
  loginForm.classList.remove(hidden);
  const strName = input.value;
  saveName(strName);
  loginForm.classList.remove(show);
  loginForm.classList.add(suc);
  paintImage();
  startAudio();
}

function createReName(event) {
  event.preventDefault();
  loginForm.classList.remove(hidden);
  const strName = input.value;
  saveName(strName);
  loginForm.classList.remove(reName);
  loginForm.classList.add(suc);
  paintImage();
  startAudio();
}

function yesName() {
  checkList.classList.add(suc);
  paintImage();
  startAudio();
}

function noName() {
  checkList.classList.add(can);
  loginForm.classList.add(reName);
  loginForm.classList.remove(show);
  loginForm.classList.remove(hidden);
  handleReName();
}

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

function handleReName() {
  loginForm.addEventListener("submit", createReName);
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
