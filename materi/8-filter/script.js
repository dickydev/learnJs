const taskData = [
  { id: 1, title: "Belajar JavaScript", isDone: false },
  { id: 2, title: "Belajar React", isDone: false },
  { id: 3, title: "Belajar Node.js", isDone: false },
];
const inputFilterTask = 2;

const filterTask = taskData.filter((task) => task.id !== inputFilterTask);
filterTask.map((data) => console.log(data.title));
