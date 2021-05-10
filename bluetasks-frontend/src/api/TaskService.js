class TaskService {
  constructor() {
    this.tasks = [
      { id: 1, description: "Tarefa 1", whenToDo: "10/10/2021", done: false },
      { id: 2, description: "Tarefa 2", whenToDo: "11/10/2021", done: false },
      { id: 3, description: "Tarefa 3", whenToDo: "12/10/2021", done: true },
    ];
  }

  list() {
    return this.tasks;
  }

  delete(id) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }

  save(task) {
    if (task.id !== 0) {
      this.tasks.map((t) => (task.id !== t.id ? t : task));
    } else {
      const taskId = Math.max(...this.tasks.map((t) => t.id)) + 1;
      task.id = taskId;
      this.tasks.push(task);
    }
  }
}

export default new TaskService();
