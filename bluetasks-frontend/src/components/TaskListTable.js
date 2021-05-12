import React, { Component } from "react";
import TaskService from "../api/TaskService";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Redirect } from "react-router-dom";
import Alert from "./Alert";

class TaskListTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: [],
      editId: 0,
    };

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onStatusChangeHandler = this.onStatusChangeHandler.bind(this);
    this.onEditHandler = this.onEditHandler.bind(this);
  }

  componentDidMount() {
    this.listTasks();
  }

  listTasks() {
    this.setState({ tasks: TaskService.list() });
  }

  onDeleteHandler(id) {
    if (window.confirm(`Deseja mesmo excluir a tarefa?`)) {
      TaskService.delete(id);
      this.listTasks();
      toast.success(`Tarefa excluída!`, {
        position: toast.POSITION.BOTTOM_LEFT,
      });
    }
  }

  onEditHandler(id) {
    this.setState({ editId: id });
  }

  onStatusChangeHandler(task) {
    task.done = !task.done;
    TaskService.save(task);
    this.listTasks();
  }

  render() {
    if (this.state.editId > 0) {
      return <Redirect to={`/form/${this.state.editId}`} />;
    }

    return (
      <>
        <Alert message="Erro" />
        <table className="table table-striped">
          <TableHeader />

          {this.state.tasks.length > 0 ? (
            <TableBody
              tasks={this.state.tasks}
              onDelete={this.onDeleteHandler}
              onStatusChange={this.onStatusChangeHandler}
              onEdit={this.onEditHandler}
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
            <input
              type="checkbox"
              checked={task.done}
              onChange={() => props.onStatusChange(task)}
            />
          </td>
          <td>{task.done ? <s>{task.description}</s> : task.description}</td>
          <td>{task.done ? <s>{task.whenToDo}</s> : task.whenToDo}</td>
          <td>
            <input
              type="button"
              className="btn btn-primary"
              value="Editar"
              onClick={() => props.onEdit(task.id)}
            />
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
