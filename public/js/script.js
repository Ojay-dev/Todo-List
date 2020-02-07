import createTodoItems from './createTodoItems.js'

(function onInit() {
  let inputTodo = document.querySelector('#inputTodo');

  inputTodo.onchange = () => {
    createTodoItems(inputTodo.value)
    console.log(inputTodo.value);
  }
}())
