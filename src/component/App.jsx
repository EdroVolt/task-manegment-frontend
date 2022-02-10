import axios from "axios";
import React from "react";
import { useDispatch } from "react-redux";
import { setTasks } from "../redux/actions";
import CreateTask from "./CreateTask";
import TaskList from "./TaskList";

export default function App() {
  const dispatch = useDispatch();
  const getTasks = async () => {
    try {
      const response = await axios.get("http://localhost:3333/api/tasks");
      // console.log(response.data.tasks);
      dispatch(setTasks(response.data.tasks));
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <div className="p-5">
      <CreateTask getTasks={getTasks} />
      <TaskList getTasks={getTasks} />
    </div>
  );
}
