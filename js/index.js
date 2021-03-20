import { data } from './data.js'

const testimonial = document.querySelector('.js-testimonial')
const name = document.querySelector('.js-name')
const image = document.querySelector('.js-image')
const job = document.querySelector('.js-job')
const quote = document.querySelector('.js-text')
const nextBtn = document.querySelector('.js-btn-next')
const prevBtn = document.querySelector('.js-btn-prev')

let index = 0;
let interval;

const updateSlide = () => {
  image.classList.add('fade-to-right');
  image.addEventListener('transitionend', () => {
    image.setAttribute('src', data[index].image)
    image.setAttribute('alt', data[index].name)
    image.classList.remove('fade-to-right');
  })

  testimonial.classList.add('fade-to-left');
  testimonial.addEventListener('transitionend', () => {
    name.innerText = data[index].name
    job.innerText = data[index].job
    quote.innerText = data[index].text
    testimonial.classList.remove('fade-to-left');
  })

}

nextBtn.addEventListener('click', () => {
  index = (index + 1) % data.length
  reset()
})

prevBtn.addEventListener('click', () => {
  index = (index - 1 + data.length) % data.length
  reset()
})

const playSlide = () => {
  interval = setInterval(() => {
    index = (index + 1) % data.length
    updateSlide()
  }, 6000)
}

function reset() {
  clearInterval(interval)
  updateSlide()
  playSlide()
}

playSlide()