const loader = document.querySelector(".loader");
window.addEventListener("load", () => {
  loader.parentElement.removeChild(loader);
  // setTimeout(function () {
  //   loader.parentElement.removeChild(loader);
  // }, 500);
});

// category select
var hotspotCategoryBtn = document.querySelectorAll(
  ".category-select-ambienti input"
);
var categoryList = [];

function removeElement(arr) {
  var what,
    a = arguments,
    L = a.length,
    ax;
  while (L > 1 && arr.length) {
    what = a[--L];
    while ((ax = arr.indexOf(what)) !== -1) {
      arr.splice(ax, 1);
    }
  }
  return arr;
}

function checkActive(categoryName) {
  const firstBtn = hotspotCategoryBtn[0];
  if (categoryName === "tegjitha") {
    teGjithaBtn(firstBtn);
  } else {
    if (firstBtn.checked) {
      firstBtn.checked = false;
      categoryName = removeElement(categoryList, categoryName);
    } else {
      hotspotCategoryBtn.forEach((element) => {
        if (element.value === categoryName && element.checked) {
          categoryList.push(element.value);
        } else if (element.value === categoryName && !element.checked) {
          categoryName = removeElement(categoryList, categoryName);
        }
      });
    }
  }
  console.log(categoryList);
}

function teGjithaBtn(btnValue) {
  if (btnValue.checked) {
    for (let i = 1; i < hotspotCategoryBtn.length; i++) {
      hotspotCategoryBtn[i].checked = true;
      if (!categoryList.includes(hotspotCategoryBtn[i].value)) {
        categoryList.push(hotspotCategoryBtn[i].value);
      }
    }
  } else {
    for (let i = 0; i < hotspotCategoryBtn.length; i++) {
      hotspotCategoryBtn[i].checked = false;
    }
    categoryList = [];
  }
}
