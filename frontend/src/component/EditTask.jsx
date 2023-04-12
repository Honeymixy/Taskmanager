import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import angleBracket from "./images/Vector.png";

const EditTask = ({ editTask }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [data, setData] = useState({
    task: {},
    updatedTask: {},
    choosenOption: {},
    options: ["urgent", "important","minor"],
  });
  useEffect(() => {
    const getData = async (url) => {
      let res = await fetch(url);
      let jsonData = await res.json();
      console.log(jsonData);
      setData({ ...data, task: jsonData, updatedTask: jsonData });
    };
    getData(`http://127.0.0.1:8000/api/tasks/detail/${id}`);
  }, []);
  return (
    <div className="create-task pt-4 pb-4">
      <div className="d-flex align-items-center gap-3">
        <img
          onClick={() => {
            navigate(-1);
          }}
          style={{ width: "12px" }}
          src={angleBracket}
          alt=""
        />
        <h2 className="m-0 text-start fs-1">Edit Task</h2>
      </div>
      <form
        onSubmit={(e)=>{
          editTask(e, data.updatedTask, data.updatedTask.id);
          navigate("/tasks")
        }}
        action=""
        className="form-group"
      >
        <div>
          <p>Task Title</p>
          <input
            onChange={(e) => {
              setData({
                ...data,
                updatedTask: { ...data.updatedTask, task: e.target.value },
                task: { ...data.task, task: e.target.value },
              });
            }}
            type="text"
            value={data.task.task || ""}
            className="form-control"
            placeholder="E.g Project Defense, Assignment..."
          />
        </div>
        <div>
          <p>Description</p>
          <textarea
            onChange={(e) => {
              setData({
                ...data,
                updatedTask: {
                  ...data.updatedTask,
                  description: e.target.value,
                },
                task: { ...data.task, description: e.target.value },
              });

              console.log(data);
            }}
            name=""
            id=""
            cols="30"
            rows="10"
            value={data.task.description}
            className="form-control"
            placeholder="Briefly describe your task..."
          >
            {data.task.description}
          </textarea>
        </div>
        <div>
          <p>Tags</p>
          <select
            onChange={(e) => {
              console.log(e);
              console.log(e.target.value);
              if (e.target.value === "urgent") {
                setData({
                  ...data,
                  updatedTask: { ...data.updatedTask, tags: 1 },
                });
              } else if (e.target.value === "minor"){
                setData({
                  ...data,
                  updatedTask: { ...data.updatedTask, tags: 2 },
                });
              }
              else {
                setData({
                  ...data,
                  updatedTask: { ...data.updatedTask, tags: 3},
                });
              }

              console.log(data);
            }}
            className="form-select"
          >
            {data.options.map((each) => {
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

export default EditTask;
