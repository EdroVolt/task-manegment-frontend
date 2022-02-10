import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import SearchTask from "./SearchTask";
import Task from "./Task";

export default function TaskList({ getTasks }) {
  const tasks = useSelector((state) => state.allTasks.tasks);

  useEffect(() => {
    getTasks();
  }, []);

  const renderElements = tasks?.map(({ id, title, description }) => {
    return (
      <Task
        id={id}
        title={title}
        description={description}
        getTasks={getTasks}
      />
    );
  });
  return (
    <div className="container border border-4 p-4 ">
      <SearchTask />
      {renderElements}
    </div>
  );
  // return <div>hi</div>;
}
