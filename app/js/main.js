$(function(){
  $('.top-slider__list').slick({
    dots: true,
    arrows: false
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