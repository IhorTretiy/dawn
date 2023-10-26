document.addEventListener('DOMContentLoaded', function () {
  var swiper = new Swiper('.review-post-swiper', {
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    simulateTouch: false,
  });
});
