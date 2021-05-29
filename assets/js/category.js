var hotspotCategoryBtn = document.querySelectorAll(
  ".category-select-ambienti input"
);
var container = document.getElementById("container");
var selectedItems = document.getElementById("category-selected");
var city = document.getElementById("qytetet");
var currentCity = "";
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
const checkActive = (categoryName) => {
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
  ShowSelected();
};
const teGjithaBtn = (btnValue) => {
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
};
const ShowSelected = () => {
  categoryList = categoryList.filter((s) => s.length);
  let list = categoryList
    .map((e) => {
      return `<p>${e}</p>`;
    })
    .join("");
  if (currentCity.length > 0) {
    list += `<p>${currentCity}</p>`;
  }
  selectedItems.innerHTML = list;
  ShowItems();
};
const citySelect = () => {
  currentCity = city.value;

  ShowSelected();
};
const ShowItems = () => {
  let id = 1;
  let items = itemsData
    .map((e) => {
      if (checkCategory(e.category)) {
        return `
        <section class="container-item" id="${id++}" onclick="popup(this.id)">
        <button id="btn${id - 1}"><span>+</span></button>
          <div class="container-item-img">
            <img src="${e.img[0]}" alt="" />
            <img src="${e.img[1]}" alt="" />
            <img src="${e.img[2]}" alt="" />
          </div>
          <div class="container-item-text">
            <h2 class="container-item-text-title">${e.title}</h2>
            <p class="container-item-text-desc">
            ${e.desc}
            </p>
            <p class="container-item-text-location">
              <a href=""><i class="fas fa-map-marker-alt"></i>
              ${e.location}</a>
            </p>
          </div>
        </section>
        ---
      `;
      } else if (
        categoryList.length === 0 &&
        (currentCity === "" || currentCity === null)
      ) {
        return `
        <section class="container-item" id="${id++}" onclick="popup(this.id)">
        <button id="btn${id - 1}"><span>+</span></button>
          <div class="container-item-img">
            <img src="${e.img[0]}" alt="" />
            <img src="${e.img[1]}" alt="" />
            <img src="${e.img[2]}" alt="" />
          </div>
          <div class="container-item-text">
            <h2 class="container-item-text-title">${e.title}</h2>
            <p class="container-item-text-desc">
            ${e.desc}
            </p>
            <p class="container-item-text-location">
              <a href=""><i class="fas fa-map-marker-alt"></i>
              ${e.location}</a>
            </p>
          </div>
        </section>
        ---
      `;
      }
    })
    .join("");
  if (items.length === 0) {
    items = `
        <section class="container-item-nothig">
          <h1>Per momentin nuk e kemi te regjistruar vendin e kerkuar!</h1>
          <p>Nese dini ndonje vend te bukur dhe deshironi ta shfaqni ketu</p>
          <a href="faq.html">Klikoni ketu</a>
        </section>
      `;
  }
  let itemsArr = items.split("---");
  pagination(itemsArr);
};
const checkCategory = (arr) => {
  if (currentCity === "" || currentCity === null) {
    for (let j = 0; j < categoryList.length; j++) {
      if (arr.includes(categoryList[j])) {
        return true;
      }
    }
  } else {
    if (arr.includes(currentCity)) {
      if (categoryList.length > 0) {
        for (let i = 0; i < categoryList.length; i++) {
          if (arr.includes(categoryList[i])) {
            return true;
          }
        }
      } else {
        return true;
      }
    }
  }
  return false;
};
const pagination = (itemsArr) => {
  let itemsString = itemsArr
    .map((e) => {
      return e;
    })
    .join("");

  console.log(itemsArr.length - 1);
  container.innerHTML = itemsString;
};
