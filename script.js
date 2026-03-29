const products = [
    {
        id: '1',
        name: 'خلاط كهربائي متعدد',
        price: 45,
        category: 'أدوات منزلية',
        image: '5.webp',
        description: 'خلاط قوي لتحضير العصائر والشوربات، شفرات حادة من الستانلس ستيل.'
    },
    {
        id: '10',
        name: 'طقم أنتريه مودرن 3قطع-أبيضRA-LR35 - ريترو للأثاث',
        price: 280,
        category: 'أثاث',
        image: '10.webp',
        description: 'طقم أنتريه متكامل يتكوّن من كنبتين وكرسي بتصميم عصري يجمع بين الراحة والأناقة. يوفر مساحة جلوس واسعة ومريحة للاستخدام اليومي أو الاستقبال، مع خامات متينة تضمن ثباتًا وجودة تدوم طويلًا. اللون الأبيض يمنح الغرفة مظهرًا مرتبًا وهادئًا، ويسهل تنسيقه مع مختلف أنماط الديكور ليكون إضافة عملية وجذابة لأي مساحة.'
    },
    {
        id: '2',
        name: 'ثلاجة سامسونج 500 لتر',
        price: 220,
        category: 'أجهزة كهربائية',
        image: '2.webp',
        description: 'ثلاجة سامسونج متطورة مع تقنية التبريد المزدوج، سعة كبيرة وتصميم عصري يناسب كل مطبخ.'
    },
    {
        id: '3',
        name: 'غسالة ملابس أوتوماتيك',
        price: 150,
        category: 'أجهزة كهربائية',
        image: '3.webp',
        description: 'غسالة ملابس أوتوماتيك بالكامل، برامج غسيل متعددة، هادئة وموفرة للمياه والكهرباء.'
    },
    {
        id: '4',
        name: 'طقم قدور جرانيت 10 قطع',
        price: 75,
        category: 'أدوات منزلية',
        image: '4.webp',
        description: 'طقم قدور طبخ عالي الجودة، غير لاصق، سهل التنظيف، وتوزيع حراري متساوي.'
    },
    {
        id: '8',
        name: 'طقم أريكة مودرن',
        price: 190,
        category: 'أثاث',
        image: '8.webp',
        description: 'أريكة مريحة بتصميم عصري، قماش عالي الجودة وألوان تناسب جميع الأذواق.'
    },
    {
        id: '6',
        name: 'شاشة ذكية 55 بوصة 4K',
        price: 150,
        category: 'إلكترونيات',
        image: '6.webp',
        description: 'تلفزيون ذكي بدقة 4K، يدعم نتفليكس ويوتيوب، ألوان زاهية وتجربة مشاهدة غامرة.'
    },
    {
        id: '7',
        name: 'مجموعة منظفات منزلية',
        price: 15,
        category: 'سلع استهلاكية',
        image: '7.jpg',
        description: 'مجموعة شاملة من المنظفات عالية الجودة للمنزل، فعالة وآمنة.'
    },
    {
        id: '9',
        name: 'سماعة رأس هيدفون cardoO',
        price: 50,
        category: 'إلكترونيات',
        image: '9.webp',
        description: 'اشعر بكل نبضة مع محركات صوت 40 مم تقدم صوتاً عميقاً وغنياً مع تريبل نقي.انعزل عن العالم أو تواصل معه بفضل ميزة إلغاء الضوضاء النشط الهجين حتى -35 ديسيبل ووضع الشفافية.تحكّم كامل بين يديك من خلال تطبيق cardoO لإدارة الإعدادات والأنماط وتحديثات النظام بكل سهولة.تحدث بثقة تامة بفضل تقنية الـ 4 ميكروفونات التي تضمن مكالمات نقية وواضحة في جميع الظروف.'
    },
    {
        id: '11',
        name: 'أنتريه مودرن 3 قطع-أوف وايت×برتقالي RA-LR24',
        price: 230,
        category: 'أثاث',
        image: '11.jpg',
        description: 'أنتريه مودرن 3 قطع يجمع بين الأناقة والراحة بتصميم عصري مميز. يأتي بألوان أوف وايت × برتقالي لتضيف لمسة حيوية ودافئة لغرفة المعيشة، مع خامات عالية الجودة توفر المتانة وطول العمر، وتصميم عملي يضمن جلوسًا مريحًا وتجربة فاخرة للمكانالمنتج متاح: عند الطلب'
    },
    {
        id: '12',
        name: 'مكيف هواء إل جي 2 طن',
        price: 150,
        category: 'أجهزة كهربائية',
        image: '1.webp',
        description: 'مكيف هواء سبليت إل جي بقوة 2 طن، موفر للطاقة مع تقنية الإنفرتر، مثالي للأجواء الحارة في السعودية.'
    }
];

let cart = [];
let selectedCategory = 'الكل';
let searchQuery = '';

// DOM Elements
const productsGrid = document.getElementById('products-grid');
const cartCountElement = document.getElementById('cart-count');
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const categoryCards = document.querySelectorAll('.category-card');
const productsTitle = document.getElementById('products-title');
const modal = document.getElementById('product-modal');
const closeModal = document.querySelector('.close-modal');

// Cart Elements
const cartDrawer = document.getElementById('cart-drawer');
const openCartBtn = document.getElementById('open-cart');
const closeCartBtn = document.getElementById('close-cart');
const cartItemsContainer = document.getElementById('cart-items-container');
const cartTotalValue = document.getElementById('cart-total-value');
const checkoutBtn = document.getElementById('checkout-btn');

// Initialize
function init() {
    renderProducts();
    setupEventListeners();
    loadCart();
}

// Render Products
function renderProducts() {
    const filtered = products.filter(p => {
        const matchesSearch = p.name.includes(searchQuery) || p.category.includes(searchQuery);
        const matchesCategory = selectedCategory === 'الكل' || p.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    productsGrid.innerHTML = '';
    
    if (filtered.length === 0) {
        productsGrid.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 50px;">
                <i class="fas fa-search" style="font-size: 48px; color: #ddd; margin-bottom: 20px; display: block;"></i>
                <h3>عذراً، لم نجد أي منتجات</h3>
                <p>حاول البحث بكلمات أخرى أو تغيير القسم المختار.</p>
            </div>
        `;
        return;
    }

    filtered.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card animate';
        card.onclick = () => openProductModal(product);
        card.innerHTML = `
            <div class="product-img">
                <img src="img/${product.image}" alt="${product.name}" referrerPolicy="no-referrer">
                <span class="product-badge">${product.category}</span>
            </div>
            <div class="product-info">
                <h3>${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <span class="product-price">${product.price} <span>ر.س</span></span>
                <div class="product-actions">
                    <button class="btn-whatsapp" onclick="event.stopPropagation(); buyViaWhatsApp('${product.name}', ${product.price})">
                        <i class="fab fa-whatsapp"></i> شراء سريع
                    </button>
                    <button class="btn-cart" onclick="event.stopPropagation(); addToCart('${product.id}')">
                        <i class="fas fa-shopping-bag"></i>
                    </button>
                </div>
            </div>
        `;
        productsGrid.appendChild(card);
    });

    productsTitle.innerText = selectedCategory === 'الكل' ? 'أحدث المنتجات' : `منتجات ${selectedCategory}`;
}

// Event Listeners
function setupEventListeners() {
    // Search Toggle
    searchBtn.addEventListener('click', () => {
        searchInput.classList.toggle('active');
        if (searchInput.classList.contains('active')) {
            searchInput.focus();
        }
    });

    // Search Input
    searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value;
        renderProducts();
    });

    // Category Filtering
    categoryCards.forEach(card => {
        card.addEventListener('click', () => {
            categoryCards.forEach(c => c.classList.remove('active'));
            card.classList.add('active');
            selectedCategory = card.dataset.category;
            renderProducts();
            scrollToSection('products');
        });
    });

    // Close Modal
    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });

    // Cart Drawer Listeners
    openCartBtn.addEventListener('click', () => {
        cartDrawer.classList.add('active');
        document.body.style.overflow = 'hidden';
    });

    closeCartBtn.addEventListener('click', () => {
        cartDrawer.classList.remove('active');
        document.body.style.overflow = 'auto';
    });

    checkoutBtn.addEventListener('click', checkoutViaWhatsApp);
}

// Open Product Modal
function openProductModal(product) {
    document.getElementById('modal-product-image').src = `img/${product.image}`;
    document.getElementById('modal-product-name').innerText = product.name;
    document.getElementById('modal-product-category').innerText = product.category;
    document.getElementById('modal-product-description').innerText = product.description;
    document.getElementById('modal-product-price').innerText = product.price;
    
    document.getElementById('modal-buy-btn').onclick = () => addToCart(product.id);
    document.getElementById('modal-buy-btn').innerHTML = '<i class="fas fa-shopping-bag"></i> إضافة للسلة';
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Cart Functions
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    updateCartUI();
    saveCart();
    
    // Show cart drawer when adding
    cartDrawer.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Close modal if open
    modal.style.display = 'none';
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartUI();
    saveCart();
}

function updateQuantity(productId, delta) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity += delta;
        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else {
            updateCartUI();
            saveCart();
        }
    }
}

function updateCartUI() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCountElement.innerText = totalItems;

    cartItemsContainer.innerHTML = '';
    
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<div class="empty-cart-msg">السلة فارغة حالياً</div>';
        cartTotalValue.innerText = '0';
        return;
    }

    let total = 0;
    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;

        const itemEl = document.createElement('div');
        itemEl.className = 'cart-item';
        itemEl.innerHTML = `
            <img src="img/${item.image}" alt="${item.name}" class="cart-item-img">
            <div class="cart-item-info">
                <h4>${item.name}</h4>
                <span class="price">${item.price} ر.س</span>
                <div class="cart-item-qty">
                    <span class="qty-btn" onclick="updateQuantity('${item.id}', -1)">-</span>
                    <span>${item.quantity}</span>
                    <span class="qty-btn" onclick="updateQuantity('${item.id}', 1)">+</span>
                </div>
            </div>
            <i class="fas fa-trash cart-item-remove" onclick="removeFromCart('${item.id}')"></i>
        `;
        cartItemsContainer.appendChild(itemEl);
    });

    cartTotalValue.innerText = total;
}

function saveCart() {
    localStorage.setItem('alrayyan_cart', JSON.stringify(cart));
}

function loadCart() {
    const savedCart = localStorage.getItem('alrayyan_cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCartUI();
    }
}

// Checkout Functions
function checkoutViaWhatsApp() {
    if (cart.length === 0) {
        alert('السلة فارغة!');
        return;
    }

    const orderId = 'RAY-' + Math.floor(Math.random() * 900000 + 100000);
    const phoneNumber = "201068300432";
    
    let message = `*طلب جديد من متجر الريان*\n`;
    message += `*رقم الطلب:* ${orderId}\n`;
    message += `--------------------------\n`;
    
    cart.forEach(item => {
        message += `• ${item.name} (x${item.quantity}) - ${item.price * item.quantity} ر.س\n`;
    });
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    message += `--------------------------\n`;
    message += `*الإجمالي:* ${total} ر.س\n\n`;
    message += `أود تأكيد هذا الطلب، شكراً لكم.`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
    
    // Optional: Clear cart after checkout
    // cart = [];
    // updateCartUI();
    // saveCart();
}

// Global Functions
window.updateQuantity = updateQuantity;
window.removeFromCart = removeFromCart;
window.addToCart = addToCart;

window.buyViaWhatsApp = (name, price) => {
    const phoneNumber = "201068300432";
    const message = encodeURIComponent(`مرحباً متجر الريان، أود شراء المنتج: ${name} بسعر ${price} ر.س`);
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
};

window.scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
};

window.resetApp = () => {
    searchQuery = '';
    selectedCategory = 'الكل';
    searchInput.value = '';
    searchInput.classList.remove('active');
    categoryCards.forEach(c => {
        c.classList.remove('active');
        if (c.dataset.category === 'الكل') c.classList.add('active');
    });
    renderProducts();
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

// Start
document.addEventListener('DOMContentLoaded', init);
