document.addEventListener('DOMContentLoaded', function () {
  var swiper = new Swiper('.product-swiper', {
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    simulateTouch: false,
  });
});
