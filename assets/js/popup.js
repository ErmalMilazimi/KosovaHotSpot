const popup = (element) => {
  var div = document.getElementById(element);
  if (div.className.includes("popup")) {
    div.classList = "container-item";
    console.log("QET");
  } else {
    div.classList = "popup";
  }
};
