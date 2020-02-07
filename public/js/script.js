(function onInit() {
  let inputTodo = document.querySelector('#inputTodo');

  inputTodo.onchange = () => {
    createTodoItems(inputTodo.value)
    console.log(inputTodo.value);
  }
}())

function createTodoItems(todo) {
  var container = document.createElement("div");
  // var node = document.createTextNode(`
  // <label class="container">${todo}
  //   <input type="checkbox">
  //   <span class="checkmark"></span>
  // </label>`);

  container.innerHTML = `
  <label class="container">${todo}
    <input type="checkbox">
    <span class="checkmark"></span>
  </label>`


  // container.appendChild(node);

  var element = document.querySelector("#todoItems");
  element.appendChild(container);

}