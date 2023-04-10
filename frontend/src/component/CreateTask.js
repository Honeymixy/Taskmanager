import React from "react";
import "../style/CreateTask.css";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import angleBracket from "./images/Vector.png";

const CreateTask = ({ createTask }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [newTask, setNewTask] = useState({
    task: "",
    description: "",
    tags: 1,
  });

  useEffect(() => {
    console.log(location);
  }, []);

  const options = ["urgent", "important", "minor"]; // add "minor" option

  return (
    <div className="create-task pb-4 pt-4">
      <div className="d-flex align-items-center gap-3">
        <img
          onClick={() => {
            navigate(-1);
          }}
          style={{ width: "12px" }}
          src={angleBracket}
          alt=""
        />
        <h2 className="m-0 text-start fs-1">New Task</h2>
      </div>
      <form
        onSubmit={(e) => {
          createTask(e, newTask);
          console.log(newTask);
          navigate("/tasks");
        }}
        action=""
        className="form-group"
      >
        <div>
          <p>Task Title</p>
          <input onChange={(e) => {setNewTask({ ...newTask, task: e.target.value });}}
            type="text" className="form-control" placeholder="E.g Project Defense, Assignment..."/>
        </div>
        <div>
          <p>Description</p>
          <textarea
            onChange={(e) => {
              setNewTask({ ...newTask, description: e.target.value });
            }}
            name=""
            id=""
            cols="30"
            rows="10"
            className="form-control"
            placeholder="Briefly describe your task..."
          ></textarea>
        </div>
        <div>
          <p>Tags</p>
          <select
            onChange={(e) => {
              if (e.target.value === "urgent") {
                setNewTask({ ...newTask, tags: 1 });
              } else if (e.target.value === "minor") { // handle new option "minor"
                setNewTask({ ...newTask, tags: 3 });
              } else {
                setNewTask({ ...newTask, tags: 2 });
              }
            }}
            className="form-select"
          >
            {options.map((each) => {
              return (
                <option key={each} value={each}>
                  {each}
                </option>
              );
            })}
          </select>
        </div>
        <button
          style={{
            backgroundColor: "#974FD0",
            color: "white",
          }}
          className="btn"
        >
          Done
        </button>
        <Link style={{ color: "#974FD0" }}>Back To Top</Link>
      </form>
    </div>
  );
};

export default CreateTask;
