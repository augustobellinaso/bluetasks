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
}

export default new TaskService();