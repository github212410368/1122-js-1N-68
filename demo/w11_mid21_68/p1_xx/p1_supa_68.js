import { _supabase } from './clientsSupabase_68.js';

let products_68 = [];
console.log(_supabase);
const getProductsSupabase_68 = async () => {
  try {
    let { data, error } = await _supabase.from('product_68').select('*');
    console.log('products data', data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

const productContainer = document.querySelector('.products-container');

console.log('products_68', products_68);

const displayProducts = (products) => {
  let productsContent = products
    .map((product) => {
      const { id, title, price, category, img, remote_url } = product; // 將 remote_img 改為 remote_url
      return `
        <div class="single-product">
        <img
          src=${img}
          class="single-product-img img"
          alt=${title}
        />
        <footer>
          <h3 class="name">${title} (${id})</h3>
          <span class="price">$${price}</span>
          <p>Category: ${category}</p>
          <p>Remote Image: <a href="${remote_url}" target="_blank">${remote_url}</a></p> // 顯示 remote_url 的 URL
        </footer>
      </div>
      `;
    })
    .join('');
  productContainer.innerHTML = productsContent;
};

document.addEventListener('DOMContentLoaded', async () => {
  products_68 = await getProductsSupabase_68();
  displayProducts(products_68);
});
