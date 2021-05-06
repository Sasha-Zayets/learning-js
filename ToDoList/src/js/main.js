const form = document.getElementById('form')

const enterTask = document.querySelector('.enter-task')

export const arrTask = [];

form.addEventListener('submit', (event)=>{
  event.preventDefault()

  const valueTask = enterTask.value

  taskPush(valueTask)
  enterTask.value = ''
})

const taskPush = (value) =>{
  const id = arrTask.length

  const arrTaskNew = {
    name: value,
    checkbox: false,
    id: id
  }

  arrTask.push(arrTaskNew)
}