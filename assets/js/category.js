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
  ShowSelected();
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
function ShowSelected() {
  categoryList = categoryList.filter((s) => s.length);
  let list = categoryList
    .map((e) => {
      return `<p>${e}</p>`;
    })
    .join("");

  selectedItems.innerHTML = list;
  console.log(itemsData);
  ShowItems();
}
function citySelect() {
  removeElement(categoryList, currentCity);
  currentCity = city.value;
  categoryList.push(city.value);
  currentCity = city.value;

  ShowSelected();
}
function ShowItems() {
  let items = itemsData
    .map((e) => {
      if (categoryList.length === 0) {
        return `
        <section class="container-item">
          <div class="container-item-img">
            <img src="./assets/img/header/img1.jpg" alt="" />
            <img src="./assets/img/header/img2.jpg" alt="" />
            <img src="./assets/img/header/img3.jpg" alt="" />
            <img src="./assets/img/header/img3.jpg" alt="" />
            <img src="./assets/img/header/img3.jpg" alt="" />
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
      `;
      } else if (categoryList.includes(e.category)) {
        return `
        <section class="container-item">
          <div class="container-item-img">
            <img src="./assets/img/header/img1.jpg" alt="" />
            <img src="./assets/img/header/img2.jpg" alt="" />
            <img src="./assets/img/header/img3.jpg" alt="" />
            <img src="./assets/img/header/img3.jpg" alt="" />
            <img src="./assets/img/header/img3.jpg" alt="" />
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

  container.innerHTML = items;
}
