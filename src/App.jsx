import { useState } from "react";
import Card from "./components/Card";

function App() {
  const [task, setTask] = useState([]);
  const [input, setInput] = useState("");

  function handleClick(e) {
    e.preventDefault();

    if (input.trim() === "") return;

    let newTask = input.trim();

    if (!task.includes(newTask)) {
      setTask([...task, newTask]);
    }
    setInput("");
  }

  function deleteTask(index) {
    const updatedTasks = task.filter((_, i) => i !== index);
    setTask(updatedTasks);
  }

  return (
    <div className="container mx-auto">
      <div
        className="mx-auto pt-32 pb-12 flex gap-3"
        style={{ width: "750px" }}
      >
        <input
          onChange={(e) => setInput(e.target.value)}
          value={input}
          type="text"
          placeholder="Add a new task"
          className="input input-bordered w-full p-2 px-4 bg-black border-4 rounded-xl border-indigo-500/75 text-indigo-500 text-3xl"
        />
        <button
          onClick={handleClick}
          className="btn bg-violet-700 text-white rounded-xl px-5 py-2 pb-4 text-4xl"
        >
          +
        </button>
      </div>

      <div className="mx-auto py-4 flex" style={{ width: "750px" }}>
        <h1 className="text-white text-4xl px-3 mb-4">Task - {task.length}</h1>
      </div>

      {task.length > 0 &&
        task.map((value, index) => (
          <Card
            task={value}
            key={index}
            index={index}
            deleteTask={deleteTask}
          />
        ))}
    </div>
  );
}

export default App;
