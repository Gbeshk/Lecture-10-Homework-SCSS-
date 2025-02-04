import React, { useState, useEffect } from "react";
import "./input.scss";
import circle from "../../../assets/images/circle.png";
import trash from "../../../assets/images/trash.svg";
import doneicon from "../../../assets/images/done.png";
import vector from "../../../assets/images/vector.svg";

function Input() {
  const [tasksarray, setTasksarray] = useState([]);
  const [task, setTask] = useState("");

  useEffect(() => {
    const oldtasks = localStorage.getItem("tasks");
    if (oldtasks) {
      setTasksarray(JSON.parse(oldtasks));
    }
  }, []);

  useEffect(() => {
    if (tasksarray.length > 0) {
      localStorage.setItem("tasks", JSON.stringify(tasksarray));
    }
  }, [tasksarray]);

  function ChangeDoneIcon(id) {
    setTasksarray(
      tasksarray.map((task) => {
        if (task.id === id) {
          if (task.done) {
            return { ...task, done: false };
          } else {
            return { ...task, done: true };
          }
        } else {
          return task;
        }
      })
    );
  }

  function DeleteTask(id) {
    setTasksarray(
      tasksarray.map((task) => {
        if (task.id === id) {
          return { ...task, delete: true };
        } else {
          return task;
        }
      })
    );
  }

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (task.trim()) {
            const newtask = {
              id: tasksarray.length,
              name: task,
              done: false,
              time: new Date().toLocaleString(),
              delete: false,
            };
            setTasksarray([...tasksarray, newtask]);
            setTask("");
          }
        }}
      >
        <img src={doneicon} className="doneimg" />
        <input
          type="text"
          placeholder="Note"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button type="submit">
          <img src={vector} />
        </button>
      </form>
      <div className="alltasks">
        {tasksarray.map((task) => (
          <div
            className={task.delete ? "dissapear" : "eachtaskdiv"}
            id="delete"
            key={task.id}
          >
            <div className="taskanddatediv">
              <p className="task1">{task.name}</p>
              <p className="date1">{task.time}</p>
            </div>
            <div className="iconsdiv">
              <img
                src={task.done ? doneicon : circle}
                onClick={() => {
                  ChangeDoneIcon(task.id);
                }}
                className="circle"
              />
              <img
                src={trash}
                onClick={() => {
                  DeleteTask(task.id);
                }}
                className="trash"
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Input;
