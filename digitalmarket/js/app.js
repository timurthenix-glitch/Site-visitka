// Products Data
const products = [
    {
        id: 1,
        name: 'NeonDash Admin',
        category: 'templates',
        price: 1290,
        description: 'Современный админ-панель с тёмной темой, графиками и 50+ компонентов.',
        image: 'images/product-1-neondash.jpg'
    },
    {
        id: 2,
        name: 'Minimal UI Kit',
        category: 'ui-kits',
        price: 890,
        description: '150+ минималистичных компонентов для Figma и Sketch.',
        image: 'images/product-2-ui-kit.jpg'
    },
    {
        id: 3,
        name: 'FormMaster Pro',
        category: 'scripts',
        price: 590,
        description: 'Валидация форм с 20+ правилами, масками и кастомными сообщениями.',
        image: 'images/product-3-formmaster.jpg'
    },
    {
        id: 4,
        name: 'ShopWave Theme',
        category: 'templates',
        price: 1590,
        description: 'Готовый шаблон интернет-магазина с корзиной и фильтрами.',
        image: 'images/product-4-shopwave.jpg'
    },
    {
        id: 5,
        name: 'IconFlow Pack',
        category: 'icons',
        price: 390,
        description: '500+ векторных иконок в едином стиле, SVG и PNG.',
        image: 'images/product-5-iconflow.jpg'
    },
    {
        id: 6,
        name: 'MobileFirst App',
        category: 'templates',
        price: 1090,
        description: 'Шаблон мобильного приложения с 30+ экранами.',
        image: 'images/product-6-mobilefirst.jpg'
    },
    {
        id: 7,
        name: 'DataViz Charts',
        category: 'plugins',
        price: 790,
        description: 'Интерактивные графики и диаграммы на чистом JS.',
        image: 'images/product-7-dataviz.jpg'
    },
    {
        id: 8,
        name: 'Landing Starter',
        category: 'templates',
        price: 690,
        description: 'Быстрый старт для лендингов с секциями и анимациями.',
        image: 'images/product-8-landing.jpg'
    },
    {
        id: 9,
        name: 'ChatWidget JS',
        category: 'scripts',
        price: 490,
        description: 'Встраиваемый чат с поддержкой WebSocket и автоответами.',
        image: 'images/product-9-chatwidget.jpg'
    },
    {
        id: 10,
        name: 'SEO Booster',
        category: 'plugins',
        price: 990,
        description: 'Плагин для оптимизации метатегов и структурированных данных.',
        image: 'images/product-10-seo.jpg'
    },
    {
        id: 11,
        name: 'Blogify Theme',
        category: 'templates',
        price: 790,
        description: 'Чистая тема для блога с тёмным режимом и типографикой.',
        image: 'images/product-11-blogify.jpg'
    },
    {
        id: 12,
        name: 'AnimateFX Lib',
        category: 'scripts',
        price: 450,
        description: 'Библиотека анимаций по скроллу и при наведении.',
        image: 'images/product-12-animatefx.jpg'
    }
];

// Category names
const categoryNames = {
    templates: 'Шаблоны',
    'ui-kits': 'UI-Киты',
    scripts: 'Скрипты',
    plugins: 'Плагины',
    icons: 'Иконки'
};

// Cart State
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// DOM Elements
const productsGrid = document.getElementById('productsGrid');
const filtersContainer = document.getElementById('filters');
const cartToggle = document.getElementById('cartToggle');
const cartClose = document.getElementById('cartClose');
const cartDrawer = document.getElementById('cartDrawer');
const cartOverlay = document.getElementById('cartOverlay');
const cartBody = document.getElementById('cartBody');
const cartFooter = document.getElementById('cartFooter');
const cartCount = document.getElementById('cartCount');
const cartTotal = document.getElementById('cartTotal');
const themeToggle = document.getElementById('themeToggle');

// Theme Management
function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.body.setAttribute('data-theme', savedTheme);
}

function toggleTheme() {
    const currentTheme = document.body.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
}

// Render Products
function renderProducts(category = 'all') {
    const filtered = category === 'all' 
        ? products 
        : products.filter(p => p.category === category);
    
    productsGrid.innerHTML = filtered.map((product, index) => `
        <article class="product-card" style="animation-delay: ${index * 0.05}s">
            <div class="product-card__image">
                <img src="${product.image}" alt="${product.name}" loading="lazy">
            </div>
            <div class="product-card__info">
                <div class="product-card__category">${categoryNames[product.category]}</div>
                <h3 class="product-card__title">${product.name}</h3>
                <p class="product-card__desc">${product.description}</p>
                <div class="product-card__footer">
                    <span class="product-card__price">${product.price.toLocaleString('ru-RU')} ₽</span>
                    <button class="product-card__add" onclick="addToCart(${product.id})" title="Добавить в корзину">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                            <line x1="12" y1="5" x2="12" y2="19"/>
                            <line x1="5" y1="12" x2="19" y2="12"/>
                        </svg>
                    </button>
                </div>
            </div>
        </article>
    `).join('');
}

// Filter Handler
filtersContainer.addEventListener('click', (e) => {
    if (!e.target.classList.contains('filter-btn')) return;
    
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    e.target.classList.add('active');
    
    renderProducts(e.target.dataset.category);
});

// Cart Functions
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existing = cart.find(item => item.id === productId);
    
    if (existing) {
        existing.quantity++;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    
    saveCart();
    updateCartUI();
    openCart();
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    updateCartUI();
}

function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function updateCartUI() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    cartCount.textContent = totalItems;
    cartTotal.textContent = `${totalPrice.toLocaleString('ru-RU')} ₽`;
    
    if (cart.length === 0) {
        cartBody.innerHTML = '<div class="cart-empty">Корзина пуста</div>';
        cartFooter.style.display = 'none';
    } else {
        cartBody.innerHTML = cart.map(item => `
            <div class="cart-item">
                <div class="cart-item__image">
                    <img src="${item.image}" alt="${item.name}" loading="lazy">
                </div>
                <div class="cart-item__info">
                    <div class="cart-item__title">${item.name}</div>
                    <div class="cart-item__price">${item.price.toLocaleString('ru-RU')} ₽ × ${item.quantity}</div>
                </div>
                <button class="cart-item__remove" onclick="removeFromCart(${item.id})" title="Удалить">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18"/>
                        <line x1="6" y1="6" x2="18" y2="18"/>
                    </svg>
                </button>
            </div>
        `).join('');
        cartFooter.style.display = 'block';
    }
}

function openCart() {
    cartDrawer.classList.add('active');
    cartOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeCart() {
    cartDrawer.classList.remove('active');
    cartOverlay.classList.remove('active');
    document.body.style.overflow = '';
}

// Event Listeners
cartToggle.addEventListener('click', openCart);
cartClose.addEventListener('click', closeCart);
cartOverlay.addEventListener('click', closeCart);
themeToggle.addEventListener('click', toggleTheme);

// Close on Escape
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeCart();
});

// Init
initTheme();
renderProducts();
updateCartUI();
