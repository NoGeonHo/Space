const body = document.querySelector("body");

const checkName = "name";

function loadImage() {
  const image = new Image();
  image.src = `Images/space.gif`;
  body.appendChild(image);
  image.classList.add("img");
}

function paintImage() {
  const currentName = localStorage.getItem(checkName);

  if (currentName === null) {
  } else {
  }
}

function init() {
  loadImage();
  paintImage();
}
init();
