const todoList = [];

// function renderTodoList() {
// const listElement = document.querySelector('.js-todo-list');
// listElement.innerHTML = ''; // Clear previous list

// todoList.forEach((task, index) => {
// const taskElement = document.createElement('div');
// taskElement.innerHTML = `
// <div>${task.name}</div>
// <div>${task.dueDate}</div>
// <button onclick="deleteTodo(${index})">Delete</button>`;
// listElement.appendChild(taskElement);
// });
// }

  
  function renderTodoList() {
    const listElement = document.querySelector('.js-todo-list');
    listElement.innerHTML = ''; // Clear the list
  
    for (let i = 0; i < todoList.length; i++) {
      const task = todoList[i];
  
      // Create a new div for each task
      const taskElement = document.createElement('div');
      taskElement.textContent = `${task.name} - ${task.dueDate}`;
  
      // Create a delete button
      const deleteButton = document.createElement('button');
      deleteButton.textContent = "Delete";

      // Add the task and delete button to the list
      taskElement.appendChild(deleteButton);
      listElement.appendChild(taskElement);
    }
  }
  
  function deleteTodo(index) {
    todoList.splice(index, 1); // Remove the task from the list
    renderTodoList(); // Refresh the list
  }
  
function addTodo() {
const name = document.querySelector('.js-name-input').value;
const dueDate = document.querySelector('.js-due-date-input').value;
if (name === '') return; // Prevent empty tasks
todoList.push({ name, dueDate });
document.querySelector('.js-name-input').value = ''; // Clear input
renderTodoList();
}

function deleteTodo(index) {
todoList.splice(index, 1);
renderTodoList();
}

document.querySelector('.js-add-todo-button')
.addEventListener('click', addTodo);
