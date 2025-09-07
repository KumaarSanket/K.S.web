// ---------------------------
// Portfolio JS - Complete
// ---------------------------
document.addEventListener('DOMContentLoaded', function () {

  // ---------------------------
  // 1. Animate On Scroll (AOS) Initialization
  // ---------------------------
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }

  // ---------------------------
  // 2. Home Slider (Swiper)
  // ---------------------------
  const homeSlider = new Swiper('.home-slider', {
    loop: true,
    autoplay: {
      delay: 6000,
      disableOnInteraction: false
    },
    effect: 'fade',
    fadeEffect: { crossFade: true },
    speed: 1200,
    navigation: false,
    pagination: { el: '.swiper-pagination', clickable: true },
    allowTouchMove: true
  });

  // ---------------------------
  // 3. Certificates Carousel (Auto Horizontal Scroll)
  // ---------------------------
  const certificatesSwiper = new Swiper('.certificates-swiper', {
    slidesPerView: 4,
    spaceBetween: 20,
    loop: true,
    autoplay: {
      delay: 0,
      disableOnInteraction: false
    },
    speed: 3000,
    freeMode: true,
    freeModeMomentum: false,
    breakpoints: {
      0: { slidesPerView: 2, spaceBetween: 15 },
      480: { slidesPerView: 2, spaceBetween: 15 },
      768: { slidesPerView: 3, spaceBetween: 20 },
      1024: { slidesPerView: 4, spaceBetween: 20 }
    }
  });

  // ---------------------------
  // 4. Tech Skills Carousel
  // ---------------------------
  const techSkillsSwiper = new Swiper('.tech-skills-swiper', {
    slidesPerView: 4,
    spaceBetween: 20,
    loop: true,
    autoplay: { delay: 2500, disableOnInteraction: false },
    speed: 1000,
    breakpoints: {
      0: { slidesPerView: 2, spaceBetween: 10 },
      480: { slidesPerView: 2, spaceBetween: 15 },
      768: { slidesPerView: 3, spaceBetween: 15 },
      1024: { slidesPerView: 4, spaceBetween: 20 }
    }
  });

  // ---------------------------
  // 5. Soft Skills Carousel
  // ---------------------------
  const softSkillsSwiper = new Swiper('.soft-skills-swiper', {
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,
    autoplay: { delay: 3000, disableOnInteraction: false },
    speed: 1000,
    breakpoints: {
      0: { slidesPerView: 1, spaceBetween: 10 },
      480: { slidesPerView: 2, spaceBetween: 10 },
      768: { slidesPerView: 2, spaceBetween: 15 },
      1024: { slidesPerView: 3, spaceBetween: 20 }
    }
  });

  // ---------------------------
  // 6. Projects Carousel
  // ---------------------------
  const projectsSwiper = new Swiper('.projects-carousel', {
    slidesPerView: 3,
    spaceBetween: 20,
    loop: false,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    pagination: false,
    breakpoints: {
      0: { slidesPerView: 1, spaceBetween: 10 },
      480: { slidesPerView: 1, spaceBetween: 10 },
      768: { slidesPerView: 2, spaceBetween: 15 },
      1024: { slidesPerView: 3, spaceBetween: 20 }
    }
  });

  // ---------------------------
  // 7. Navbar Smooth Scroll & Active Link
  // ---------------------------
  const navLinks = document.querySelectorAll('.navbar-links a');
  const navbar = document.querySelector('.site-navbar');
  const navbarHeight = navbar ? navbar.offsetHeight : 0;
  const sections = document.querySelectorAll('section');

  // Smooth scroll
  navLinks.forEach(link => {
    link.addEventListener('click', e => {
      const targetId = link.getAttribute('href');
      if (targetId.startsWith('#') && document.querySelector(targetId)) {
        e.preventDefault();
        const offsetTop = document.querySelector(targetId).offsetTop - navbarHeight + 1;
        window.scrollTo({ top: offsetTop, behavior: 'smooth' });
      }
    });
  });

  // Update active link on scroll
  window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY + navbarHeight + 5;
    let currentSectionId = '';
    sections.forEach(section => {
      if (scrollPos >= section.offsetTop) {
        currentSectionId = section.id;
      }
    });
    if (currentSectionId) {
      navLinks.forEach(link => link.classList.remove('active'));
      const activeLink = document.querySelector(`.navbar-links a[href="#${currentSectionId}"]`);
      if (activeLink) activeLink.classList.add('active');
    }
  });

  // ---------------------------
  // 8. Dark/Light Theme Toggle
  // ---------------------------
  const toggleBtn = document.getElementById('toggle-theme');
  const body = document.body;

  const setTheme = theme => {
    if (theme === 'dark') {
      body.classList.add('dark');
      toggleBtn.textContent = 'Light Mode';
    } else {
      body.classList.remove('dark');
      toggleBtn.textContent = 'Dark Mode';
    }
    localStorage.setItem('theme', theme);
  };

  // Load saved theme
  const savedTheme = localStorage.getItem('theme') || 'light';
  setTheme(savedTheme);

  // Toggle button click
  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      const isDark = body.classList.contains('dark');
      setTheme(isDark ? 'light' : 'dark');
    });
  }

  // ---------------------------
  // 9. Contact Form Submission
  // ---------------------------
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', e => {
      e.preventDefault();
      if (!contactForm.checkValidity()) {
        alert('Please fill all required fields correctly before submitting.');
        return false;
      }
      alert('Thank you! Your message has been received (demo submission).');
      contactForm.reset();
    });
  }

});
