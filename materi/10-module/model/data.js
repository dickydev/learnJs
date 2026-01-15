let tasks = [
  { id: 1, title: "Belajar Module", isDone: false },
  { id: 2, title: "Refactor Code", isDone: true },
];

export const getTasks = () => tasks;

export const deleteTask = (id) => {
  tasks = tasks.filter((task) => task.id !== id);
};

export const addTask = (title) => {
  tasks = [...tasks, { id: Date.now(), title: title, isDone: false }];
};
