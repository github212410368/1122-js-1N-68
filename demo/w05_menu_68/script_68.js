import menu from './data_68.js';

const sectionCenter = document.querySelector('.section-center');

console.log('menu', menu);

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

const categories = ['all', 'breakfast', 'lunch', 'dinner', 'shakes'];

const displayMenuButtons = () => {};

const btnContainer = document.querySelector('.btn-container');

categories.forEach((category) => {
  const button = document.createElement('button');
  button.type = 'button';
  button.classList.add('filter-btn');
  button.dataset.id = category;
  button.textContent = category;

  btnContainer.appendChild(button);
});

window.addEventListener('DOMContentLoaded', () => {
  displayMenuitems(menu);
  displayMenuButtons();
});
