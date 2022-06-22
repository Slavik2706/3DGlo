let clock = document.querySelector(".clock");

const getTime = () => {
   let date = new Date();
   let dateNewYear = new Date("2023-01-01").getTime()
   let dateNow = date.getTime()
   let timeRemaining = (dateNewYear - dateNow) / 1000
   let days = Math.floor(timeRemaining / 60 / 60 / 24)

   const h = date.getHours()
   const day = date.getDay();
   const dayTitle = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];

   let welcome = document.createElement('div')
   let dayNow = document.createElement('div')
   let timeNow = document.createElement('div')
   let untilNewYear = document.createElement('div')

   if (h >= 4 && h <= 11) {
      welcome.textContent = 'Доброе утро'
      clock.append(welcome)
   } else if (h > 11 && h <= 16) {
      welcome.textContent = 'Добрый день'
      clock.append(welcome)
   } else if (h > 16 && h <= 23) {
      welcome.textContent = 'Добрый вечер'
      clock.append(welcome)
   } else if (h > 23 || h <= 3) {
      welcome.textContent = 'Доброй ночи'
      clock.append(welcome)
   }
   dayNow.textContent = `Сегодня: ${dayTitle[day]}`
   clock.append(dayNow)

   timeNow.textContent = `Текущее время ${date.toLocaleTimeString('en')}`
   clock.append(timeNow)

   untilNewYear.textContent = `До нового года осталось ${days} дня`
   clock.append(untilNewYear)

}

getTime()


