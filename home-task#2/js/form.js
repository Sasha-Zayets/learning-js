const form = document.getElementById('form')

const visibleForm = () => {
  if (form.classList.contains('active')) form.classList.remove('active')
  else form.classList.add('active')
}

form.addEventListener('submit', (event) => {
  event.preventDefault()

  const name = document.querySelector('input[name="name"]')
  const age = document.querySelector('input[name="age"]')

  if (!name.value.length || !age.value.length) alert('Усі поля повинні бути заповнені!')
  else if (age.value < 20) {
    visibleForm()
    name.value = null
    age.value = null
    alert('Ви ще маленький!)')
  }
  else {
    visibleForm()
    name.value = null
    age.value = null
    alert('Ласкаво просимо на ресурс!')
  }
})