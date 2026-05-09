import { useState } from "react";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  function addTask() {
    if (task === "") return;

    setTasks([...tasks, task]);
    setTask("");
  }

  return (
    <div>
      <h1>My Todo App</h1>

      <input
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter a task"
      />

      <button onClick={addTask}>Add</button>

      <ul>
        {tasks.map((t, index) => (
          <li key={index}>
            {index + 1}. {t}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
