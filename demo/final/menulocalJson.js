// import menu from './data_68.js';

const url = './api/data_68.json';
let menu = [];
const sectionCenter = document.querySelector('.section-center');
const btnContainer = document.querySelector('.btn-container');
 
 
 
const fetchData = async () => {
  try {
    const response = await fetch(url);
    const data = response.json();
    console.log('fetch menu', data);
    return data ;
  } catch (error){
    console.log(error);
  }
};
console.log('menu', menu);
 
const displayMenuItems = (menuItems) => {
  let displayMenu = menuItems
    .map((item) => {
      const { id, title, category, price, local_img, descrip } = item;
      return `
        <article class="menu-item">
          <img
            src="${local_img}"
            alt="${title}"
            class="photo"
          />
          <div class="item-info">
            <header>
              <h4>${title}</h4>
              <h4 class="price">$${price}</h4>
            </header>
            <p class="item-text">
              ${descrip}
            </p>
          </div>
        </article>
      `;
    })
    .join('');
  // console.log('displayMenu', displayMenuItems);
  sectionCenter.innerHTML = displayMenu;
};
 
 
// const categories = ['all', 'breakfast', 'lunch', 'dinner', 'shakes'];
const menuCategories = new Set(
  menu.map((item) => {
    return item.category;
  })
);
console.log('menuCategories', menuCategories);
 
const categories = ['all', ...menuCategories];
console.log('categories', categories);
 
// categories.forEach((category) => {
//   const button = document.createElement('button');
//   button.type = 'button';
//   button.classList.add('filter-btn');
//   button.dataset.id = category;
//   button.textContent = category;
 
//   btnContainer.appendChild(button);
// });
 
const displayMenuButtons = (menuItems) => {
  const menuCategories = new Set(
    menuItems.map((item) => {
      return item.category;
    })
  );
  
  const categories = ['all', ...menuCategories];
  let menuButtons = categories
    .map((category) => {
      return `<button type="button" class="filter-btn" data-id="${category}">${category}</button>`;
    })
    .join('');
  btnContainer.innerHTML = menuButtons;
 
  const filterBtns = btnContainer.querySelectorAll('.filter-btn');
  filterBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const category = e.currentTarget.dataset.id;
      const filterMenu = menuItems.filter((menuItem) => menuItem.category === category);
      if (category === 'all') {
        displayMenuItems(menuItems);
      } else {
        displayMenuItems(filterMenu);
      }
    });
  });
};

window.addEventListener('DOMContentLoaded', async () => {
  menu = await fetchData();
  displayMenuItems(menu);
  displayMenuButtons(menu); 
});