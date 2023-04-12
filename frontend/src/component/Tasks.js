/** @format */
import React from "react";
import "../style/Task.css";
import editIcon from "./images/edit-icon.png";
import deleteIcon from "./images/bin-img.png";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const Tasks = ({ getData, tasks, deleteData, refreshPage }) => {
  useEffect(() => {
    getData("http://127.0.0.1:8000/api/tasks/");
  }, []);
  return (
    <div className="tasks pt-4 pb-4">
      <div className="my-tasks">
        <h1>My Tasks</h1>

        <Link
          className="text-decoration-none fw-bold"
          style={{ color: "#974FD0" }}
          to="/create"
        >
          + Add New Task
        </Link>
      </div>
      {tasks.map((task) => {
        return (
          <div className="each-task" key={task.id}>
            <div className="first-line p-3 pb-2 d-flex align-items-baseline">
              <div>
                {task.tags === 1 ? (
                  <p style={{ color: "#F38383", margin: "0" }}>Urgent</p>
                ) : task.tags === 2 ? (
                  <p style={{ color: "#73C3A6", margin: "0" }}>Important</p>
                ) : (
                  <p style={{ color: "#0eace6", margin: "0" }}>Minor</p>
                )}
              </div>
              <div>
                <Link
                  style={{ backgroundColor: "#974FD0", color: "white" }}
                  className="btn btn-lg-lg d-flex align-items-center gap-2 fw-bold"
                  to={`/edit/${task.id}/`}
                >
                  <img src={editIcon} alt="" />
                  Edit
                </Link>
                <div>
                  <button
                    style={{ border: "1.5px solid #974FD0", color: "#974FD0" }}
                    className="btn d-flex align-items-center gap-2 fw-bold"
                    onClick={() => {
                      deleteData(task.id);
                      setTimeout(() => {
                        refreshPage();
                      }, 1000);
                    }}
                  >
                    <img src={deleteIcon} alt="" />
                    Delete
                  </button>
                </div>
              </div>
            </div>
            <hr style={{ margin: "8px" }} />
            <div className="p-3">
              <p className="fw-bold fs-5 text-sm-start">{task.task}</p>
              <p className="text-sm-start">{task.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Tasks;
