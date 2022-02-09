export const setTasks = (tasks) => {
  return {
    type: "TASK_SETTER",
    payload: tasks,
  };
};

// export const createTask = (task) => {
//   return {
//     type: "TASK_CREATED",
//     payload: task,
//   };
// };

// export const updateTask = (task) => {
//   return {
//     type: "TASK_UPDATED",
//     payload: task,
//   };
// };

// export const deleteTask = (taskId) => {
//   return {
//     type: "TASK_DELETED",
//     payload: taskId,
//   };
// };
