const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('c-show');
    } else {
      entry.target.classList.remove('c-show');
    }
  });
});

const scrollSections = document.querySelectorAll('.c-animation');

scrollSections.forEach((el) => observer.observe(el));
