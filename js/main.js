// var elModalBtn = document.querySelector('.js-header-search-btn');
// var elModalWindow = document.querySelector('.search-modal');

// elModalBtn.addEventListener('click', function (evt) {
//   evt.preventDefault();
//   elModalWindow.classList.add('search-modal--open');
// })

// window.onclick = function(event) {
//   if (event.target == elModalWindow) {
//     elModalWindow.classList.remove('search-modal--open');
//   }
// }

// var elNavBtn = document.querySelector('.js-nav-btn');
// var elNavClass = document.querySelector('.site-header__nav');

// if (elNavBtn) {
//   elNavBtn.addEventListener('click', function(){
//     elNavClass.classList.toggle('site-header__nav--active');
//     elNavBtn.classList.toggle('header-main__burger--closed');
//   })
// }

// $(document).ready(function(){
//   $('.slicking').slick({
//     adaptiveHight: true,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     infinite: true,
//   });
// });

// var el

let delEl = document.querySelector('.div-one')
let delBtn = document.querySelector('.btn-one')

delBtn.addEventListener('click', ()=>{
  delEl.classList.add('close')
})

let delElone = document.querySelector('.div-two')
let delBtnone = document.querySelector('.btn-two')

delBtnone.addEventListener('click', ()=>{
  delElone.classList.add('close')
})