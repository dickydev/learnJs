export const App = (tasks) => {
  return `
        <div>
            <h1>Task Master</h1>

            <form id="taskForm">
                <input id="taskInput" placeholder="Tambahkan task..."/>
                <button type="submit">Tambah</button>
            </form>

            <ul>
            ${tasks
              .map(
                (task) =>
                  `<li>
                    <span style="text-decoration: ${
                      task.isDone ? "line-through" : "none"
                    }"
                    >${task.title}</span> | <span>${
                    task.isDone ? "[DONE]" : "[NOT YET]"
                  }</span>
                    <button class="delete-btn" data-id="${
                      task.id
                    }" type="button">Hapus</button>
                    <input type="checkbox">
                </li>`
              )
              .join("")}
            </ul>
        </div>
    `;
};

// TUGAS : MEMBUAT BUTTON CEKLIS DENGAN INPUT CHECKBOX SEPERTI PADA TEMPLATE CODE DIATAS
