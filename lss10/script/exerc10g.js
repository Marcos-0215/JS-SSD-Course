function toggle(X) {
  const button =
  document.querySelector(`.js-${X}-button`)
  .classList;

  const gaming = document.querySelector('.js-gaming-button');
  const music = document.querySelector('.js-music-button');
  const tech = document.querySelector('.js-tech-button');

  if (!button.contains('is-toggled')) {
    gaming.classList.remove('is-toggled');
    music.classList.remove('is-toggled');
    tech.classList.remove('is-toggled');
    button.add('is-toggled');
  } else {
    button.remove('is-toggled');
  }
}