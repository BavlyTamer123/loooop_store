// --- الجزء الخاص بسلة المشتريات ---
let cartCount = 0;

function addToCart() {
    cartCount++;
    document.getElementById("count").innerText = cartCount;
}

// --- الجزء الخاص بـ Hero Slider (البانر الكبير فوق) ---
let currentStep = 0;
const slides = document.querySelectorAll('.slide');
const mainDots = document.querySelectorAll('.main-dots .dot');

function showSlide(index) {
    // إخفاء كل الصور والنقط الخاصة بالبانر
    slides.forEach(slide => slide.classList.remove('active'));
    mainDots.forEach(dot => dot.classList.remove('active'));

    // إظهار الصورة المختارة
    if (slides[index]) slides[index].classList.add('active');
    if (mainDots[index]) mainDots[index].classList.add('active');
}

function nextSlide() {
    if (slides.length > 0) {
        currentStep = (currentStep + 1) % slides.length;
        showSlide(currentStep);
    }
}

// تغيير صورة البانر تلقائياً كل 5 ثواني
setInterval(nextSlide, 5000);

function currentSlide(index) {
    currentStep = index;
    showSlide(index);
}

// --- الجزء الجديد: سلايدر المنتجات (الأكثر مبيعاً) ---
const wrapper = document.getElementById('productsWrapper');
const productDots = document.querySelectorAll('.product-dots .dot');

if (wrapper) {
    wrapper.addEventListener('scroll', () => {
        // حساب أي منتج ظاهر حالياً بناءً على مسافة التمرير
        // 300 هي العرض التقريبي للمنتج مع المسافات
        let index = Math.round(wrapper.scrollLeft / 300);

        // تحديث النقط السفلية للمنتجات فقط
        productDots.forEach((dot, i) => {
            if (i === index) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    });
}