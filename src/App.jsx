import "./App.css";
import Form from "./components/form/Form";
import Header from "../src/components/header/Header";
import Tasks from "./components/tasks/Tasks";
import { useEffect, useState } from "react";
import firebase from "./firebase";

function App() {
  const [tasks, setTasks] = useState([]);
  const [showFrom, setShowForm] = useState(false);

  // Load the tasks from db when page laods
  useEffect(() => {
    // Take snapshots of any changes and update the database and UI
    firebase
      .firestore()
      .collection("tasks")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        // Get the array of tasks and update the state. Add id to each task
        setTasks(
          snapshot.docs.map((doc) => {
            return { ...doc.data(), id: doc.id };
          })
        );
      });
  }, []);

  // Add the task object in database
  const addTask = (data) => {
    firebase
      .firestore()
      .collection("tasks")
      .add({
        ...data,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      });
  };

  // Toggle input form
  const toggleFrom = () => {
    setShowForm(!showFrom);
  };

  // Toggle Urgent
  const toggleUrgent = (clickedTask) => {
    // Update remnder property of clickedTask
    firebase
      .firestore()
      .collection("tasks")
      .doc(`${clickedTask.id}`)
      .update({ urgent: !clickedTask.urgent });
  };

  // Delete Task
  const deleteTask = (task) => {
    firebase.firestore().collection("tasks").doc(`${task.id}`).delete();
  };

  return (
    <div className="App">
      <Header toggleForm={toggleFrom} formStatus={showFrom} />
      <Form addTask={addTask} toggleForm={showFrom} />
      <Tasks tasks={tasks} toggleUrgent={toggleUrgent} onDelete={deleteTask} />
    </div>
  );
}

export default App;
