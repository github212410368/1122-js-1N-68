document.addEventListener('DOMContentLoaded', async () => {
  try {
    // Supabase 配置
    const SUPABASE_URL = 'https://xutnzgxehgmvjcjpjfkx.supabase.co/';
    const SUPABASE_ANON_KEY =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh1dG56Z3hlaGdtdmpjanBqZmt4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTc1ODYzMTIsImV4cCI6MjAzMzE2MjMxMn0.FDlJfqcWfYk97ddn-9yugu3FAKHiUIQmdxli5aSypPI';

    // 创建 Supabase 客户端
    const _supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

    // 从 Supabase 获取菜单项数据
    let { data: menu_items, error } = await _supabase
      .from('menu_items')
      .select('*');

    if (error) {
      throw error; // 如果有错误则抛出
    }

    console.log('Menu Items:', menu_items); // 确认数据获取成功

    const sectionCenter = document.querySelector('.section-center'); // 获取显示产品的容器
    const companyBtns = document.querySelectorAll('.company-btn'); // 获取所有公司按钮
    const cartItems = document.querySelector('.cart-items'); // 获取购物车区域
    const quantityModal = document.getElementById('quantity-modal'); // 获取数量选择模态窗口
    const closeModalBtn = document.querySelector('.close-btn'); // 获取关闭模态窗口按钮
    const quantityInput = document.getElementById('quantity-input'); // 获取数量输入框
    const addToCartBtn = document.getElementById('add-to-cart-btn'); // 获取添加到购物车按钮
    const checkoutBtn = document.querySelector('.checkout-btn'); // 获取结账按钮

    let selectedItem; // 当前选择的商品

    // 显示产品的方法
    const displayProducts = (products) => {
      sectionCenter.innerHTML = products
        .map((item) => {
          return `
          <article class="menu-item">
            <img src="${item.img}" alt="${item.title}" class="photo" />
            <div class="item-info">
              <header>
                <h4>${item.title}</h4>
                <h4 class="price">$${item.price}</h4>
              </header>
              <p class="item-text">${item.description}</p>
              <button class="buy-btn" data-id="${item.id}">Buy</button> <!-- 购买按钮 -->
            </div>
          </article>
        `;
        })
        .join(''); // 将产品信息插入到页面中

      // 添加购买按钮点击事件监听器
      const buyButtons = document.querySelectorAll('.buy-btn');
      buyButtons.forEach((button) => {
        button.addEventListener('click', (event) => {
          selectedItem = menu_items.find(
            (item) => item.id == event.target.getAttribute('data-id')
          );
          quantityModal.style.display = 'block'; // 显示模态窗口
        });
      });
    };

    // 关闭模态窗口
    closeModalBtn.addEventListener('click', () => {
      quantityModal.style.display = 'none';
    });

    // 添加到购物车
    addToCartBtn.addEventListener('click', () => {
      const quantity = parseInt(quantityInput.value);
      if (quantity > 0) {
        addToCart(selectedItem, quantity);
        quantityModal.style.display = 'none';
      }
    });
    // 添加商品到购物车
    const addToCart = (item, quantity) => {
      const cartItem = document.createElement('div');
      cartItem.classList.add('cart-item');
      cartItem.innerHTML = `
            <p>${item.title} x ${quantity}</p>
          `;
      cartItems.appendChild(cartItem);
    };

    // 结账
    checkoutBtn.addEventListener('click', async () => {
      const cartItemList = cartItems.querySelectorAll('.cart-item');
      for (const cartItem of cartItemList) {
        const [title, quantity] = cartItem.textContent.split(' x ');
        const item = menu_items.find((item) => item.title === title);
        await recordPurchase(item.id, parseInt(quantity));
      }
      alert('Checkout complete!');
      cartItems.innerHTML = ''; // 清空购物车
    });

    // 记录购买信息到数据库
    async function recordPurchase(itemId, quantity) {
      const { data, error } = await _supabase
        .from('purchases')
        .insert([
          { item_id: itemId, quantity: quantity, timestamp: new Date() },
        ]);

      if (error) {
        console.error('Error recording purchase:', error);
      } else {
        console.log('Purchase recorded successfully:', data);
      }
    }

    // 初始显示所有项目
    displayProducts(menu_items);

    // 为每个公司按钮添加点击事件监听器
    companyBtns.forEach((btn) => {
      btn.addEventListener('click', async (e) => {
        const companyName = e.currentTarget.dataset.id; // 获取公司名称
        console.log('companyName', companyName);
        let products;
        if (companyName === 'all') {
          products = menu_items; // 如果点击的是“all”按钮，则显示所有项目
        } else {
          products = menu_items.filter(
            (product) => product.category === companyName // 根据公司名称过滤产品
          );
        }
        console.log(`${companyName} products`, products);
        displayProducts(products); // 显示过滤后的产品
      });
    });
  } catch (err) {
    console.error('Error:', err); // 捕捉并打印错误
  }
});
