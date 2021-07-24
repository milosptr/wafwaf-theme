(function() {
  let slideUp = {
    distance: '100%',
    origin: 'bottom',
    opacity: 0,
    delay: 275,
    duration: 2000,
    easing: 'cubic-bezier(0.5, 0, 0, 1)',
  };

  if(document.querySelector('.showcase-group'))
    document.querySelector('.showcase-group').childNodes.forEach((c, i) => {
      if(c && c.classList && c.classList.contains('fadeInUp')) {
        slideUp.delay = c.dataset['delay'] ? parseInt(c.dataset['delay']) : 275
        ScrollReveal().reveal(c, slideUp);
      }
    })

  ScrollReveal().reveal('.slide-up', slideUp);

  if(document.body.id === 'menu') {
    const categories = document.querySelectorAll('.category-title')
    categories[0].classList.add('active')
    filterProducts(categories[0].innerText)

    categories.forEach((c) => {
      c.addEventListener('click', (e) => {
        filterProducts(e.target.innerText)
      })
    })
  }

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

  function filterProducts(category) {
    const categories = document.querySelectorAll('.category-title')
    const products = [...document.querySelector('.products-container').children]
    products.forEach((p) => {
      p.style = ''
      p.classList.remove('hide')
      p.style.opacity = 1
      if(p.dataset.category !== category)
        p.classList.add('hide')
    })
    categories.forEach((c) => {
      c.classList.remove('active')
      if(c.innerText === category)
        c.classList.add('active')
    })
  }
})()
