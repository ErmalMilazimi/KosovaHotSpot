const loader = document.querySelector(".loader");

window.addEventListener("load", () => {
  setTimeout(function () {
    loader.parentElement.removeChild(loader);
  }, 10000);
});

const K01 = document.querySelector("#K01");
const K02 = document.querySelector("#K02");
const K03 = document.querySelector("#K03");
const K04 = document.querySelector("#K04");
const K05 = document.querySelector("#K05");
const K06 = document.querySelector("#K06");
const K07 = document.querySelector("#K07");

const K01txt = document.querySelector(".K01txt");
const K02txt = document.querySelector(".K02txt");
const K03txt = document.querySelector(".K03txt");
const K04txt = document.querySelector(".K04txt");
const K05txt = document.querySelector(".K05txt");
const K06txt = document.querySelector(".K06txt");
const K07txt = document.querySelector(".K07txt");

K01.addEventListener(
  "mouseenter",
  function () {
    K01txt.style.color = "yellow";
    setTimeout(function () {
      K01txt.style.color = "";
    }, 1000);
  },
  false
);
K02.addEventListener(
  "mouseover",
  function () {
    K02txt.style.color = "yellow";
    setTimeout(function () {
      K02txt.style.color = "";
    }, 1000);
  },
  false
);
K03.addEventListener(
  "mouseover",
  function () {
    K03txt.style.color = "yellow";
    setTimeout(function () {
      K03txt.style.color = "";
    }, 1000);
  },
  false
);
K04.addEventListener(
  "mouseover",
  function () {
    K04txt.style.color = "yellow";
    setTimeout(function () {
      K04txt.style.color = "";
    }, 1000);
  },
  false
);
K05.addEventListener(
  "mouseover",
  function () {
    K05txt.style.color = "yellow";
    setTimeout(function () {
      K05txt.style.color = "";
    }, 1000);
  },
  false
);
K06.addEventListener(
  "mouseover",
  function () {
    K06txt.style.color = "yellow";
    setTimeout(function () {
      K06txt.style.color = "";
    }, 1000);
  },
  false
);
K07.addEventListener(
  "mouseover",
  function () {
    K07txt.style.color = "yellow";
    setTimeout(function () {
      K07txt.style.color = "";
    }, 1000);
  },
  false
);
