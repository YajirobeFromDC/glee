$(function(){
  $('.top-slider__inner').slick({
    dots: true,
    arrows: false
  });
  let mixer = mixitup('.products-of-the-week__list');
});




function handleFirstTab(e) {
  if (e.keyCode === 9) { // tab key
      document.body.classList.add('user-is-tabbing');
      window.removeEventListener('keydown', handleFirstTab);
  }
}
window.addEventListener('keydown', handleFirstTab);