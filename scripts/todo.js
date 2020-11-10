function sendAlert(message) {
alert(message);
}
sendAlert("Hello World!");
function addTodoItem() {
    var todo = document.getElementById("todo-item");

    //this.sendAlert(todo.value);

    this.addToList(todo.value);

    todo.value = null;
}

function addToList(message) {
    var list = document.getElementById("todo-list");
    var item = document.createElement("li");

    item.appendChild(document.createTextNode(message));
    list.appendChild(item);
}