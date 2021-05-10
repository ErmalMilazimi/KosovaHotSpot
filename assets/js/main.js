const loader = document.querySelector(".loader");

window.addEventListener("load", () => {
  setTimeout(function () {
    loader.parentElement.removeChild(loader);
  }, 3000);
});
