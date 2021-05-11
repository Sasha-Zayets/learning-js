document.addEventListener("DOMContentLoaded", () => {
  const swiper = new Swiper('.swiper-container', {
    pagination: {
      el: '.swiper-pagination',
    },
    autoplay: {
      delay: 1000,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });
});
