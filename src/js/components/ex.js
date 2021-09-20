console.log('maxgraph');


const currentItem = document.querySelectorAll('.right-galley-item')
const allBlock = document.querySelector('.right-gallery')
const leftImage = document.querySelector('.image-left')

// currentItem.forEach(el => {
//   el.addEventListener('click', (e) => {
//     el.classList.add('current')
//     if (e.target.classList.contains('current')) {
//       let src = e.target.querySelector('img').getAttribute('src');
//       leftImage.setAttribute('src', src)
//     }
//
//   })
// })


let selectedItem = document.querySelector('.current');
let src = selectedItem.querySelector('img').getAttribute('src');
leftImage.setAttribute('src', src)

allBlock.addEventListener('click', e => {

  let target = e.target.closest('.right-galley-item'); // (1)
  if (!target) return

  if (!allBlock.contains(target)) return

  if (selectedItem) {
    selectedItem.classList.remove('current')
  }
  selectedItem = target
  selectedItem.classList.add('current')

  if (target.classList.contains('current')) {
    let src = target.querySelector('img').getAttribute('src');
    leftImage.setAttribute('src', src)
  }
})

const swiper1 = new Swiper('.main-swiper', {
  // Optional parameters
  slidesPerView: 4,
  spaceBetween: 30,
  loop: true,
  navigation: {
    nextEl: '.next-btn',
    prevEl: '.prev-btn',
  },

  scrollbar: {
    el: '.swiper-scrollbar',
  }
});

const swiper2 = new Swiper('.two-main-swiper', {
  // Optional parameters
  slidesPerView: 4,
  spaceBetween: 30,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});