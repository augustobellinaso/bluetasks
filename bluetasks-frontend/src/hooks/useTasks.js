import axios from "axios";
import React, { useContext, useState } from "react";
import { API_ENDPOINT } from "../constants";
import { AuthContext } from "../hooks/useAuth";

export const useTasks = () => {
  const auth = useContext(AuthContext);
  const [taskList, setTaskList] = useState([]);
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState(false);
  const [taskRemoved, setTaskRemoved] = useState(null);

  const list = async () => {
    try {
      setProcessing(true);
      setError(null);
      const response = await axios.get(
        `${API_ENDPOINT}/tasks?sort=whenToDo,asc`,
        buildAuthHeader()
      );
      setTaskList(response.data.content);
      setProcessing(false);
    } catch (error) {
      handleError(error);
    }
  };

  const remove = async (taskToRemove) => {
    try {
      await axios.delete(
        `${API_ENDPOINT}/tasks/${taskToRemove.id}`,
        buildAuthHeader()
      );
      setTaskList(taskList.filter((task) => taskToRemove.id !== task.id));
      setTaskRemoved(taskToRemove);
    } catch (error) {
      handleError(error);
    }
  };

  const buildAuthHeader = () => {
    return {
      headers: {
        Authorization: `Bearer ${auth.credentials.token}`,
      },
    };
  };

  const handleError = (error) => {
    console.log(error);
    const resp = error.response;

    if (resp && resp.status === 400 && resp.data) {
      setError(resp.data.error);
    } else {
      setError(error.message);
    }

    setProcessing(false);
  };

  const clearTaskRemoved = () => {
    setTaskRemoved(null);
  };

  return {
    taskList,
    error,
    processing,
    list,
    remove,
    taskRemoved,
    clearTaskRemoved,
  };
};
