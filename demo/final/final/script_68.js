document.addEventListener('DOMContentLoaded', async () => {
  try {
    const SUPABASE_URL = "https://xutnzgxehgmvjcjpjfkx.supabase.co/";
    const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh1dG56Z3hlaGdtdmpjanBqZmt4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTc1ODYzMTIsImV4cCI6MjAzMzE2MjMxMn0.FDlJfqcWfYk97ddn-9yugu3FAKHiUIQmdxli5aSypPI";

    const _supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

    let { data: menu_items, error } = await _supabase
      .from('menu_items')
      .select('*');

    if (error) {
      throw error;
    }

    console.log('Menu Items:', menu_items); // Confirm data fetch

    const sectionCenter = document.querySelector('.section-center');
    const companyBtns = document.querySelectorAll('.company-btn');

    const displayProducts = (products) => {
      sectionCenter.innerHTML = products.map(item => {
        return `
          <article class="menu-item">
            <img src="${item.img}" alt="${item.title}" class="photo" />
            <div class="item-info">
              <header>
                <h4>${item.title}</h4>
                <h4 class="price">$${item.price}</h4>
              </header>
              <p class="item-text">${item.description}</p>
            </div>
          </article>
        `;
      }).join('');
    };

    // Initially display all items
    displayProducts(menu_items);

    companyBtns.forEach((btn) => {
      btn.addEventListener("click", async (e) => {
        const companyName = e.currentTarget.dataset.id;
        console.log("companyName", companyName);
        let products;
        if (companyName === "all") {
          products = menu_items;
        } else {
          products = menu_items.filter(
            (product) => product.category === companyName
          );
        }
        console.log(`${companyName} products`, products);
        displayProducts(products);
      });
    });
  } catch (err) {
    console.error('Error:', err);
  }
});
