var img = [
  "assets/img/header/img1.jpg",
  "assets/img/header/img2.jpg",
  "assets/img/header/img3.jpg",
  "assets/img/header/img4.jpg",
  "assets/img/header/img5.jpg",
  "assets/img/header/img6.jpg",
];
let idx = 0;
var header = document.querySelector("header");

const changeBg = () => {
  header.style.backgroundImage = `url(${img[idx++]})`;
  if (idx === img.length) idx = 0;
};

setInterval(changeBg, 5000);
