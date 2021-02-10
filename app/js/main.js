$(function() {
    $('.top-slider__list').slick({
        dots: true,
        arrows: false
    });

    $('.our-partners__slider').slick({
        slidesToShow: 5,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 1700,
    });

    $('.user-nav__menu-btn, .menu__link').on('click', function() {
        $('.menu').toggleClass('menu--active');
    });

    if(window.matchMedia('(max-width: 1199px)').matches){
      $("br").remove();      
    }    

    let mixer = mixitup('.products__list', {
        selectors: {
            control: '.mix-menu__btn--products'
        }
    });

    let mixer2 = mixitup('.new-design__list', {
        selectors: {
            control: '.mix-menu__btn--design'
        }
    });

});

function handleFirstTab(e) {
    if (e.keyCode === 9) { // tab key
        document.body.classList.add('user-is-tabbing');
        window.removeEventListener('keydown', handleFirstTab);
    }
}
window.addEventListener('keydown', handleFirstTab);