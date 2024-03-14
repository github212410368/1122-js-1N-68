import { tours_68 } from './data_68.js';

console.log('tours_68', tours_68);

const section = document.querySelector('.section-center');

const displayTours_68 = () => {
  const tourInfo = tours_68
    .map((tour) => {
      const { id, info, local_img, name, price } = tour;
      return `
      <article class="single-tour">
       <img src=${local_img} alt=${name} />
       <footer>
         <div class="tour-info">
           <h4>${name}</h4>
           <h4 class="tour-price">$${price}</h4>
         </div>
         <p>
         ${info}
           Paris is synonymous with the finest things that culture can
           offer — in art, fashion, food, literature, and ideas. On this
           tour, your Paris-savvy Rick Steves guide will immerse you in the
           very best of ...<button>read more</button>
         </p>
         <button class="delete-btn">not interested</button>
       </footer>
       </article>
       `;
    })
    .join('');
  section.innerHTML = tourInfo;
};

window.addEventListener('DOMContentLoaded', () => {
  displayTours_68();
});
