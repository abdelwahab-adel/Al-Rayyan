const products = [
    {
        id: '1',
        name: 'خلاط كهربائي متعدد',
        price: 45,
        category: 'أدوات منزلية',
        image: '5.webp',
        desc: 'خلاط قوي لتحضير العصائر والشوربات، شفرات حادة من الستانلس ستيل.', isNew:false, rating:4.5 
    },
    {
        id: '10',
        name: 'طقم أنتريه مودرن 3قطع-أبيضRA-LR35 - ريترو للأثاث',
        price: 280,
        category: 'أثاث',
        image: '10.webp',
        desc: 'طقم أنتريه متكامل يتكوّن من كنبتين وكرسي بتصميم عصري يجمع بين الراحة والأناقة. يوفر مساحة جلوس واسعة ومريحة للاستخدام اليومي أو الاستقبال، مع خامات متينة تضمن ثباتًا وجودة تدوم طويلًا. اللون الأبيض يمنح الغرفة مظهرًا مرتبًا وهادئًا، ويسهل تنسيقه مع مختلف أنماط الديكور ليكون إضافة عملية وجذابة لأي مساحة.'
    },
    {
        id: '2',
        name: 'ثلاجة سامسونج 600 لتر',
        price: 220,
        category: 'أجهزة كهربائية',
        image: '2.webp',
        desc: 'ثلاجة سامسونج متطورة مع تقنية التبريد المزدوج، سعة كبيرة وتصميم عصري يناسب كل مطبخ.', isNew:true, rating:4.8
    },
    {
        id: '3',
        name: 'غسالة ملابس أوتوماتيك',
        price: 150,
        category: 'أجهزة كهربائية',
        image: '3.webp',
        desc: 'غسالة ملابس أوتوماتيك بالكامل، برامج غسيل متعددة، هادئة وموفرة للمياه والكهرباء.', isNew:false, rating:4.7
    },
    {
        id: '4',
        name: 'طقم قدور جرانيت 10 قطع',
        price: 75,
        category: 'أدوات منزلية',
        image: '4.webp',
        desc: 'طقم قدور طبخ عالي الجودة، غير لاصق، سهل التنظيف، وتوزيع حراري متساوي.', isNew:false, rating:4.3
    },
    {
        id: '8',
        name: 'طقم أريكة مودرن',
        price: 190,
        category: 'أثاث',
        image: '8.webp',
        desc: 'أريكة مريحة بتصميم عصري، قماش عالي الجودة وألوان تناسب جميع الأذواق.', isNew:false, rating:4.6 
    },
    {
        id: '6',
        name: 'شاشة ذكية 55 بوصة 4K',
        price: 150,
        category: 'إلكترونيات',
        image: '6.webp',
        desc: 'تلفزيون ذكي بدقة 4K، يدعم نتفليكس ويوتيوب، ألوان زاهية وتجربة مشاهدة غامرة.', isNew:false, rating:4.2
    },
    {
        id: '7',
        name: 'مجموعة منظفات منزلية',
        price: 15,
        category: 'سلع استهلاكية',
        image: '7.jpg',
        desc: 'مجموعة شاملة من المنظفات عالية الجودة للمنزل، فعالة وآمنة.', isNew:true, rating:4.9 
    },
    {
        id: '9',
        name: 'سماعة رأس هيدفون cardoO',
        price: 50,
        category: 'إلكترونيات',
        image: '9.webp',
        desc: 'اشعر بكل نبضة مع محركات صوت 40 مم تقدم صوتاً عميقاً وغنياً مع تريبل نقي.انعزل عن العالم أو تواصل معه بفضل ميزة إلغاء الضوضاء النشط الهجين حتى -35 ديسيبل ووضع الشفافية.تحكّم كامل بين يديك من خلال تطبيق cardoO لإدارة الإعدادات والأنماط وتحديثات النظام بكل سهولة.تحدث بثقة تامة بفضل تقنية الـ 4 ميكروفونات التي تضمن مكالمات نقية وواضحة في جميع الظروف.', isNew:false, rating:4.6 
    },
    {
        id: '11',
        name: 'أنتريه مودرن 3 قطع-أوف وايت×برتقالي RA-LR24',
        price: 230,
        category: 'أثاث',
        image: '11.jpg',
        desc: 'أنتريه مودرن 3 قطع يجمع بين الأناقة والراحة بتصميم عصري مميز. يأتي بألوان أوف وايت × برتقالي لتضيف لمسة حيوية ودافئة لغرفة المعيشة، مع خامات عالية الجودة توفر المتانة وطول العمر، وتصميم عملي يضمن جلوسًا مريحًا وتجربة فاخرة للمكانالمنتج متاح: عند الطلب', isNew:true, rating:4.8 
    },
    {
        id: '12',
        name: 'مكيف هواء إل جي 2 طن',
        price: 150,
        category: 'أجهزة كهربائية',
        image: '1.webp',
        desc: 'مكيف هواء سبليت إل جي بقوة 2 طن، موفر للطاقة مع تقنية الإنفرتر، مثالي للأجواء الحارة في السعودية.', isNew:false, rating:4.5 
    }

/* ===================== DATA ===================== */

  ,{ id:'23', name:'خلاط كهربائي متعدد الوظائف', price:45, oldPrice:65, category:'أدوات منزلية', image:'https://images.unsplash.com/photo-1585515320310-259814833e62?auto=format&fit=crop&q=80&w=600', desc:'خلاط قوي لتحضير العصائر والشوربات، شفرات حادة من الستانلس ستيل، ضمان سنة.', isNew:false, rating:4.5 },
  { id:'22', name:'طقم أنتريه مودرن 3 قطع - أبيض RA-LR35', price:280, oldPrice:350, category:'أثاث', image:'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=600', desc:'طقم أنتريه متكامل يتكوّن من كنبتين وكرسي بتصميم عصري يجمع بين الراحة والأناقة.', isNew:false, rating:4  },
  { id:'12', name:'ثلاجة سامسونج 500 لتر', price:1850, oldPrice:2200, category:'أجهزة كهربائية', image:'https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?auto=format&fit=crop&q=80&w=600', desc:'ثلاجة سامسونج متطورة مع تقنية التبريد المزدوج، سعة كبيرة وتصميم عصري يناسب كل مطبخ.', isNew:true, rating:4.2  },
  { id:'13', name:'غسالة ملابس أوتوماتيك', price:1200, oldPrice:1500, category:'أجهزة كهربائية', image:'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=600', desc:'غسالة ملابس أوتوماتيك بالكامل، برامج غسيل متعددة، هادئة وموفرة للمياه والكهرباء.' , isNew:true, rating:4 },
  { id:'14', name:'طقم قدور جرانيت 10 قطع', price:75, oldPrice:110, category:'أدوات منزلية', image:'https://images.unsplash.com/photo-1584990347449-a5ca91bc5c15?auto=format&fit=crop&q=80&w=600', desc:'طقم قدور طبخ عالي الجودة، غير لاصق، سهل التنظيف، وتوزيع حراري متساوي.', isNew:false, rating:4 },
  { id:'18', name:'طقم أريكة مودرن فاخر', price:190, oldPrice:260, category:'أثاث', image:'https://images.unsplash.com/photo-1567016432779-094069958ea5?auto=format&fit=crop&q=80&w=600', desc:'أريكة مريحة بتصميم عصري، قماش عالي الجودة وألوان تناسب جميع الأذواق.', isNew:true, rating:4.3 },
  { id:'16', name:'شاشة ذكية 50 بوصة 4K', price:1450, oldPrice:1800, category:'إلكترونيات', image:'https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&q=80&w=600', desc:'تلفزيون ذكي بدقة 4K، يدعم نتفليكس ويوتيوب، ألوان زاهية وتجربة مشاهدة غامرة.', isNew:true, rating:4.7 },
  { id:'17', name:'مجموعة منظفات منزلية مميزة', price:15, oldPrice:null, category:'سلع استهلاكية', image:'https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&q=80&w=600', desc:'مجموعة شاملة من المنظفات عالية الجودة للمنزل، فعالة وآمنة للاستخدام اليومي.', isNew:false, rating:4  },
  { id:'19', name:'سماعة رأس هيدفون cardoO', price:50, oldPrice:80, category:'إلكترونيات', image:'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=600', desc:'اشعر بكل نبضة مع محركات صوت 40مم، إلغاء ضوضاء نشط حتى -35dB، بطارية 30 ساعة.', isNew:false, rating:4 },
  { id:'21', name:'أنتريه مودرن 3 قطع - أوف وايت×برتقالي', price:230, oldPrice:310, category:'أثاث', image:'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&q=80&w=600', desc:'أنتريه مودرن 3 قطع يجمع الأناقة والراحة بتصميم عصري مميز بألوان أوف وايت × برتقالي.', isNew:false, rating:4 },
  { id:'5', name:'مكيف هواء إل جي 1.5 طن', price:1650, oldPrice:2000, category:'أجهزة كهربائية', image:'12.jpg', desc:'مكيف هواء سبليت إل جي بقوة 1.5 طن، موفر للطاقة مع تقنية الإنفرتر، مثالي للأجواء الحارة.', isNew:false, rating:4.7 }
];

const WA_NUM = "201068300432";

/* ===================== STATE ===================== */
let cart = JSON.parse(localStorage.getItem('ry_cart')||'[]');
let wishlist = JSON.parse(localStorage.getItem('ry_wl')||'[]');
let selectedCat = 'الكل';
let searchQ = '';
let sortVal = 'default';
let currentProduct = null;

/* ===================== HELPER FUNCTIONS ===================== */
function getProductImageSrc(product) {
  // إذا كانت الصورة رابط كامل (يبدأ بـ http أو /), استخدمها كما هي
  // وإلا، أضف مسار المجلد 'img/'
  if (product.image.startsWith('http') || product.image.startsWith('/')) {
    return product.image;
  }
  return `img/${product.image}`;
}

/* ===================== INIT ===================== */
document.addEventListener('DOMContentLoaded', () => {
  renderProducts();
  renderCart();
  updateWLBadge();
  setupEvents();
  startCountdown();
  startNotifications();
  initScrollEffects();
});

/* ===================== RENDER PRODUCTS ===================== */
function renderProducts() {
  let filtered = products.filter(p => {
    const qMatch = p.name.includes(searchQ) || p.category.includes(searchQ) || p.desc.includes(searchQ);
    const catMatch = selectedCat === 'الكل' || p.category === selectedCat;
    return qMatch && catMatch;
  });

  if (sortVal === 'price-asc') filtered.sort((a,b) => a.price - b.price);
  else if (sortVal === 'price-desc') filtered.sort((a,b) => b.price - a.price);
  else if (sortVal === 'name') filtered.sort((a,b) => a.name.localeCompare(b.name,'ar'));

  const grid = document.getElementById('products-grid');
  if (!filtered.length) {
    grid.innerHTML = `<div class="empty-state"><i class="fas fa-search"></i><h3>لا توجد نتائج</h3><p>حاول تغيير معايير البحث أو الفلترة</p></div>`;
    return;
  }

  grid.innerHTML = filtered.map(p => {
    const disc = p.oldPrice ? Math.round((1 - p.price/p.oldPrice)*100) : null;
    const inWL = wishlist.includes(p.id);
    const stars = renderStars(p.rating);
    const imgSrc = getProductImageSrc(p);
    
    return ` 
    <div class="product-card fade-up" onclick="openModal('${p.id}')">
      <div class="product-img-wrap">
        <img src="${imgSrc}" alt="${p.name}" loading="lazy" referrerpolicy="no-referrer">
        <div class="product-badges">
          <span class="pb pb-cat">${p.category}</span>
          ${disc ? `<span class="pb pb-sale">-${disc}%</span>` : ''}
          ${p.isNew ? `<span class="pb pb-new">جديد</span>` : ''}
        </div>
        <button class="wishlist-btn-card ${inWL?'active':''}" onclick="event.stopPropagation();toggleWL('${p.id}',this)">
          <i class="${inWL?'fas':'far'} fa-heart"></i>
        </button>
        <div class="product-actions-hover">
          <button class="pah-btn pah-btn-green" onclick="event.stopPropagation();buyWA('${p.id}')">
            <i class="fab fa-whatsapp"></i> شراء سريع
          </button>
          <button class="pah-btn pah-btn-gold" onclick="event.stopPropagation();addToCart('${p.id}')">
            <i class="fas fa-shopping-bag"></i>
          </button>
        </div>
      </div>
      <div class="product-body">
        <div class="product-cat-label">${p.category}</div>
        <h3>${p.name}</h3>
        <div class="stars">${stars}<span>(${p.rating})</span></div>
        <div class="price-row">
          <span class="price-main">${p.price.toLocaleString('ar-SA')}</span>
          <span class="price-unit">ر.س</span>
          ${p.oldPrice ? `<span class="price-old">${p.oldPrice.toLocaleString('ar-SA')}</span>` : ''}
          ${disc ? `<span class="discount-tag">وفر ${disc}%</span>` : ''}
        </div>
      </div>
    </div>`;
  }).join('');

  // trigger fade-up for newly rendered cards
  requestAnimationFrame(() => {
    document.querySelectorAll('.product-card.fade-up').forEach((el,i) => {
      setTimeout(() => el.classList.add('visible'), i * 80);
    });
  });

  document.getElementById('products-title').textContent = selectedCat === 'الكل' ? 'أحدث المنتجات' : `منتجات ${selectedCat}`;
}

function renderStars(rating) {
  let html = '';
  for(let i=1;i<=5;i++){
    if(rating >= i) html += '<i class="fas fa-star"></i>';
    else if(rating >= i-0.5) html += '<i class="fas fa-star-half-alt"></i>';
    else html += '<i class="far fa-star"></i>';
  }
  return html;
}

/* ===================== MODAL ===================== */
function openModal(id) {
  const p = products.find(x => x.id === id);
  if(!p) return;
  currentProduct = p;
  const imgSrc = getProductImageSrc(p);
  document.getElementById('modal-img').src = imgSrc;
  document.getElementById('modal-cat').textContent = p.category;
  document.getElementById('modal-name').textContent = p.name;
  document.getElementById('modal-desc').textContent = p.desc;
  const disc = p.oldPrice ? Math.round((1 - p.price/p.oldPrice)*100) : null;
  document.getElementById('modal-price').innerHTML = `${p.price.toLocaleString('ar-SA')} <span>ر.س ${p.oldPrice?`<s style="font-size:14px;color:var(--gray-400)">${p.oldPrice.toLocaleString('ar-SA')}</s>`:''} ${disc?`<em style="color:var(--red);font-style:normal;font-size:14px">وفر ${disc}%</em>`:''}</span>`;
  document.getElementById('modal-overlay').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('modal-overlay').classList.remove('active');
  document.body.style.overflow = '';
  currentProduct = null;
}

/* ===================== CART ===================== */
function addToCart(id) {
  const p = products.find(x => x.id === id);
  if(!p) return;
  const existing = cart.find(x => x.id === id);
  if(existing) existing.qty++;
  else cart.push({...p, qty:1});
  saveCart();
  renderCart();
  openCartDrawer();
}

function removeFromCart(id) {
  cart = cart.filter(x => x.id !== id);
  saveCart();
  renderCart();
}

function changeQty(id, delta) {
  const item = cart.find(x => x.id === id);
  if(!item) return;
  item.qty += delta;
  if(item.qty <= 0) removeFromCart(id);
  else { saveCart(); renderCart(); }
}

function saveCart() {
  localStorage.setItem('ry_cart', JSON.stringify(cart));
}

function renderCart() {
  const total = cart.reduce((s,x) => s + x.price*x.qty, 0);
  const totalItems = cart.reduce((s,x) => s + x.qty, 0);
  document.getElementById('cart-count').textContent = totalItems;
  document.getElementById('cart-head-count').textContent = totalItems;
  document.getElementById('cart-total').textContent = total.toLocaleString('ar-SA');

  const container = document.getElementById('cart-items');
  if(!cart.length) {
    container.innerHTML = `<div class="cart-empty"><i class="fas fa-shopping-bag"></i><h4>السلة فارغة</h4><p>أضف منتجات للبدء</p></div>`;
    return;
  }
  container.innerHTML = cart.map(item => {
    const imgSrc = getProductImageSrc(item);
    return `
    <div class="cart-item-row">
      <img src="${imgSrc}" alt="${item.name}" class="cart-item-img" referrerpolicy="no-referrer">
      <div class="cart-item-body">
        <h4>${item.name}</h4>
        <div class="cart-item-price">${(item.price * item.qty).toLocaleString('ar-SA')} ر.س</div>
        <div class="qty-row">
          <button class="qty-btn" onclick="changeQty('${item.id}',-1)">−</button>
          <span class="qty-num">${item.qty}</span>
          <button class="qty-btn" onclick="changeQty('${item.id}',1)">+</button>
        </div>
      </div>
      <button class="remove-item" onclick="removeFromCart('${item.id}')"><i class="fas fa-trash"></i></button>
    </div>
  `;
  }).join('');
}

function openCartDrawer() {
  document.getElementById('cart-drawer').classList.add('open');
  document.getElementById('overlay').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeCartDrawer() {
  document.getElementById('cart-drawer').classList.remove('open');
  document.getElementById('overlay').classList.remove('active');
  document.body.style.overflow = '';
}

/* ===================== WISHLIST ===================== */
function toggleWL(id, btn) {
  if(wishlist.includes(id)) {
    wishlist = wishlist.filter(x => x !== id);
    if(btn) { btn.classList.remove('active'); btn.querySelector('i').className='far fa-heart'; }
  } else {
    wishlist.push(id);
    if(btn) { btn.classList.add('active'); btn.querySelector('i').className='fas fa-heart'; }
  }
  localStorage.setItem('ry_wl', JSON.stringify(wishlist));
  updateWLBadge();
}

function updateWLBadge() {
  const badge = document.getElementById('wl-count');
  badge.textContent = wishlist.length;
  badge.style.display = wishlist.length ? 'flex' : 'none';
}

function openWishlistView() {
  selectedCat = 'الكل';
  searchQ = '';
  document.getElementById('search-inp').value = '';
  // Show only wishlist products
  const grid = document.getElementById('products-grid');
  const wlProds = products.filter(p => wishlist.includes(p.id));
  document.getElementById('products-title').textContent = 'المفضلة';
  scrollToSec('products');
  // Temporarily render wishlist
  if(!wlProds.length) {
    grid.innerHTML = `<div class="empty-state"><i class="far fa-heart"></i><h3>لا توجد منتجات في المفضلة</h3><p>اضغط على القلب لإضافة منتجات</p></div>`;
    return;
  }
  // Reuse renderProducts but for wishlist
  const temp = selectedCat;
  selectedCat = 'الكل';
  // filter manually
  const filtered = wlProds;
  grid.innerHTML = filtered.map(p => {
    const disc = p.oldPrice ? Math.round((1-p.price/p.oldPrice)*100) : null;
    const stars = renderStars(p.rating);
    const imgSrc = getProductImageSrc(p);
    
    return `
    <div class="product-card fade-up" onclick="openModal('${p.id}')">
      <div class="product-img-wrap">
        <img src="${imgSrc}" alt="${p.name}" loading="lazy" referrerpolicy="no-referrer">
        <div class="product-badges">
          <span class="pb pb-cat">${p.category}</span>
          ${disc?`<span class="pb pb-sale">-${disc}%</span>`:''}
        </div>
        <button class="wishlist-btn-card active" onclick="event.stopPropagation();toggleWL('${p.id}',this);renderProducts()">
          <i class="fas fa-heart"></i>
        </button>
        <div class="product-actions-hover">
          <button class="pah-btn pah-btn-green" onclick="event.stopPropagation();buyWA('${p.id}')"><i class="fab fa-whatsapp"></i> شراء سريع</button>
          <button class="pah-btn pah-btn-gold" onclick="event.stopPropagation();addToCart('${p.id}')"><i class="fas fa-shopping-bag"></i></button>
        </div>
      </div>
      <div class="product-body">
        <div class="product-cat-label">${p.category}</div>
        <h3>${p.name}</h3>
        <div class="stars">${stars}<span>(${p.rating})</span></div>
        <div class="price-row">
          <span class="price-main">${p.price.toLocaleString('ar-SA')}</span>
          <span class="price-unit">ر.س</span>
          ${p.oldPrice?`<span class="price-old">${p.oldPrice.toLocaleString('ar-SA')}</span>`:''}
          ${disc?`<span class="discount-tag">وفر ${disc}%</span>`:''}
        </div>
      </div>
    </div>`;
  }).join('');
  requestAnimationFrame(()=>{
    document.querySelectorAll('.product-card.fade-up').forEach((el,i)=>setTimeout(()=>el.classList.add('visible'),i*80));
  });
}

/* ===================== CHECKOUT ===================== */
function checkoutWA() {
  if(!cart.length) { alert('السلة فارغة!'); return; }
  const orderId = 'RAY-' + Math.floor(Math.random()*900000+100000);
  let msg = `*طلب جديد من متجر الريان*\n*رقم الطلب:* ${orderId}\n----------------------------\n`;
  cart.forEach(item => {
    msg += `• ${item.name} (×${item.qty}) — ${(item.price*item.qty).toLocaleString('ar-SA')} ر.س\n`;
  });
  const total = cart.reduce((s,x)=>s+x.price*x.qty,0);
  msg += `----------------------------\n*الإجمالي:* ${total.toLocaleString('ar-SA')} ر.س\n\nأود تأكيد الطلب، شكراً.`;
  window.open(`https://wa.me/${WA_NUM}?text=${encodeURIComponent(msg)}`, '_blank');
}

function buyWA(id) {
  const p = products.find(x=>x.id===id);
  if(!p) return;
  const msg = encodeURIComponent(`مرحباً متجر الريان، أود شراء: ${p.name} بسعر ${p.price.toLocaleString('ar-SA')} ر.س`);
  window.open(`https://wa.me/${WA_NUM}?text=${msg}`, '_blank');
}

/* ===================== EVENTS ===================== */
function setupEvents() {
  // Search
  document.getElementById('search-inp').addEventListener('input', e => {
    searchQ = e.target.value;
    renderProducts();
  });

  // Sort
  document.getElementById('sort-select').addEventListener('change', e => {
    sortVal = e.target.value;
    renderProducts();
  });

  // Categories
  document.querySelectorAll('.cat-pill').forEach(pill => {
    pill.addEventListener('click', () => {
      document.querySelectorAll('.cat-pill').forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      selectedCat = pill.dataset.cat;
      renderProducts();
      scrollToSec('products');
    });
  });

  // Cart
  document.getElementById('cart-toggle').addEventListener('click', openCartDrawer);
  document.getElementById('close-cart').addEventListener('click', closeCartDrawer);
  document.getElementById('overlay').addEventListener('click', () => { closeCartDrawer(); closeModal(); });
  document.getElementById('checkout-btn').addEventListener('click', checkoutWA);

  // Modal
  document.getElementById('close-modal').addEventListener('click', closeModal);
  document.getElementById('modal-overlay').addEventListener('click', e => { if(e.target===e.currentTarget) closeModal(); });
  document.getElementById('modal-wa-btn').addEventListener('click', () => { if(currentProduct) buyWA(currentProduct.id); });
  document.getElementById('modal-cart-btn').addEventListener('click', () => { if(currentProduct) { addToCart(currentProduct.id); closeModal(); } });
}

/* ===================== SCROLL EFFECTS ===================== */
function initScrollEffects() {
  const header = document.getElementById('main-header');
  const backTop = document.getElementById('back-top');
  const progress = document.getElementById('scroll-progress');

  window.addEventListener('scroll', () => {
    const sy = window.scrollY;
    header.classList.toggle('scrolled', sy > 50);
    backTop.classList.toggle('show', sy > 400);
    const docH = document.documentElement.scrollHeight - window.innerHeight;
    progress.style.width = (sy/docH*100) + '%';
  }, {passive:true});

  // Intersection observer for fade-up
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => { if(e.isIntersecting) e.target.classList.add('visible'); });
  }, {threshold:0.12});
  document.querySelectorAll('.fade-up').forEach(el => io.observe(el));
}

/* ===================== COUNTDOWN ===================== */
function startCountdown() {
  let s = 5 * 3600 + 22 * 60 + 48;
  const tick = () => {
    const h = Math.floor(s/3600);
    const m = Math.floor((s%3600)/60);
    const sec = s%60;
    document.getElementById('cd-h').textContent = String(h).padStart(2,'0');
    document.getElementById('cd-m').textContent = String(m).padStart(2,'0');
    document.getElementById('cd-s').textContent = String(sec).padStart(2,'0');
    if(s > 0) { s--; setTimeout(tick, 1000); }
  };
  tick();
}

/* ===================== SOCIAL PROOF ===================== */
function startNotifications() {
  const names = ['أحمد','سارة','فهد','منيرة','خالد','نورة','عبدالله','رنا'];
  const cities = ['الرياض','جدة','الدمام','مكة','المدينة','الخبر'];
  const bought = products.map(p => p.name);
  const show = () => {
    const name = names[Math.floor(Math.random()*names.length)];
    const city = cities[Math.floor(Math.random()*cities.length)];
    const prod = bought[Math.floor(Math.random()*bought.length)];
    document.getElementById('notif-text').textContent = `${name} من ${city} اشترى للتو`;
    document.getElementById('notif-product').textContent = prod;
    const notif = document.getElementById('notification');
    notif.classList.add('show');
    setTimeout(() => { notif.classList.remove('show'); setTimeout(show, Math.random()*8000+7000); }, 4000);
  };
  setTimeout(show, 5000);
}

/* ===================== GLOBAL HELPERS ===================== */
window.scrollToSec = (id) => {
  const el = document.getElementById(id);
  if(el) el.scrollIntoView({behavior:'smooth', block:'start'});
};

window.resetApp = () => {
  searchQ = ''; selectedCat = 'الکل';
  document.getElementById('search-inp').value = '';
  document.querySelectorAll('.cat-pill').forEach(p => {
    p.classList.toggle('active', p.dataset.cat==='الکل');
  });
  // fix for Arabic 'ک' vs 'ك'
  selectedCat = 'الكل';
  document.querySelectorAll('.cat-pill').forEach(p => {
    p.classList.toggle('active', p.dataset.cat==='الكل');
  });
  sortVal = 'default';
  document.getElementById('sort-select').value = 'default';
  renderProducts();
  window.scrollTo({top:0,behavior:'smooth'});
};

window.addToCart = addToCart;
window.buyWA = buyWA;
window.changeQty = changeQty;
window.removeFromCart = removeFromCart;
window.toggleWL = toggleWL;
