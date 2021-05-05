const images = {
  slider1: "/assets/img/slider1.jpg",
  slider2: "/assets/img/slider2.jpg",
  slider3: "/assets/img/slider3.jpeg",
  slider4: "/assets/img/slider4.jpg",
  slider5: "/assets/img/slider5.jpg",
  slider6: "/assets/img/slider6.jpg",
};

const slide = document.querySelectorAll(".slide img");

let index = 0;

function slideshow() {
  if (index == 0) {
    slide[0].src = images.slider1;
    slide[1].src = images.slider2;
    slide[2].src = images.slider3;
    index = 1;
  } else if (index == 1) {
    slide[0].src = images.slider4;
    slide[1].src = images.slider5;
    slide[2].src = images.slider6;
    index = 0;
  }
}

setInterval(slideshow, 5000);
