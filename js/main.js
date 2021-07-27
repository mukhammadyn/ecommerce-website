// var elModalBtn = document.querySelector('.header-main__search-modal');
// var elModalWindow = document.querySelector('.search-modal');

// if (elModalBtn) {
//   elModalBtn.addEventListener('click', function() {
//     elModalWindow.classList.toggle('search-modal--open');
//   })
// }


var elModalBtn = document.querySelector('.header-main__search-modal');
var elModalWindow = document.querySelector('.search-modal');

elModalBtn.addEventListener('click', function (evt) {
  evt.preventDefault();
  elModalWindow.classList.add('search-modal--open');
})

window.onclick = function(event) {
  if (event.target == elModalWindow) {
    elModalWindow.classList.remove('search-modal--open');
  }
}