import axios from "axios";
import React from "react";

export default function Task({ id, title, description, getTasks }) {
  const deleteTask = async () => {
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

  const handelEdit = () => {};
  const handelDelete = async () => {
    await deleteTask();
    getTasks();
  };

  return (
    <div key={id} className="row m4-3 border-bottom p-4">
      <div className="col-4">
        <span>{title}</span>
      </div>
      <div className="col-6">
        <span>{description}</span>
      </div>
      <div className="col-1">
        <button className="btn btn-info" onClick={handelEdit}>
          edit
        </button>
      </div>
      <div className="col-1">
        <button className="btn btn-danger" onClick={handelDelete}>
          delete
        </button>
      </div>
    </div>
  );
}
