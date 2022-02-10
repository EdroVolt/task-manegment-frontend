export const setTasks = (tasks) => {
  return {
    type: "TASK_SETTER",
    payload: tasks,
  };
};
