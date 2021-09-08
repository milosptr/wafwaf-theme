(function() {
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  let TOGGLE_MENU = false;

  let slideUp = {
    distance: '100%',
    origin: 'bottom',
    opacity: 0,
    delay: 275,
    duration: 2000,
    easing: 'cubic-bezier(0.5, 0, 0, 1)',
  };

  const menuItems = document.querySelectorAll('.menu-item')
  menuItems.forEach((m) => {
    const menuUrl = m.getAttribute('href').replaceAll('/', '')
    const url = location.pathname.replaceAll('/', '')
    m.classList.remove('active')
    if(menuUrl === url)
      m.classList.add('active')
  })


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

  if(document.body.id === 'jobs' || document.body.id === 'franchising') {
    const buttons = document.querySelectorAll('.open-accordion')
    buttons.forEach((b) => {
      b.addEventListener('click', (e) => {
        toggleAccordion(e.target)
      })
    })
  }

  if(document.body.id === 'jobs'){
    const header = document.getElementsByTagName('header')[0]
    header.style.backgroundColor = '#76685E'
  }

  if(document.body.id === 'franchising'){
    const header = document.getElementsByTagName('header')[0]
    header.style.backgroundColor = '#85D3C4'
  }
  
  if(document.body.id === 'contact' || document.body.id === 'about'){
    const header = document.getElementsByTagName('header')[0]
    header.style.backgroundColor = '#CF909B'
  }
  
  if(document.body.id === 'delivery'){
    const header = document.getElementsByTagName('header')[0]
    header.style.backgroundColor = '#ECD684'
  }

  const swiper = new Swiper(".custom-carousel", {
    cssMode: true,
    loop: true,

    responsive: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
      delay: 2500,
    },
    // pagination: {
    //   el: ".swiper-pagination",
    //   clickable: true
    // },
    mousewheel: true,
    keyboard: true,
  })

  const swiper2 = new Swiper('.faq-carousel', {
    cssMode: true,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    mousewheel: true,
  })

  if(isMobile) {
    if(document.querySelector('.latest-posts')) {
      document.querySelector('.latest-posts').classList.add('swiper-container')
      document.querySelector('.latest-posts-wrapper').classList.add('swiper-wrapper')
      document.querySelectorAll('.latest-posts-item').forEach((i) => { i.classList.add('swiper-slide') })
      new Swiper('.latest-posts', {
        allowTouchMove: true,
      })
    }

    if(document.querySelector('.showcase-group')) {
      document.querySelector('.showcase-group').classList.add('swiper-container')
      document.querySelector('.showcase-wrapper').classList.add('swiper-wrapper')
      document.querySelectorAll('.showcase-item').forEach((i) => { i.classList.add('swiper-slide') })
      new Swiper('.showcase-group', {
        centeredSlides: true,
        loop: true,
        allowTouchMove: true,
        slidesPerView: 1.3,
        spaceBetween: 20,
      })
    }

    if(document.querySelector('.proccess-container')) {
      document.querySelector('.proccess-container').classList.add('swiper-container')
      document.querySelector('.proccess-wrapper').classList.add('swiper-wrapper')
      document.querySelectorAll('.proccess-item').forEach((i) => { i.classList.add('swiper-slide') })
      new Swiper('.proccess-container', {
        // centeredSlides: true,
        slidesPerView: 1.5,
        allowTouchMove: true,
        spaceBetween: 40,
      })
    }
  }

  if(document.querySelector('.reveal')) {
    ScrollReveal().reveal('.reveal', { distance: '100px', duration: 1500, origin: 'bottom', easing: 'ease-in-out' });
  }
  if(document.querySelector('.reveal-delay-200')) {
    ScrollReveal().reveal('.reveal-delay-200', { delay: 200, distance: '100px', duration: 1500, origin: 'bottom', easing: 'ease-in-out' });
  }
  if(document.querySelector('.reveal-delay-300')) {
    ScrollReveal().reveal('.reveal-delay-300', { delay: 300, distance: '100px', duration: 1500, origin: 'bottom', easing: 'ease-in-out' });
  }
  if(document.querySelector('.reveal-delay-400')) {
    ScrollReveal().reveal('.reveal-delay-400', { delay: 400, distance: '100px', duration: 1500, origin: 'bottom', easing: 'ease-in-out' });
  }
  if(document.querySelector('.reveal-delay-500')) {
    ScrollReveal().reveal('.reveal-delay-500', { delay: 500, distance: '100px', duration: 1500, origin: 'bottom', easing: 'ease-in-out' });
  }
  if(document.querySelector('.reveal-delay-600')) {
    ScrollReveal().reveal('.reveal-delay-600', { delay: 600, distance: '100px', duration: 1500, origin: 'bottom', easing: 'ease-in-out' });
  }
  if(document.querySelector('.reveal-delay-700')) {
    ScrollReveal().reveal('.reveal-delay-700', { delay: 700, distance: '100px', duration: 1500, origin: 'bottom', easing: 'ease-in-out' });
  }

  document.getElementById('hamburger').addEventListener('click', (e) => {
    const navMobile = document.getElementById('nav-mobile');
    if(e.target.classList.contains('hamburger'))
      e.target.classList.toggle('is-active');
    else
      e.target.parentNode.classList.toggle('is-active');

    if(!TOGGLE_MENU){
      navMobile.classList.add('nav-mobile-full-width');
    }
    else{
      navMobile.classList.remove('nav-mobile-full-width');
    }

    TOGGLE_MENU = !TOGGLE_MENU;
  })

  // fetch('https://www.instagram.com/wafwafcz/?__a=1', {
  //   headers: [
  //     ["Content-Type", "application/json"],
  //     ["Content-Type", "text/plain"]
  //   ],
  // })
  //   .then(response => response.json())
  //   .then(data => console.log(data))

  function toggleAccordion(el) {

    const accordionId = '.' + el.dataset.accordion
    const accordion = document.querySelector(accordionId)
    const accordions = document.querySelectorAll('.accordion')

    if(accordion.classList.contains('accordion-opened')) {
      accordion.classList.remove('accordion-opened')
      return
    }

    accordions.forEach((a) => {
      if(a !== el)
        a.classList.remove('accordion-opened')
     })
     accordion.classList.add('accordion-opened')
  }

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
