import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTasks } from "../redux/actions";
import Task from "./Task";

export default function TaskList() {
  const tasks = useSelector((state) => state.allTasks.tasks);
  const dispatch = useDispatch();

  const deleteTask = async (id) => {
    try {
      console.log(id);
      const response = await axios.delete(
        `http://localhost:3333/api/tasks/${id}`
      );
      console.log(response.data);
    } catch (e) {
      console.log(e.message);
    }
  };

  const getTasks = async () => {
    try {
      const response = await axios.get("http://localhost:3333/api/tasks");
      // console.log(response.data.tasks);
      dispatch(setTasks(response.data.tasks));
    } catch (e) {
      console.log(e.message);
    }
  };

  useEffect(() => {
    getTasks();
  }, [deleteTask]);

  const renderElements = tasks?.map(({ id, title, description }) => {
    return (
      <Task
        id={id}
        title={title}
        description={description}
        deleteTask={deleteTask}
      />
    );
  });
  return <div className="container">{renderElements}</div>;
  // return <div>hi</div>;
}
