window.addEventListener('load', function() {
    let mainSlider = document.getElementById('slider');
    if (mainSlider) {
        $(mainSlider).slick({
            prevArrow: '<button type="button" class="slider-arrow slider-arrow--prev"></button>',
            nextArrow: '<button type="button" class="slider-arrow slider-arrow--next"></button>',
            infinite: false,
            dots: true,
            dotsClass: 'slider-nav',
            draggable: false,
            autoplay: true,
            autoplaySpeed: 10000
        });

        $('.slider-bar').stop().css('height', '100%').animate({ height: 0 }, 10000, 'linear');

        $(mainSlider).on('beforeChange', function() {
            $('.slider-bar').stop().css('height', '100%').animate({ height: 0 }, 10000, 'linear');
        });
    }
    
    const services = document.querySelectorAll('.services-item > a');
    let servicesHeight = 0;
    for (let service of services) {
        if (service.getBoundingClientRect().height > servicesHeight)
            servicesHeight = service.getBoundingClientRect().height;
    }
    for (let service of services) {
        service.style.height = servicesHeight + 'px';
    }

    const fadeDuration = 400;
    let popupCloseBtns = document.querySelectorAll('.popup-close');
    for (let closeBtn of popupCloseBtns) {
        closeBtn.addEventListener('click', function() {
            let currentPopup = this.closest('.popup');
            currentPopup.style.opacity = 1;
            currentPopup.style.transition = `opacity ${fadeDuration}ms`;
            currentPopup.style.opacity = 0;
            document.body.classList.remove('popuped');
            setTimeout(() => {
                currentPopup.style.display = 'none';
            }, fadeDuration);
        });
    }
    let popupLinks = document.querySelectorAll('.popup-link');
    for (let popupLink of popupLinks) {
        popupLink.addEventListener('click', function(e) {
            e.preventDefault();
            let currentPopup = document.querySelector(this.getAttribute('href'));
            currentPopup.style.opacity = 0;
            currentPopup.style.display = 'flex';
            currentPopup.style.transition = `opacity ${fadeDuration}ms`;
            document.body.classList.add('popuped');
            setTimeout(() => {
                currentPopup.style.opacity = 1;
            }, 10);
        });
    }

    let productThumbs = $('.product-thumbs');
    if (productThumbs.length) {
        productThumbs.slick({
            slidesToShow: 3,
            prevArrow: '<button type="button" class="slider-arrow prev"></button>',
            nextArrow: '<button type="button" class="slider-arrow next"></button>',
            asNavFor: '.product-full',
            infinite: false
        });
    }
    let productFulls = $('.product-full');
    if (productFulls.length) {
        productFulls.slick({
            arrows: false,
            draggable: false,
            infinite: false
        });
    }
    $('.product-option li:not(.disabled)').click(function() {
        $(this).addClass('active').siblings('.active').removeClass('active');
    });
    let productRelated = $('.related-slider');
    if (productRelated.length) {
        productRelated.slick({
            slidesToShow: 4,
            prevArrow: '<button type="button" class="slider-arrow prev"></button>',
            nextArrow: '<button type="button" class="slider-arrow next"></button>',
            infinite: false
        });
    }

    let alreadySlider = $('.already-slider');
    if (alreadySlider.length) {
        alreadySlider.slick({
            prevArrow: '<button type="button" class="slider-arrow prev"></button>',
            nextArrow: '<button type="button" class="slider-arrow next"></button>',
            infinite: false
        });
    }
});