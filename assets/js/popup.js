const popup = (element) => {
  let div = document.getElementById(element);
  let btn = document.getElementById("btn" + element);
  div.classList = "popup";
  let slider = document.querySelector(".popup .slider-img");
  let img = document.querySelector(".popup .container-item-img img").src;
  changeBg(slider, img);

  btn.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
    div.classList = "container-item";
  });
};
const popupSlider = (id) => {
  let slider = document.querySelector(".popup .slider-img");
  let img = document.getElementById(id);

  let e = img.parentElement.parentElement.id;
  let parent = document.getElementById(e);
  parent.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
    changeBg(slider, img.src);
  });
};
const changeBg = (slider, bg) => {
  slider.style = `background-image: url(${bg});`;
};
