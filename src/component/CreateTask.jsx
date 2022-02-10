import axios from "axios";
import React, { useState } from "react";

export default function CreateTask({ getTasks }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const sendAddedTask = async () => {
    try {
      const response = await axios.post(`http://localhost:3333/api/tasks`, {
        title,
        description,
      });
      console.log(response.data);
    } catch (e) {
      console.log(e.message);
    }
  };

  const handelAddTask = async () => {
    await sendAddedTask();
    getTasks();
  };

  return (
    <div className="container border-bottom p-4 ">
      <div className="row">
        <div className="col-4">
          <input
            type="text"
            className="form-control"
            placeholder="title"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="col-6">
          <input
            type="text"
            className="form-control"
            placeholder="description"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="col-2 d-flex">
          <button className="btn btn-success ms-auto" onClick={handelAddTask}>
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
