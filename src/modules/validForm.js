
const validForm = () => {
   const calcInputs = document.querySelectorAll('.calc-block input')
   const textInputs = document.querySelectorAll('form [type=text]')
   const messageInput = document.querySelector('form [placeholder="Ваше сообщение"]')
   const emailInputs = document.querySelectorAll('form [type=email]')
   const phoneInputs = document.querySelectorAll('form [type=tel]')

   calcInputs.forEach((calcInput) => {
      calcInput.addEventListener('input', (event) => {
         event.target.value = event.target.value.replace(/\D+/, "")
      })
   })
   textInputs.forEach((textInput) => {
      textInput.addEventListener('input', (event) => {
         event.target.value = event.target.value.replace(/[^а-яА-Я\- ]/, "")
         console.log(event.target.value)
      })

   })
   emailInputs.forEach((emailInput) => {
      emailInput.addEventListener('input', (event) => {
         event.target.value = event.target.value.replace(/[^a-zA-Z0-9@\-_.!~*']/, "")
      })
   })
   messageInput.addEventListener('input', (event) => {
      event.target.value = event.target.value.replace(/[^а-яА-Я\- ]/, "")
   })
   phoneInputs.forEach((phoneInput) => {
      phoneInput.addEventListener('input', (event) => {
         event.target.value = event.target.value.replace(/[^\d()\-]/, "")
      })
   })
}

export default validForm

