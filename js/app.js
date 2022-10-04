const SliderMain = new Swiper('.slider-main', {
  // freeMode: true, //слайд зупиняжться там де його відпускають
  centeredSlides: true,//головний слайд по центру
  parallax: true,
  // slidesPerView: 3, //кількість показаних слайдів
  breakpoints: {
    0: {//від до безкінечності або аступного брекпоінту
      slidesPerView: 2.5,
      spaceBetween: 20, //відстань між слайдами
    },
    680: {//від до безкінечності або аступного брекпоінту
      slidesPerView: 3.5,
      spaceBetween: 60, //відстань між слайдами
    }
  }
})
const SliderBg = new Swiper('.slider-bg', {
  // freeMode: true, //слайд зупиняжться там де його відпускають
  centeredSlides: true,//головний слайд по центру
  parallax: true,
  slidesPerView: 3.5,
  spaceBetween: 60,
})
SliderMain.controller.control = SliderBg
document.querySelectorAll('.slider-item').forEach(item => {
  item.addEventListener('click', event => {
    item.classList.toggle('opened')
  })
})
let desc = document.querySelector('.description');
SliderMain.on('slideChange', e => {
  SliderMain.activeIndex > 0 ? desc.classList.add('hidden') : desc.classList.remove('hidden')
})
