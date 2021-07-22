(function() {
  const rellax = new Rellax('.rellax')
  const swiper = new Swiper(".custom-carousel", {
    cssMode: true,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    mousewheel: true,
    keyboard: true,
  })

  fetch('https://www.instagram.com/wafwafcz/?__a=1')
    .then(response => response.json())
    .then(data => console.log(data))
})()
