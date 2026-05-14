// ===== DATA =====
const PRODUCTS = [
  { id: 1, name: 'Мята перечная', description: 'Освежает, помогает при расстройстве желудка и головной боли. Идеальна для утреннего чая.', price: 350, weight: '50г', category: 'Бодрящие', image: 'product-mint.png', benefits: ['Освежает дыхание', 'Улучшает пищеварение', 'Снимает головную боль', 'Повышает концентрацию'] },
  { id: 2, name: 'Мелисса лекарственная', description: 'Успокаивает нервную систему, улучшает сон. Нежный лимонный аромат.', price: 320, weight: '50г', category: 'Успокоительные', image: 'product-melissa.png', benefits: ['Успокаивает нервы', 'Улучшает качество сна', 'Снимает тревожность', 'Помогает при стрессе'] },
  { id: 3, name: 'Ромашка аптечная', description: 'Снимает воспаление, укрепляет иммунитет. Классика травяного чая.', price: 280, weight: '50г', category: 'Для иммунитета', image: 'product-chamomile.png', benefits: ['Противовоспалительное', 'Укрепляет иммунитет', 'Успокаивает', 'Помогает при простуде'] },
  { id: 4, name: 'Шиповник', description: 'Богат витамином C, укрепляет защитные силы организма. Яркий ягодный вкус.', price: 250, weight: '100г', category: 'Для иммунитета', image: 'product-rosehip.png', benefits: ['Богат витамином C', 'Укрепляет иммунитет', 'Тонизирует', 'Улучшает обмен веществ'] },
  { id: 5, name: 'Липа цвет', description: 'Потогонное средство, помогает при простуде. Медовый аромат и мягкий вкус.', price: 300, weight: '50г', category: 'Для иммунитета', image: 'product-linden.png', benefits: ['Потогонное действие', 'Помогает при простуде', 'Успокаивает', 'Снимает жар'] },
  { id: 6, name: 'Чабрец (Тимьян)', description: 'Бодрит, улучшает пищеварение, обладает антисептическим действием.', price: 380, weight: '50г', category: 'Бодрящие', image: 'product-thyme.png', benefits: ['Бодрящий эффект', 'Улучшает пищеварение', 'Антисептическое', 'Облегчает дыхание'] },
  { id: 7, name: 'Иван-чай', description: 'Успокаивает, нормализует сон, богат микроэлементами. Традиционный русский чай.', price: 420, weight: '100г', category: 'Успокоительные', image: 'product-fireweed.png', benefits: ['Успокаивает', 'Нормализует сон', 'Богат микроэлементами', 'Укрепляет иммунитет'] },
  { id: 8, name: 'Душица обыкновенная', description: 'Улучшает пищеварение, снимает спазмы. Приятный пряный аромат.', price: 290, weight: '50г', category: 'Бодрящие', image: 'product-oregano.png', benefits: ['Улучшает пищеварение', 'Снимает спазмы', 'Антисептическое', 'Приятный аромат'] },
  { id: 9, name: 'Зверобой продырявленный', description: 'Поднимает настроение, укрепляет нервную систему. Солнечная трава.', price: 340, weight: '50г', category: 'Успокоительные', image: 'product-stjohn.png', benefits: ['Поднимает настроение', 'Укрепляет нервы', 'Успокаивает', 'Помогает при депрессии'] },
  { id: 10, name: 'Календула лекарственная', description: 'Противовоспалительное, заживляющее действие. Яркие солнечные лепестки.', price: 310, weight: '50г', category: 'Десертные', image: 'product-calendula.png', benefits: ['Противовоспалительное', 'Заживляющее', 'Укрепляет иммунитет', 'Красивый настой'] },
];

const CATEGORIES = ['Все', 'Успокоительные', 'Бодрящие', 'Для иммунитета', 'Десертные'];

const RECIPES = [
  {
    id: 'r1',
    name: 'Успокоительный вечер',
    description: 'Снимает напряжение после долгого дня. Мягкий аромат и глубокий сон.',
    items: [2, 7, 9],
    discount: 0.10,
  },
  {
    id: 'r2',
    name: 'Иммунитет +',
    description: 'Укрепляет защитные силы организма. Идеально в сезон простуд.',
    items: [3, 4, 5],
    discount: 0.10,
  },
  {
    id: 'r3',
    name: 'Бодрый день',
    description: 'Бодрит, улучшает концентрацию и настроение. Лучший старт утра.',
    items: [1, 6, 8],
    discount: 0.10,
  },
  {
    id: 'r4',
    name: 'Цветочный микс',
    description: 'Нежный цветочный вкус с лёгким успокаивающим эффектом.',
    items: [3, 5, 10],
    discount: 0.10,
  },
];

// ===== LOCAL STORAGE =====
function lsGet(key, def) {
  try { const v = localStorage.getItem(key); return v ? JSON.parse(v) : def; }
  catch { return def; }
}
function lsSet(key, val) {
  try { localStorage.setItem(key, JSON.stringify(val)); } catch {}
}

// ===== STATE =====
let cart = lsGet('cart', []);
let user = lsGet('user', null);
let orders = lsGet('orders', []);
let activeCategory = 'Все';
let searchQuery = '';
let visibleCards = new Set();

// ===== DOM =====
const els = {
  products: document.getElementById('products'),
  filters: document.getElementById('filters'),
  emptyState: document.getElementById('emptyState'),
  searchInput: document.getElementById('searchInput'),
  mobileSearchInput: document.getElementById('mobileSearchInput'),
  mobileSearch: document.getElementById('mobileSearch'),
  mobileSearchBtn: document.getElementById('mobileSearchBtn'),
  cartBadge: document.getElementById('cartBadge'),
  cartDrawer: document.getElementById('cartDrawer'),
  cartBody: document.getElementById('cartBody'),
  cartFooter: document.getElementById('cartFooter'),
  cartTotalPrice: document.getElementById('cartTotalPrice'),
  cartBtn: document.getElementById('cartBtn'),
  productModal: document.getElementById('productModal'),
  productModalBody: document.getElementById('productModalBody'),
  orderModal: document.getElementById('orderModal'),
  profileModal: document.getElementById('profileModal'),
  profileBody: document.getElementById('profileBody'),
  profileBtn: document.getElementById('profileBtn'),
  recipesGrid: document.getElementById('recipesGrid'),
};

// ===== RENDER FILTERS =====
function renderFilters() {
  els.filters.innerHTML = CATEGORIES.map(cat =>
    `<button class="filter-btn ${cat === activeCategory ? 'active' : ''}" onclick="setCategory('${cat}')">${cat}</button>`
  ).join('');
}

function setCategory(cat) {
  activeCategory = cat;
  renderFilters();
  renderProducts();
}

// ===== RENDER PRODUCTS =====
function renderProducts() {
  let filtered = PRODUCTS;
  if (activeCategory !== 'Все') filtered = filtered.filter(p => p.category === activeCategory);
  if (searchQuery.trim()) {
    const q = searchQuery.toLowerCase();
    filtered = filtered.filter(p => p.name.toLowerCase().includes(q) || p.description.toLowerCase().includes(q));
  }

  if (filtered.length === 0) {
    els.products.style.display = 'none';
    els.emptyState.style.display = 'block';
    return;
  }

  els.products.style.display = 'grid';
  els.emptyState.style.display = 'none';

  els.products.innerHTML = filtered.map(p => {
    const inCart = cart.find(c => c.id === p.id);
    const addedClass = inCart ? 'added' : '';
    const btnContent = inCart
      ? `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg><span class="btn-add__text">В корзине</span>`
      : `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>`;
    return `
      <article class="product-card" data-id="${p.id}" onclick="openProduct(${p.id})">
        <div class="product-card__image">
          <img src="${p.image}" alt="${p.name}" loading="lazy">
          <span class="product-card__badge">${p.category}</span>
        </div>
        <div class="product-card__info">
          <h3 class="product-card__name">${p.name}</h3>
          <p class="product-card__desc">${p.description}</p>
          <div class="product-card__footer">
            <div>
              <div class="product-card__price">${p.price} ₽</div>
              <div class="product-card__weight">${p.weight}</div>
            </div>
            <button class="btn-add ${addedClass}" onclick="event.stopPropagation(); addToCart(${p.id})" data-id="${p.id}">
              ${btnContent}
            </button>
          </div>
        </div>
      </article>
    `;
  }).join('');

  // Intersection Observer for animations
  requestAnimationFrame(() => {
    const cards = document.querySelectorAll('.product-card');
    cards.forEach((card, i) => {
      setTimeout(() => card.classList.add('visible'), i * 60);
    });
  });
}

// ===== SEARCH =====
function handleSearch(e) {
  searchQuery = e.target.value;
  activeCategory = 'Все';
  renderFilters();
  renderProducts();
}

els.searchInput?.addEventListener('input', handleSearch);
els.mobileSearchInput?.addEventListener('input', handleSearch);

els.mobileSearchBtn?.addEventListener('click', () => {
  els.mobileSearch.classList.toggle('open');
  if (els.mobileSearch.classList.contains('open')) {
    setTimeout(() => els.mobileSearchInput.focus(), 100);
  }
});

// ===== CART =====
function getCartCount() {
  return cart.reduce((s, i) => s + i.quantity, 0);
}

function getCartTotal() {
  return cart.reduce((s, i) => s + i.price * i.quantity, 0);
}

function updateCartBadge() {
  const count = getCartCount();
  els.cartBadge.textContent = count;
  els.cartBadge.classList.toggle('visible', count > 0);
}

function addToCart(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;
  const existing = cart.find(c => c.id === productId);
  if (existing) {
    existing.quantity++;
  } else {
    cart.push({ ...product, quantity: 1 });
  }
  lsSet('cart', cart);
  updateCartBadge();
  renderProducts();
}

function removeFromCart(productId) {
  cart = cart.filter(c => c.id !== productId);
  lsSet('cart', cart);
  updateCartBadge();
  renderCart();
  renderProducts();
}

function updateQty(productId, delta) {
  const item = cart.find(c => c.id === productId);
  if (!item) return;
  item.quantity = Math.max(1, item.quantity + delta);
  lsSet('cart', cart);
  renderCart();
  updateCartBadge();
}

function clearCart() {
  cart = [];
  lsSet('cart', cart);
  updateCartBadge();
  renderCart();
  renderProducts();
}

function renderCart() {
  if (cart.length === 0) {
    els.cartBody.innerHTML = `
      <div class="cart-empty">
        <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="rgba(201,169,110,0.3)" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/>
          <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/>
        </svg>
        <p>Корзина пуста</p>
      </div>
    `;
    els.cartFooter.style.display = 'none';
    return;
  }

  els.cartFooter.style.display = 'block';
  els.cartTotalPrice.textContent = getCartTotal().toLocaleString('ru-RU') + ' ₽';

  els.cartBody.innerHTML = cart.map(item => `
    <div class="cart-item">
      <div class="cart-item__image">
        <img src="${item.image}" alt="${item.name}">
      </div>
      <div class="cart-item__info">
        <div class="cart-item__name">${item.name}</div>
        <div class="cart-item__price">${item.price} ₽ / ${item.weight}</div>
        <div class="cart-item__qty">
          <button class="qty-btn" onclick="updateQty(${item.id}, -1)">−</button>
          <span>${item.quantity}</span>
          <button class="qty-btn" onclick="updateQty(${item.id}, 1)">+</button>
        </div>
      </div>
      <button class="cart-item__remove" onclick="removeFromCart(${item.id})">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/></svg>
      </button>
    </div>
  `).join('');
}

function openCart() {
  renderCart();
  els.cartDrawer.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeCart() {
  els.cartDrawer.classList.remove('open');
  document.body.style.overflow = '';
}

els.cartBtn?.addEventListener('click', openCart);

// ===== PRODUCT MODAL =====
function openProduct(id) {
  const p = PRODUCTS.find(x => x.id === id);
  if (!p) return;
  const inCart = cart.find(c => c.id === id);
  const btnText = inCart ? 'В корзине' : 'В корзину';
  const btnStyle = inCart ? 'background:rgba(76,175,80,0.15);color:#4caf50;border:1px solid rgba(76,175,80,0.25);' : '';

  els.productModalBody.innerHTML = `
    <div class="product-detail">
      <div class="product-detail__image">
        <img src="${p.image}" alt="${p.name}">
      </div>
      <div class="product-detail__info">
        <div class="product-detail__category">${p.category}</div>
        <h2 class="product-detail__name">${p.name}</h2>
        <div class="product-detail__weight">${p.weight}</div>
        <p class="product-detail__desc">${p.description}</p>
        <div class="benefits">
          ${p.benefits.map(b => `<span class="benefit-tag">${b}</span>`).join('')}
        </div>
        <div class="product-detail__footer">
          <div class="product-detail__price">${p.price} ₽</div>
          <button class="btn-primary" style="width:auto;padding:12px 28px;${btnStyle}" onclick="addToCart(${p.id});closeProductModal()">
            ${btnText}
          </button>
        </div>
      </div>
    </div>
  `;

  els.productModal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeProductModal() {
  els.productModal.classList.remove('open');
  document.body.style.overflow = '';
}

// ===== ORDER FORM =====
function showOrderForm() {
  closeCart();
  els.orderModal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeOrderForm() {
  els.orderModal.classList.remove('open');
  document.body.style.overflow = '';
}

function submitOrder() {
  const name = document.getElementById('orderName').value.trim();
  const phone = document.getElementById('orderPhone').value.trim();
  const address = document.getElementById('orderAddress').value.trim();

  if (!name || !phone || !address) {
    alert('Пожалуйста, заполните все поля');
    return;
  }

  const order = {
    id: 'ORD-' + Date.now(),
    date: new Date().toLocaleDateString('ru-RU'),
    items: [...cart],
    total: getCartTotal(),
    customerName: name,
    phone,
    address,
    status: 'В обработке',
  };

  orders.unshift(order);
  lsSet('orders', orders);
  cart = [];
  lsSet('cart', cart);
  updateCartBadge();
  renderProducts();
  closeOrderForm();

  setTimeout(() => {
    alert(`Заказ ${order.id} оформлен! Мы свяжемся с вами для подтверждения.`);
  }, 300);
}

// ===== PROFILE =====
function openProfile() {
  els.profileModal.classList.add('open');
  document.body.style.overflow = 'hidden';
  renderProfile();
}

function closeProfile() {
  els.profileModal.classList.remove('open');
  document.body.style.overflow = '';
}

function renderProfile() {
  if (!user) {
    els.profileBody.innerHTML = `
      <div class="profile-login">
        <h3>Вход</h3>
        <div class="form-group">
          <label>Имя</label>
          <input type="text" id="loginName" placeholder="Ваше имя">
        </div>
        <div class="form-group">
          <label>Email</label>
          <input type="email" id="loginEmail" placeholder="your@email.com">
        </div>
        <button class="btn-primary" onclick="doLogin()">Войти</button>
      </div>
    `;
  } else {
    const ordersHtml = orders.length === 0
      ? '<p style="color:var(--text-muted);font-size:13px;">Пока нет заказов</p>'
      : orders.map(o => `
          <div class="order-card">
            <div class="order-card__header">
              <span class="order-card__id">${o.id}</span>
              <span class="order-card__date">${o.date}</span>
            </div>
            <div class="order-card__items">${o.items.length} товаров</div>
            <div class="order-card__footer">
              <span class="order-card__total">${o.total.toLocaleString('ru-RU')} ₽</span>
              <span class="order-status">${o.status}</span>
            </div>
          </div>
        `).join('');

    els.profileBody.innerHTML = `
      <div class="profile-info">
        <div class="profile-info__header">
          <div class="profile-avatar">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
          </div>
          <div>
            <div class="profile-info__name">${user.name}</div>
            <div class="profile-info__email">${user.email}</div>
          </div>
        </div>
        <div class="orders-section">
          <h4>История заказов</h4>
          ${ordersHtml}
        </div>
        <button class="btn-logout" onclick="doLogout()">Выйти</button>
      </div>
    `;
  }
}

function doLogin() {
  const name = document.getElementById('loginName').value.trim();
  const email = document.getElementById('loginEmail').value.trim();
  if (!name || !email) {
    alert('Заполните имя и email');
    return;
  }
  user = { name, email };
  lsSet('user', user);
  renderProfile();
}

function doLogout() {
  user = null;
  lsSet('user', null);
  closeProfile();
}

els.profileBtn?.addEventListener('click', openProfile);

// ===== SCROLL TO CATALOG =====
function scrollToCatalog() {
  document.getElementById('catalog').scrollIntoView({ behavior: 'smooth' });
}

// ===== RECIPES =====
function getRecipePrice(recipe) {
  const total = recipe.items.reduce((sum, id) => {
    const p = PRODUCTS.find(x => x.id === id);
    return sum + (p ? p.price : 0);
  }, 0);
  return {
    old: total,
    new: Math.round(total * (1 - recipe.discount)),
  };
}

function addRecipeToCart(recipeId) {
  const recipe = RECIPES.find(r => r.id === recipeId);
  if (!recipe) return;
  recipe.items.forEach(id => {
    const existing = cart.find(c => c.id === id);
    if (existing) {
      existing.quantity++;
    } else {
      const p = PRODUCTS.find(x => x.id === id);
      if (p) cart.push({ ...p, quantity: 1 });
    }
  });
  lsSet('cart', cart);
  updateCartBadge();
  renderProducts();
}

function renderRecipes() {
  if (!els.recipesGrid) return;
  els.recipesGrid.innerHTML = RECIPES.map((r, i) => {
    const prices = getRecipePrice(r);
    const itemsHtml = r.items.map(id => {
      const p = PRODUCTS.find(x => x.id === id);
      if (!p) return '';
      return `
        <div class="recipe-item">
          <img src="${p.image}" alt="${p.name}">
          <span>${p.name}</span>
          <small>${p.weight}</small>
        </div>
      `;
    }).join('');

    return `
      <div class="recipe-card" style="transition-delay: ${i * 100}ms">
        <div class="recipe-card__name">${r.name}</div>
        <div class="recipe-card__desc">${r.description}</div>
        <div class="recipe-card__items">${itemsHtml}</div>
        <div class="recipe-card__footer">
          <div class="recipe-card__price">
            <span class="recipe-card__price-old">${prices.old.toLocaleString('ru-RU')} ₽</span>
            <span class="recipe-card__price-new">${prices.new.toLocaleString('ru-RU')} ₽ <span>со скидкой ${Math.round(r.discount * 100)}%</span></span>
          </div>
          <button class="btn-primary" style="width:auto;padding:10px 20px;font-size:13px;" onclick="addRecipeToCart('${r.id}')">
            Добавить все
          </button>
        </div>
      </div>
    `;
  }).join('');

  requestAnimationFrame(() => {
    const cards = document.querySelectorAll('.recipe-card');
    cards.forEach((card, i) => {
      setTimeout(() => card.classList.add('visible'), i * 100);
    });
  });
}

// ===== INIT =====
renderFilters();
renderProducts();
renderRecipes();
updateCartBadge();

// Close modals on Escape
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    closeProductModal();
    closeCart();
    closeOrderForm();
    closeProfile();
  }
});
