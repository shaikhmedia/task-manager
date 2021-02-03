import React, { useState } from "react";
import Button from "../button/Button";
import styles from "./form.module.css";

const Form = ({ addTask, toggleForm }) => {
  const [text, setText] = useState("");
  const [date, setDate] = useState("");
  const [urgent, setUrgent] = useState(false);

  const task = {
    text,
    date,
    urgent,
  };

  const submit = (e) => {
    e.preventDefault();

    addTask(task);

    setText("");
    setDate("");
    setUrgent(false);
  };

  return (
    <div>
      {toggleForm ? (
        <form className={styles.Form} onSubmit={submit}>
          <div>
            <label htmlFor="text">Task</label>
            <input
              type="text"
              name="task"
              placeholder="add task"
              id="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="date">Date</label>
            <input
              type="text"
              name="task"
              placeholder="add date & time"
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          <div id={styles.Urgent}>
            <label htmlFor="urgent">Mark urgent</label>
            <input
              type="checkbox"
              name="task"
              id="urgent"
              checked={urgent}
              value={urgent}
              onChange={(e) => setUrgent(e.currentTarget.checked)}
            />
          </div>
          <Button
            style={{ padding: "8px", fontSize: "1rem" }}
            clicked={submit}
            type="submit"
            text="Save Task"
          />
        </form>
      ) : (
        ""
      )}
    </div>
  );
};

export default Form;
