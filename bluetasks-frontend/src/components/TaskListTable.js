import React, { Component } from "react";
import TaskService from "../api/TaskService";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class TaskListTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: [],
    };

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
  }

  componentDidMount() {
    this.listTasks();
  }

  listTasks() {
    this.setState({ tasks: TaskService.list() });
  }

  onDeleteHandler(id) {
    if (window.confirm(`Deseja mesmo excluir a Tarefa ${id}?`)) {
      TaskService.delete(id);
      this.listTasks();
      toast.success(`Tarefa ${id} excluída!`, {
        position: toast.POSITION.BOTTOM_LEFT,
      });
    }
  }

  render() {
    return (
      <>
        <table className="table table-striped">
          <TableHeader />

          {this.state.tasks.length > 0 ? (
            <TableBody
              tasks={this.state.tasks}
              onDelete={this.onDeleteHandler}
            />
          ) : (
            <EmptyTableBody />
          )}
        </table>
        <ToastContainer autoClose={2000} />
      </>
    );
  }
}

const TableHeader = () => {
  return (
    <thead className="thead-dark">
      <tr>
        <th scope="col">Status</th>
        <th scope="col">Descrição</th>
        <th scope="col">Data</th>
        <th scope="col">Ações</th>
      </tr>
    </thead>
  );
};

const TableBody = (props) => {
  return (
    <tbody>
      {props.tasks.map((task) => (
        <tr key={task.id}>
          <td>
            <input type="checkbox" checked={task.done} />
          </td>
          <td>{task.description}</td>
          <td>{task.whenToDo}</td>
          <td>
            <input type="button" className="btn btn-primary" value="Editar" />
            &nbsp;
            <input
              type="button"
              className="btn btn-danger"
              onClick={() => props.onDelete(task.id)}
              value="Excluir"
            />
          </td>
        </tr>
      ))}
    </tbody>
  );
};

const EmptyTableBody = (props) => {
  return (
    <tbody>
      <tr>
        <td colSpan="4">Sem tarefas cadastradas no momento!</td>
      </tr>
    </tbody>
  );
};

export default TaskListTable;
