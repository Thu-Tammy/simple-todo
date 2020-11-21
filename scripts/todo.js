var todoItems = [];

function addTodoItem() {
  var todo = document.getElementById("todo-item");
  var itemText = todo.value;

  this.removeError();

  if (this.itemExists(itemText)) {
    this.addToList(itemText);
  } else {
    this.displayError('Item exists')
  }

  todo.value = null
}

function removeError() {
  var alert = document.getElementById("todo-error")
  alert.classList.add("invisible");

  alert.innerHTML = null;
}

function displayError(message) {
  var alert = document.getElementById("todo-error")
  alert.classList.remove("invisible");

  alert.innerHTML = message;
}

function addToList(message) {
  var list = document.getElementById("todo-list");
  var item = document.createElement("li");

  this.todoItems.push(message);

  item.appendChild(document.createTextNode(message));
  list.appendChild(item);
}

function itemExists(message) {
  return !this.todoItems.includes(message);
}