(function() {
  let slideUp = {
    distance: '100%',
    origin: 'bottom',
    opacity: 0,
    delay: 275,
    duration: 2000,
    easing: 'cubic-bezier(0.5, 0, 0, 1)',
  };

  document.querySelector('.showcase-group').childNodes.forEach((c, i) => {
    if(c && c.classList && c.classList.contains('fadeInUp')) {
      slideUp.delay = c.dataset['delay'] ? parseInt(c.dataset['delay']) : 275
      ScrollReveal().reveal(c, slideUp);
    }
  })

  ScrollReveal().reveal('.slide-up', slideUp);


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

  // fetch('https://www.instagram.com/wafwafcz/?__a=1', {
  //   headers: [
  //     ["Content-Type", "application/json"],
  //     ["Content-Type", "text/plain"]
  //   ],
  // })
  //   .then(response => response.json())
  //   .then(data => console.log(data))
})()
