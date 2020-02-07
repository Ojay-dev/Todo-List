function createTodoItems(todo) {
  var container = document.createElement("div");

  container.innerHTML = `
  <label class="container">${todo}
    <input type="checkbox">
    <span class="checkmark"></span>
  </label>`

  var element = document.querySelector("#todoItems");
  element.appendChild(container);

}

export {createTodoItems as default}