"use client";

import { useEffect, useState } from "react";

type Task = {
  id: number;
  title: string;
  completed: boolean;
  createdAt: string;
};

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [title, setTitle] = useState("");
  const [darkMode, setDarkMode] = useState(true); // 👈 κρατάμε το theme

  // Φέρε tasks από το NestJS API
  useEffect(() => {
    fetch("http://localhost:4000/tasks")
      .then((res) => res.json())
      .then(setTasks)
      .catch((err) => console.error("Failed to fetch tasks:", err));
  }, []);

  const addTask = async () => {
    if (!title) return;
    const res = await fetch("http://localhost:4000/tasks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title }),
    });
    const newTask = await res.json();
    setTasks([...tasks, newTask]);
    setTitle("");
  };

  const toggleTask = async (id: number) => {
    const res = await fetch(`http://localhost:4000/tasks/${id}/toggle`, {
      method: "POST",
    });
    const updated = await res.json();
    setTasks(tasks.map((t) => (t.id === id ? updated : t)));
  };

  const deleteTask = async (id: number) => {
    await fetch(`http://localhost:4000/tasks/${id}`, { method: "DELETE" });
    setTasks(tasks.filter((t) => t.id !== id));
  };

  return (
    <main
      className={`flex flex-col items-center justify-start min-h-screen p-8 transition-colors duration-300 ${
        darkMode ? "bg-black text-white" : "bg-gray-100 text-black"
      }`}
    >
      {/* Κουμπί αλλαγής theme */}
      <div className="w-full flex justify-end mb-4">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="px-4 py-2 rounded-lg border border-gray-500 hover:bg-gray-700 hover:text-white"
        >
          {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>
      </div>

      <h1 className="text-4xl font-bold mb-6">My Tasks</h1>

      {/* Input για νέο task */}
      <div className="flex gap-2 mb-6">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Νέο task..."
          className={`px-3 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 ${
            darkMode
              ? "bg-gray-800 text-white border-gray-600"
              : "bg-white text-black border-gray-300"
          }`}
        />
        <button
          onClick={addTask}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
        >
          Add
        </button>
      </div>

      {/* Λίστα με tasks */}
      <ul className="space-y-3 w-full max-w-md">
        {tasks.map((task) => (
          <li
            key={task.id}
            className={`flex justify-between items-center shadow p-4 rounded-lg ${
              darkMode ? "bg-gray-900" : "bg-white"
            }`}
          >
            <span
              onClick={() => toggleTask(task.id)}
              className={`cursor-pointer ${
                task.completed ? "line-through text-green-400" : ""
              }`}
            >
              {task.title}
            </span>
            <button
              onClick={() => deleteTask(task.id)}
              className="text-red-500 hover:text-red-700"
            >
              ✕
            </button>
          </li>
        ))}
      </ul>
    </main>
  );
}

