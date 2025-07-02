"use client";
import Analysis from "@/components/sections/Analysis";
import Hero from "@/components/sections/Hero";
import TaskList from "@/components/sections/TaskList";
import { useState, useEffect } from "react";
import { Task } from "@/components/types/task";
import Footer from "@/components/sections/Footer";

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem("tasks");
    if (stored) {
      try {
        setTasks(JSON.parse(stored));
      } catch {}
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleAddTask = (task: Task) => {
    setTasks((prev) => [...prev, task]);
  };
  const handleEditTask = (updatedTask: Task) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === updatedTask.id ? updatedTask : t))
    );
  };
  const handleDeleteTask = (id: string) => {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  };
  return (
    <div>
      <div className="container mx-auto">
        <Hero onAddTask={handleAddTask} />
        <Analysis tasks={tasks} />
        <TaskList
          tasks={tasks}
          onEditTask={handleEditTask}
          onDeleteTask={handleDeleteTask}
        />
      </div>
      <Footer />
    </div>
  );
}
