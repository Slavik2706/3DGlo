
const validForm = () => {
   const calcInputs = document.querySelectorAll('.calc-block input')
   const textInputs = document.querySelectorAll('form [type=text]')
   const messageInput = document.querySelector('form [placeholder="Ваше сообщение"]')
   const emailInputs = document.querySelectorAll('form [type=email]')
   const phoneInputs = document.querySelectorAll('form [type=tel]')

   emailInputs.forEach((emailInput) => {
      emailInput.setAttribute('required', true)
   })

   phoneInputs.forEach((phoneInput) => {
      phoneInput.setAttribute('pattern', ".{11,}")
   })

   calcInputs.forEach((calcInput) => {
      calcInput.addEventListener('input', (event) => {
         event.target.value = event.target.value.replace(/\D+/, "")
      })
   })
   textInputs.forEach((textInput) => {
      textInput.addEventListener('input', (event) => {
         event.target.value = event.target.value.replace(/[^а-яА-Я\- ]/, "")
      })
   })
   textInputs.forEach((textInput) => {
      textInput.addEventListener('blur', (event) => {
         let word = event.target.value
         word = word.split('')
         for (let i = 0; i < word.length; i++) {
            if (i === 0) {
               word[i] = word[i].toUpperCase()
            }
         }
         word = word.join('')
         event.target.value = word
      })
   })
   emailInputs.forEach((emailInput) => {
      emailInput.addEventListener('input', (event) => {
         event.target.value = event.target.value.replace(/[^a-zA-Z0-9@\-_.!~*']/, "")
      })
   })
   messageInput.addEventListener('input', (event) => {
      event.target.value = event.target.value.replace(/[^а-яА-Я\d()\-,.!? ]/, "")
   })
   phoneInputs.forEach((phoneInput) => {
      phoneInput.addEventListener('input', (event) => {
         event.target.value = event.target.value.replace(/[^\d()\-\+]/, "")
      })
   })
}

export default validForm

