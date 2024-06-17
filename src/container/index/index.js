// повертає всі можливі елементи всередині <form>
// в консолі
//form

//form.submit() - відправляє данні вручну

//form.reset() - cкидає всі елементи форми до початкових значень

// далі по конспекту в work

// перевірка на валідність форми
// document.querySelector('.form__button').onclick = () => {
//   const form = document.getElementById('form')

//   if (form.reportValidity()) {
//     form.submit()
//   } else {
//     form.requestFullscreen()
//   }
// }

//перевірка на валідність email
// document.querySelector('.form__button').onclick = () => {
//   const form = document.getElementById('form')

//   const email = document.getElementById('email')

//   console.log(email.reportValidity())

//   if (email.reportValidity()) {
//     form.submit()
//   }
// }

//встановлення повідомлення про помилку

// document.querySelector('.form__button').onclick = () => {
//   const form = document.getElementById('form')

//   const email = document.getElementById('email')

//   console.log(email.checkValidity())

//   if (!email.checkValidity()) {
//     if (email.value.length === 0) {
//       email.setCustomValidity('Помилка. Введіть значення')
//     }

//     if (email.value.length > 10) {
//       email.setCustomValidity(
//         'Помилка. Введіть до 10 символів',
//       )
//     }

//     // запускаємо процес валідації
//     email.reportValidity()
//   }
// }

// //збільш та зменш age
// document
//   .querySelectorAll('.form__button-add')
//   .forEach((element) => {
//     console.log(element)
//     element.onclick = () => {
//       if (element.getAttribute('operator') === '+') {
//         return age.stepUp(
//           Number(element.getAttribute('value')),
//         )
//       }

//       if (element.getAttribute('operator') === '-') {
//         return age.stepDown(
//           Number(element.getAttribute('value')),
//         )
//       }
//     }
//   })

// Запис тексту в буфер обміну

document.querySelector('.form__button-save').onclick =
  () => {
    const value = document.getElementById('username').value

    if (value.length === 0) alert('Данних немає')

    navigator.clipboard
      .writeText(value)
      .then(() => alert('Данні збережено'))
  }
