const categoriesArray = document.querySelectorAll(".item");
const showCategoriesQuantity = () => {
  console.log(`Number of categories: ${categoriesArray.length}`);
};

let categories = Array.prototype.map.call(
  categoriesArray,
  (category) => category.firstElementChild.textContent
);
let categoryItemsQuantity = Array.prototype.map.call(
  categoriesArray,
  (category) => category.lastElementChild.childElementCount
);

const showInfo = () => {
  showCategoriesQuantity();
  for (let i = 0; i < categories.length; i += 1) {
    console.log(
      `Category: ${categories[i]} \nElements: ${categoryItemsQuantity[i]}`
    );
  }
};

showInfo();
