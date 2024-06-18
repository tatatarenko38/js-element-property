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

// document.querySelector('.form__button-save').onclick =
//   () => {
//     const value = document.getElementById('username').value

//     if (value.length === 0) alert('Данних немає')

//     navigator.clipboard
//       .writeText(value)
//       .then(() => alert('Данні збережено'))
//   }

/////////////////////////////////////////////////////
//            ТИПИ ПОДІЙ      /////////////////////

//додаємо до button функцію, яка буде оброблювати подію
// та вказуємо яку саме('click')
// далі передаємо функцію callback, яка буде визиватися
// при натисканні

// //але краще спочатку відокремити функцію
// document
//   .querySelector('.form__button')
//   .addEventListener('click', () => {
//     alert('click')
//   })

// можемо додати декілька подій
// document
//   .querySelector('.form__button')
//   .addEventListener('click', () => {
//     alert('click 2')
//   })

//але краще спочатку відокремити функцію

// const listener = () => {
//   alert('click')
// }
// document
//   .querySelector('.form__button')
//   .addEventListener('click', listener)

// // видалення
// document
//   .querySelector('.form__button')
//   .removeEventListener('click', listener)

// ОБробка подій
//// спочатку виконується фаза захоплення(true) батьк(outer)
// потім виконується фаза захоплення(true) дитячого(inner)
//потім виконується фаза спливання(false) дитячого(inner)
//потім виконується фаза спливання(false) батьк(outer)
//  так можна контролювати порядок виконання функцій
// const outer = document.getElementById('outer')
// const inner = document.getElementById('inner')

// outer.addEventListener(
//   'click',
//   () => alert('Capture phase (фаза захоплення) outer'),
//   {
//     capture: true,
//   },
// )

// inner.addEventListener(
//   'click',
//   (e) => {
//     e.stopImmediatePropagation()
//     alert('Capture phase (фаза захоплення) inner')
//   },
//   // stopImmediatePropagation()
//   // Зупиняє наступні фази спливання та захоплення події, та
//   // викликає обробник події на поточному елементі.
//   //e.stopPropagation() - виконається ще inner 2.-
//   //тобто функції на тій самій фазі
//   {
//     capture: true,
//   },
// )

// inner.addEventListener(
//   'click',
//   (e) => {
//     alert('Capture phase (фаза захоплення) inner 2')
//   },
//   // stopImmediatePropagation()
//   // Зупиняє спливання та захоплення події, та
//   // викликає обробник події на поточному елементі.

//   {
//     capture: true,
//   },
// )

// outer.addEventListener(
//   'click',
//   () => alert('Babble phase (фаза спливання) outer'),
//   {
//     capture: false,
//     //чи повинен прослуховувач автоматично видалятись
//     //після першого виклику(true)
//     // тобто решта можуть повторюватись, а ця ні
//     once: true,
//   },
// )

// inner.addEventListener(
//   'click',
//   () => alert('Babble phase (фаза спливання) inner'),
//   {
//     capture: false,
//   },
// )

////// виводе в консоль перший аргумент в функції listener
// тобто свій власний об'єкт події PointerEvent
// document
//   .querySelector('.form__button')
//   .addEventListener('click', (e) => {
//     console.log(e)
//   })

// ,, Базові властивості об'єкту Event

// Відміна нативних дій браузера
// не буде відправлятися форма
// document
//   .querySelector('.form__button')
//   .addEventListener('click', (e) => {
//     e.preventDefault()

//     // вказує на елемент, де виникла подія Іншими словами, це елемент, який
//     //був дійсно натиснутий, наведений на нього мишею тощо.
//     console.log(e.target)
//     //містить посилання на елемент, на якому
//     //призначено обробник події (тобто той, до якого ви
//     //додали addEventListener).
//     console.log(e.currentTarget)
//   })

//Створити власну подію

const button = document.querySelector('.form__button')

const myEvent = new CustomEvent('myevent', {
  detail: { id: 100 },
})

button.addEventListener('myevent', (e) => {
  console.log(e)
})

button.dispatchEvent(myEvent)
