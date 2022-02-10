import axios from "axios";
import React, { useRef, useState } from "react";

export default function Task({ id, title, description, getTasks }) {
  const [editMode, setEditMode] = useState(false);

  const titleElement = useRef();
  const descriptionElement = useRef();

  const sendDeletedTask = async () => {
    try {
      const response = await axios.delete(
        `http://localhost:3333/api/tasks/${id}`
      );
      console.log(response.data);
    } catch (e) {
      console.log(e.message);
    }
  };

  const sendModefiedTask = async (newTitle, newDescription) => {
    try {
      const response = await axios.put(
        `http://localhost:3333/api/tasks/${id}`,
        {
          title: newTitle,
          description: newDescription,
        }
      );
      console.log(response.data);
    } catch (e) {
      console.log(e.message);
    }
  };

  const handelSaveChanges = async () => {
    setEditMode(false);
    titleElement.current.contentEditable = false;
    descriptionElement.current.contentEditable = false;
    await sendModefiedTask(
      titleElement.current.textContent,
      descriptionElement.current.textContent
    );
    getTasks();
  };

  const handelDelete = async () => {
    await sendDeletedTask();
    getTasks();
  };

  return (
    <div key={id} className="row m4-3 border-bottom p-4">
      <div className="col-4">
        <p
          ref={titleElement}
          className={`${editMode ? "border border-3" : ""}`}
        >
          {title}
        </p>
      </div>
      <div className="col-6">
        <p
          ref={descriptionElement}
          className={`${editMode ? "border border-3" : ""}`}
        >
          {description}
        </p>
      </div>
      <div className="col-1">
        <button
          className={`btn btn-info ${editMode ? "d-none" : ""}`}
          onClick={() => {
            setEditMode(true);
            titleElement.current.contentEditable = true;
            descriptionElement.current.contentEditable = true;
          }}
        >
          Edit
        </button>

        <button
          className={`btn btn-success ${editMode ? "" : "d-none"}`}
          onClick={handelSaveChanges}
        >
          Save
        </button>
      </div>
      <div className="col-1">
        <button className="btn btn-danger" onClick={handelDelete}>
          Delete
        </button>
      </div>
    </div>
  );
}
