$(function(){
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

  let mixer = mixitup('.products__list');
  let mixer2 = mixitup('.new-design__list');
});

function handleFirstTab(e) {
  if (e.keyCode === 9) { // tab key
      document.body.classList.add('user-is-tabbing');
      window.removeEventListener('keydown', handleFirstTab);
  }
}
window.addEventListener('keydown', handleFirstTab);