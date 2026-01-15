import { addTask, deleteTask, getTasks } from "../model/data.js";
import { App } from "../view/view.js";

const root = document.getElementById("root");

const render = () => {
  root.innerHTML = App(getTasks());
};

root.addEventListener("click", (event) => {
  if (event.target.classList.contains("delete-btn")) {
    const id = Number(event.target.dataset.id);
    deleteTask(id);
    render();
  }
});

root.addEventListener("submit", (e) => {
  if (e.target.id === "taskForm") {
    e.preventDefault();
    const input = document.getElementById("taskInput");
    addTask(input.value);
    render();
  }
});

render();
