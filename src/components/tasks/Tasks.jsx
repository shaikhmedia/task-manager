import React from "react";
import Task from "../tasks/task/Task";

const Tasks = ({ tasks, toggleUrgent, onDelete }) => {
  let singleTask = (
    <p
      style={{
        backgroundColor: "#99B898",
        padding: "10px",
        color: "white",
        borderRadius: "4px",
      }}
    >
      There is no task!
    </p>
  );

  if (tasks.length > 0) {
    singleTask = tasks.map((task) => (
      <Task onDelete={onDelete} task={task} toggleUrgent={toggleUrgent} />
    ));
  }

  return <div style={{ marginTop: "10px" }}>{singleTask}</div>;
};

export default Tasks;
