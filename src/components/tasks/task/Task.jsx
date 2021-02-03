import React from "react";
import styles from "./task.module.css";
import deleteIcon from "../task/delete.png";

const Task = ({ task, toggleUrgent, onDelete }) => {
  return (
    <div
      className={`${styles.Task} ${task.urgent ? styles.Urgent : ""}`}
      onDoubleClick={() => toggleUrgent(task)}
    >
      <div>
        <p>{task.text}</p>
        <small>{task.date}</small>
      </div>
      <div className={styles.Delete}>
        <img
          src={deleteIcon}
          onClick={() => onDelete(task)}
          width="20px"
          height="20px"
        />
      </div>
    </div>
  );
};

export default Task;
