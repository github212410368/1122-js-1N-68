import { p1_products_68, all_products_68 } from './p1_data_68.js';

let products_68 = p1_products_68;
let count = { numProducts: 6, index: 2 };
console.log('products initially', p1_products_68);

const productContainer = document.querySelector('.products-container');

console.log('products_68', products_68);

const DisplayProductsItems = (products) => {
  let DisplayProducts = products
    .map((item) => {
      const { id, img, title, category, price } = item;
      return `
      <div class="single-product">
      <img
        src="${img}"
        class="single-product-img img"
        alt="high-back bench"
      />
      <span> ${category} <i class="fa-solid fa-mug-saucer"></i> </span>
      <footer>
        <h3 class="name">${title}</h3>
        <h4 class="price">${price}</h4>
      </footer>
    </div>
          `;
    })
    .join('');
  productContainer.innerHTML = DisplayProducts;
};

document.addEventListener('DOMContentLoaded', () => {
  DisplayProductsItems(products_68);
});
