const form = document.getElementById('taskForm');
let taskList = [];

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const inputTask = event.target.querySelector('input[name="taskName"]');
  const value = inputTask.value;

  createTask(value);
  event.target.reset();
});

function removeElement(taskList, event) {
  const id = event.target.getAttribute('data-id');
  const newList = filterData(taskList, Number(id));
  taskList = [...newList];
  renderListTask(taskList);

  initEventRemoveButton((event) => {
    removeElement(taskList, event)
  });
}

function initEventRemoveButton(callBack) {
  const buttons = document.querySelectorAll('button[data-id]');
  buttons.forEach((item) => {
    item.addEventListener('click', (event) => {
      callBack(event);
    });
  });
  
}

function filterData(tasks = [], id) {
  
}

function createTask(name) {
  const id = taskList.length;
  const task = {
    name: name,
    checked: false,
    id,
  };

  taskList.push(task);
  renderListTask(taskList);
  initEventRemoveButton((event) => {
    removeElement(taskList, event);
  })
}

function renderListTask(tasks = []) {
  const htmlString = tasks.map((task) => {
    return renderItem(task);
  });

  const listTaskElement = document.querySelector('.list-task');
  listTaskElement.innerHTML = htmlString.join('');
}

function renderItem(task = {}) {
  return`
    <div>
      <input type="checkbox" />
      <span class="">
        ${task.name}
      </span>
      <button class="btn btn-danger" data-id="${task.id}">
        Видалити
      </button>
    </div>
  `;
}
