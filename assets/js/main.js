const loader = document.querySelector(".loader");
window.addEventListener("load", () => {
  loader.parentElement.removeChild(loader);
  // setTimeout(function () {
  //   loader.parentElement.removeChild(loader);
  // }, 500);
});
