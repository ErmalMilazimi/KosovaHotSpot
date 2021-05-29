const popup = (element) => {
  var div = document.getElementById(element);
  var btn = document.getElementById("btn" + element);
  div.classList = "popup";

  btn.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
    div.classList = "container-item";
  });
};
