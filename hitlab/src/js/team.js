const showMembers = function () {
  const showArrow = document.querySelector('.js-show-members');
  const teamMembers = document.querySelectorAll('.js-member');
  let rotated = false;
  showArrow.addEventListener('click', function () {
    for (const member of teamMembers) {
      member.classList.toggle('c-hidden');
    }
    if (!rotated) {
      showArrow.classList.add('c-card__btn--rotate');
    } else {
      showArrow.classList.remove('c-card__btn--rotate');
    }
    rotated = !rotated;
  });
};
const init = function () {
  console.log('De DOM is geladen.');
  showMembers();
};
document.addEventListener('DOMContentLoaded', init);
