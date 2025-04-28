document.addEventListener('DOMContentLoaded', function() {
    // Language Switcher
    const languageSelect = document.getElementById('language-select');
    
    // Translations
    const translations = {
        en: {
            home: "Home",
            about: "About",
            features: "Features",
            contact: "Contact",
            heroTitle: "We Help You Make Modern Furniture",
            heroSubtitle: "We will help you to make an elegant and luxurious interior designed by professional interior designer.",
            trustedBy: "Trusted by 20,000+ companies",
            aboutUs: "About Us",
            aboutDescription: "All of our furniture uses the best materials and choices for our customers.All of our furniture uses the best materials",
            bestQuality: "Best Quality",
            qualityDescription: "All of our furniture uses the best materials and choices",
            freeShipping: "Free Shipping",
            shippingDescription: "All of our furniture uses the best materials and choices",
            popularProducts: "Our Popular Products",
            viewMore: "View More",
            whiteSwanChair: "White Swan Chair",
            buyNow: "Buy Now",
            allFurniture: "All Furniture",
            shopByRoom: "Shop By Room",
            shopByCategory: "Shop By Category",
            shopByStyle: "Shop By Style",
            office: "Office",
            products: "Products",
            livingRoom: "Living Room",
            kitchen: "Kitchen",
            diningRoom: "Dining Room",
            bedRoom: "Bed Room",
            hallway: "Hallway",
            customersImportant: "Our customers are verry importan to us",
            testimonialDescription: "All of our furniture uses the best matials and choices for our customers.All of our furniture uses the best materials and choices for our customers.",
            subscribeTitle: "Subscribe to get the latest news about us",
            subscribeDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore et dolore.",
            enterEmail: "Enter your email",
            submit: "Submit",
            footerDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore et dolore.",
            followUs: "Follow Us :",
            takeATour: "Take a Tour",
            pricing: "Pricing",
            product: "Product",
            support: "Support",
            ourCompany: "Our Company",
            blog: "Blog",
            media: "Media",
            subscribe: "Subscribe",
            subscribeFooter: "Subscribe to get the latest news from us",
            emailAddress: "Email Address",
            copyright: "Copyright © 2023. Crafted with love."
        },
        uz: {
            home: "Bosh sahifa",
            about: "Biz haqimizda",
            features: "Xususiyatlar",
            contact: "Aloqa",
            heroTitle: "Biz Sizga Zamonaviy Mebel Yaratishda Yordam Beramiz",
            heroSubtitle: "Biz sizga professional dizaynerlar tomonidan yaratilgan hashamatli va zamonaviy interyer yaratishda yordam beramiz.",
            trustedBy: "20,000+ kompaniyalar ishonadi",
            aboutUs: "Biz haqimizda",
            aboutDescription: "Barcha mebellarimiz mijozlarimiz uchun eng yaxshi materiallar va tanlovlardan foydalanadi. Barcha mebellarimiz eng yaxshi materiallardan foydalanadi",
            bestQuality: "Eng yaxshi sifat",
            qualityDescription: "Barcha mebellarimiz eng yaxshi materiallar va tanlovlardan foydalanadi",
            freeShipping: "Bepul yetkazib berish",
            shippingDescription: "Barcha mebellarimiz eng yaxshi materiallar va tanlovlardan foydalanadi",
            popularProducts: "Bizning mashhur mahsulotlarimiz",
            viewMore: "Ko'proq ko'rish",
            whiteSwanChair: "Oq Oqqush Stuli",
            buyNow: "Hozir sotib olish",
            allFurniture: "Barcha mebellar",
            shopByRoom: "Xona bo'yicha xarid qilish",

shopByCategory: "Kategoriya bo'yicha xarid qilish",
            shopByStyle: "Uslub bo'yicha xarid qilish",
            office: "Ofis",
            products: "Mahsulotlar",
            livingRoom: "Mehmonxona",
            kitchen: "Oshxona",
            diningRoom: "Ovqatlanish xonasi",
            bedRoom: "Yotoqxona",
            hallway: "Yo'lak",
            customersImportant: "Mijozlarimiz biz uchun juda muhim",
            testimonialDescription: "Barcha mebellarimiz mijozlarimiz uchun eng yaxshi materiallar va tanlovlardan foydalanadi. Barcha mebellarimiz mijozlarimiz uchun eng yaxshi materiallar va tanlovlardan foydalanadi.",
            subscribeTitle: "Biz haqimizda eng so'nggi yangiliklar uchun obuna bo'ling",
            subscribeDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore et dolore.",
            enterEmail: "Emailingizni kiriting",
            submit: "Yuborish",
            footerDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore et dolore.",
            followUs: "Bizni kuzating :",
            takeATour: "Sayohat qiling",
            pricing: "Narxlar",
            product: "Mahsulot",
            support: "Qo'llab-quvvatlash",
            ourCompany: "Bizning kompaniya",
            blog: "Blog",
            media: "Media",
            subscribe: "Obuna bo'ling",
            subscribeFooter: "Bizdan eng so'nggi yangiliklar uchun obuna bo'ling",
            emailAddress: "Email manzili",
            copyright: "Mualliflik huquqi © 2023. Sevgi bilan yaratilgan."
        },
        ru: {
            home: "Главная",
            about: "О нас",
            features: "Функции",
            contact: "Контакты",
            heroTitle: "Мы Поможем Вам Создать Современную Мебель",
            heroSubtitle: "Мы поможем вам создать элегантный и роскошный интерьер, разработанный профессиональными дизайнерами интерьера.",
            trustedBy: "Нам доверяют более 20,000+ компаний",
            aboutUs: "О нас",
            aboutDescription: "Вся наша мебель использует лучшие материалы и варианты для наших клиентов. Вся наша мебель использует лучшие материалы",
            bestQuality: "Лучшее качество",
            qualityDescription: "Вся наша мебель использует лучшие материалы и варианты",
            freeShipping: "Бесплатная доставка",
            shippingDescription: "Вся наша мебель использует лучшие материалы и варианты",
            popularProducts: "Наши популярные продукты",
            viewMore: "Посмотреть больше",
            whiteSwanChair: "Белый стул Лебедь",
            buyNow: "Купить сейчас",
            allFurniture: "Вся мебель",
            shopByRoom: "Магазин по комнатам",
            shopByCategory: "Магазин по категориям",
            shopByStyle: "Магазин по стилю",
            office: "Офис",
            products: "Продукты",
            livingRoom: "Гостиная",
            kitchen: "Кухня",
            diningRoom: "Столовая",
            bedRoom: "Спальня",
            hallway: "Прихожая",
            customersImportant: "Наши клиенты очень важны для нас",
            testimonialDescription: "Вся наша мебель использует лучшие материалы и варианты для наших клиентов. Вся наша мебель использует лучшие материалы и варианты для наших клиентов.",
            subscribeTitle: "Подпишитесь, чтобы получать последние новости о нас",
            subscribeDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore et dolore.",
            enterEmail: "Введите ваш email",
            submit: "Отправить",
            footerDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore et dolore.",
            followUs: "Следите за нами :",
            takeATour: "Совершите тур",
            pricing: "Цены",
            product: "Продукт",
            support: "Поддержка",
            ourCompany: "Наша компания",
            blog: "Блог",
            media: "Медиа",

subscribe: "Подписаться",
            subscribeFooter: "Подпишитесь, чтобы получать последние новости от нас",
            emailAddress: "Email адрес",
            copyright: "Авторское право © 2023. Создано с любовью."
        }
    };
    
    // Apply translations
    function applyTranslations(lang) {
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                element.textContent = translations[lang][key];
            }
        });
        
        document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
            const key = element.getAttribute('data-i18n-placeholder');
            if (translations[lang] && translations[lang][key]) {
                element.placeholder = translations[lang][key];
            }
        });
    }
    
    // Language change event
    if (languageSelect) {
        languageSelect.addEventListener('change', function() {
            applyTranslations(this.value);
        });
    }
    
    // Initial translation
    applyTranslations('en');
    
    // Mobile Menu Toggle
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');
    
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            
            // Toggle menu icon
            const icon = this.querySelector('i');
            if (navLinks.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }
    
    // Smooth scrolling for navigation links
    const navItems = document.querySelectorAll('.nav-links a, .footer-column a[href^="#"]');
    
    navItems.forEach(item => {
        item.addEventListener('click', function(e) {
            // Only process internal links
            const href = this.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    // Close mobile menu if open
                    if (navLinks && navLinks.classList.contains('active')) {
                        navLinks.classList.remove('active');
                        if (menuToggle) {
                            const icon = menuToggle.querySelector('i');
                            icon.classList.remove('fa-times');
                            icon.classList.add('fa-bars');
                        }
                    }
                    
                    // Scroll to the target element
                    window.scrollTo({
                        top: targetElement.offsetTop - 80, // Adjust for header height
                        behavior: 'smooth'
                    });
                    
                    // Update active state
                    navItems.forEach(link => link.classList.remove('active'));
                    this.classList.add('active');
                }
            }
        });
    });
    
    // Set active nav item based on scroll position
    function setActiveNavItem() {
        const scrollPosition = window.scrollY;
        
        // Get all sections with IDs
        const sections = document.querySelectorAll('section[id]');
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100; // Adjust for header and some padding
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {

// Remove active class from all nav items
                navItems.forEach(item => {
                    item.classList.remove('active');
                });
                
                // Add active class to corresponding nav item
                const activeNavItem = document.querySelector(nav-links [href="#${sectionId}"]);
                if (activeNavItem) {
                    activeNavItem.classList.add('active');
                }
            }
        });
    }
    
    // Listen for scroll events to update active nav item
    window.addEventListener('scroll', setActiveNavItem);
    
    // Initial call to set active nav item
    setActiveNavItem();
    
    // Tab Switching
    const tabButtons = document.querySelectorAll('.tab-btn');
    
    if (tabButtons.length > 0) {
        tabButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Remove active class from all buttons
                tabButtons.forEach(btn => btn.classList.remove('active'));
                
                // Add active class to clicked button
                this.classList.add('active');
            });
        });
    }
    
    // Room Category Selection
    const roomCategories = document.querySelectorAll('.room-category');
    
    if (roomCategories.length > 0) {
        roomCategories.forEach(category => {
            category.addEventListener('click', function() {
                // Remove active class from all categories
                roomCategories.forEach(cat => cat.classList.remove('active'));
                
                // Add active class to clicked category
                this.classList.add('active');
            });
        });
    }
    
    // Product Slider Navigation
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const productSlider = document.querySelector('.products-slider');
    
    if (prevBtn && nextBtn && productSlider) {
        // Simple slider functionality (for demonstration)
        let scrollAmount = 0;
        const scrollStep = 320; // Width of one product card + gap
        
        prevBtn.addEventListener('click', function() {
            scrollAmount = Math.max(scrollAmount - scrollStep, 0);
            productSlider.scrollTo({
                left: scrollAmount,
                behavior: 'smooth'
            });
        });
        
        nextBtn.addEventListener('click', function() {
            scrollAmount = Math.min(scrollAmount + scrollStep, productSlider.scrollWidth - productSlider.clientWidth);
            productSlider.scrollTo({
                left: scrollAmount,
                behavior: 'smooth'
            });
        });
    }
    
    // Favorite Button Toggle
    const favoriteButtons = document.querySelectorAll('.favorite-btn');
    
    if (favoriteButtons.length > 0) {
        favoriteButtons.forEach(button => {
            button.addEventListener('click', function() {
                const icon = this.querySelector('i');
                
                if (icon.classList.contains('far')) {
                    icon.classList.remove('far');
                    icon.classList.add('fas');
                    icon.style.color = '#ef4444';
                } else {
                    icon.classList.remove('fas');
                    icon.classList.add('far');
                    icon.style.color = '';
                }
            });
        });
    }
});