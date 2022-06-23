const modal = () => {
   const modal = document.querySelector('.popup')
   const buttons = document.querySelectorAll('.popup-btn')
   const closeBtn = modal.querySelector('.popup-close')

   const windowInnerWidth = window.innerWidth
   let opacity = 0

   buttons.forEach(btn => {
      btn.addEventListener('click', () => {
         if (windowInnerWidth < 768) {
            modal.style.display = 'block'
         } else {
            modal.style.opacity = opacity;
            modal.style.display = 'block'
            let timerOpen = setInterval(function () {
               if (opacity <= 1) {
                  opacity += 0.05
                  modal.style.opacity = opacity;
               } else {
                  clearInterval(timerOpen);
               }
            }, 30)
         }
      })
   })

   closeBtn.addEventListener('click', () => {
      let timerClose = setInterval(function () {
         if (opacity > 0) {
            opacity -= 0.05
            modal.style.opacity = opacity;
         } else {
            clearInterval(timerClose);
            modal.style.display = 'none'
         }
      }, 30)
   })
}

export default modal