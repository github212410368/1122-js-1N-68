import { p1_blogs_xx, all_blogs_xx } from './p1_data_xx.js';

let blogs_xx = p1_blogs_xx;
let count = { numBlogs: 6, index: 2 };
console.log('blogs initially', p1_blogs_xx);

const blogsCenter2 = document.querySelector('.blogs-center2');
const btnClearAll = document.querySelector('.clear-all');
const btnLoadAll = document.querySelector('.load-all');
const btnPush = document.querySelector('.btn-push');
const btnPop = document.querySelector('.btn-pop');

let btnsDelete = [];

const displayBlogItems = (blogs) => {
  let displayBlogs = blogs
    .map((item) => {
      const { id, img, title, desc, category } = item;
      return `
        <article class="blog">
          <img src=${img} alt="" class="img" />
          <div class="blog-content">
            <span> ${category} <i class="fa-solid fa-mug-saucer"></i> </span>
            <h3>${title}</h3>
            <p>
              ${desc}
            </p>
            <div class="footer">
              <a href="#">read more</a>
              <div class="btns">
                <button class="btn btn-edit" type="button" data-id=${id}>
                Edit
                </button>

                <button class="btn btn-delete" type="button" data-id=${id}>
                Delete
                </button>
              </div>
            </div>
          </div>
        </article>
     `;
    })
    .join('');
  blogsCenter2.innerHTML = displayBlogs;
  handleBtnsDelete();
};

btnClearAll.addEventListener('click', () => {
  blogs_xx = [];
  console.log('blogs after clearAll', blogs_xx);
  displayBlogItems(blogs_xx);
});

btnLoadAll.addEventListener('click', () => {
  blogs_xx = p1_blogs_xx;
  console.log('blogs after clearAll', blogs_xx);
  displayBlogItems(blogs_xx);
});

btnPush.addEventListener('click', () => {
  if (count.numBlogs < 9) {
    count.numBlogs++;
    count.index++;
    if (count.index === 9) count.index = 0;
    blogs_xx.push(all_blogs_xx[count.index]);
    console.log('blogs after push a blog', blogs_xx);
    displayBlogItems(blogs_xx);
  } else {
    alert('All blogs are displayed.');
  }
});

btnPop.addEventListener('click', () => {
  if (blogs_xx.length > 0) {
    count.numBlogs--;
    count.index--;
    if (count.index === 0) count.index = 8;
    blogs_xx.pop();
    console.log('blogs after pop a blog', blogs_xx);
    displayBlogItems(blogs_xx);
  } else {
    alert('No blog to pop!');
  }
});

const handleBtnsDelete = () => {
  btnsDelete = document.querySelectorAll('.btn-delete');
  // console.log('btns Delete', btnsDelete);
  btnsDelete.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      console.log('data-id', e.currentTarget.dataset.id);
      const id = e.currentTarget.dataset.id;
      const filterBlogs = blogs_xx.filter((item) => item.id != id);
      blogs_xx = filterBlogs;
      displayBlogItems(filterBlogs);
      console.log('blogs after delete', blogs_xx);
    });
  });
};

window.addEventListener('DOMContentLoaded', () => {
  displayBlogItems(blogs_xx);
  handleBtnsDelete();
});
