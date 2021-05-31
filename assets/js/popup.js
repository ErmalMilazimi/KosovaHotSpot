const popup = (element) => {
  let div = document.getElementById(element);
  let btn = document.getElementById("btn" + element);
  div.classList = "popup";

  btn.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
    div.classList = "container-item";
  });
};

const popupSlider = (id) => {
  let slider = document.getElementsByClassName("slider-img");
  console.log(slider);
};
