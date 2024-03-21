import menu from './data_68.js';

const sectionCenter = document.querySelector('.section-center');

console.log('Menu', menu);

const displayMenuitems = (menu) => {
  let displayMenu = menu
    .map((item) => {
      const { id, title, category, price, img, desc } = item;
      return `<article class="menu-item">
        <img
          src=${img}
          alt="buttermilk"
          pancakes=""
          class="photo"
        />
        <div class="item-info">
          <header>
            <h4>${title}</h4>
            <h4 class="price">${price}</h4>
          </header>
          <p class="item-text">
            ${desc}
        </div>
      </article>`;
    })
    .join('');
  console.log('displayMenu', displayMenu);
  sectionCenter.innerHTML = displayMenu;
};

window.addEventListener('DOMContentLoaded', () => {
  displayMenuitems(menu);
});
