import { animate } from './helpers'

const modal = () => {
   const modal = document.querySelector('.popup')
   const buttons = document.querySelectorAll('.popup-btn')

   const windowInnerWidth = window.innerWidth
   let opacity = 0

   buttons.forEach(btn => {
      btn.addEventListener('click', () => {
         if (windowInnerWidth < 768) {
            modal.style.display = 'block'
         } else {
            modal.style.opacity = opacity;
            modal.style.display = 'block'
            animate({
               duration: 1000,
               timing(timeFraction) {
                  return timeFraction;
               },
               draw(progress) {
                  modal.style.opacity = progress
               }
            })
         }
      })
   })

   modal.addEventListener('click', (e) => {
      if (!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) {
         animate({
            duration: 1000,
            timing(timeFraction) {
               return timeFraction;
            },
            draw(progress) {
               modal.style.opacity = 1 - progress
            }
         })
         setTimeout(() => {
            modal.style.display = 'none'
         }, 1000)
      }
   })
}

export default modal