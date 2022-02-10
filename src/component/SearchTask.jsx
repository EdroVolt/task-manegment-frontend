import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setTasks } from "../redux/actions";

export default function SearchTask() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();

  const sendSearchTask = async () => {
    try {
      const response = await axios.get(`http://localhost:3333/api/tasks/`, {
        params: {
          title,
          description,
        },
      });
      dispatch(setTasks(response.data.tasks));
      console.log(response.data);
    } catch (e) {
      console.log(e.message);
    }
  };

  const handelSearchTask = async () => {
    await sendSearchTask();
  };

  return (
    <div className="row border-bottom pb-4 border-3 border-warning">
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
        <button className="btn btn-success ms-auto" onClick={handelSearchTask}>
          Search
        </button>
      </div>
    </div>
  );
}
