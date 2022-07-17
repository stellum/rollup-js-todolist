import "@fortawesome/fontawesome-free/js/all.min.js";
import "../scss/style.scss";

class TodoList {
  constructor() {
    this.assignElement();
    this.addEvent();
  }
  assignElement() {
    this.inputContainerEl = document.getElementById("input-container");
    this.inputAreaEl = this.inputContainerEl.querySelector("#input-area");
    this.TodoInputEl = this.inputAreaEl.querySelector("#todo-input");
    this.addBtnEl = this.inputAreaEl.querySelector("#add-btn");
    this.todoContainerEl = document.getElementById("todo-container");
    this.todoListEl = this.todoContainerEl.querySelector("#todo-list");
  }
  addEvent() {
    this.addBtnEl.addEventListener("click", this.onClickAddBtn.bind(this));
    this.todoListEl.addEventListener("click", this.onClickTodoList.bind(this));
  }

  onClickTodoList(event) {
    const { target } = event;
    const btn = target.closest("button");
    if (btn.matches("#delete-btn")) {
      this.deleteTodo(target);
    }
  }

  deleteTodo(target) {
    const todoDiv = target.closest(".todo");
    todoDiv.addEventListener("transitioned", () => {
      todoDiv.remove();
    });
    todoDiv.classList.add("delete");
  }

  onClickAddBtn() {
    if (this.TodoInputEl.value.length === 0) {
      alert("내용을 입력해주세요");
      return;
    }
    this.createTodoElement(this.TodoInputEl.value);
  }
  createTodoElement(value) {
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    const todoContent = document.createElement("input");
    todoContent.value = value;
    todoContent.readOnly = true;
    todoContent.classList.add("todo-item");
    const fragment = new DocumentFragment();
    fragment.appendChild(todoContent);
    fragment.appendChild(
      this.createButton("complete-btn", "complete-btn", ["fas", "fa-check"])
    );
    fragment.appendChild(
      this.createButton("edit-btn", "edit-btn", ["fas", "fa-check"])
    );
    fragment.appendChild(
      this.createButton("delete-btn", "delete-btn", ["fas", "fa-trash"])
    );
    fragment.appendChild(
      this.createButton("save-btn", "save-btn", ["fas", "fa-save"])
    );
    todoDiv.appendChild(fragment);
    this.todoListEl.appendChild(todoDiv);
    this.TodoInputEl.value = "";
  }
  createButton(btnId, btnClassName, iconClassName) {
    const btn = document.createElement("button");
    const icon = document.createElement("i");
    icon.classList.add(...iconClassName);
    btn.appendChild(icon);
    btn.id = btnId;
    btn.classList.add(btnClassName);
    return btn;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const todoList = new TodoList();
});
