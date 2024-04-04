const typingEffect = function () {
  new Typed('.js-typing', {
    strings: ['Human Interface Technology', 'Welkom bij HIT Lab', 'Human Interface Technology', 'Welkom bij HIT Lab', 'Human Interface Technology', 'Welkom bij HIT Lab'],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true,
  });
};

const init = function () {
  typingEffect();
};

document.addEventListener('DOMContentLoaded', init);
