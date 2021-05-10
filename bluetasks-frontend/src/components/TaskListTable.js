import React, { Component } from "react";
import TaskService from "../api/TaskService";

class TaskListTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: [],
    };
  }

  listTasks() {
    this.setState({ tasks: TaskService.list() });
  }

  componentDidMount() {
    this.listTasks();
  }

  render() {
    return (
      <table className="table table-striped">
        <TableHeader />
        <TableBody tasks={this.state.tasks} />
      </table>
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
            <input type="checkbox" />
          </td>
          <td>{task.description}</td>
          <td>{task.whenToDo}</td>
          <td></td>
        </tr>
      ))}
    </tbody>
  );
};

export default TaskListTable;
