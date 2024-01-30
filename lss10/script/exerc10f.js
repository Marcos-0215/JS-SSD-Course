console.log(document.querySelector("button")
.classList
.contains('js-button'));

function toggle(X) {
  
  const button =
  document.querySelector(`.js-${X}-button`)
  .classList;

  if (!button.contains('is-toggled')) {
    button.add('is-toggled');
  } else {
    button.remove('is-toggled');
  }
}