import { combineReducers } from "redux";

const initialState = {
  tasks: [],
};

const tasksReducer = (state = initialState, { type, payload }) => {
  return { ...state, tasks: payload };
};

const reducers = combineReducers({
  allTasks: tasksReducer,
});

export default reducers;
