"use client";
import Analysis from "@/components/sections/Analysis";
import Hero from "@/components/sections/Hero";
import TaskList from "@/components/sections/TaskList";
import { useState } from "react";
import { Task } from "@/components/types/task";

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  
  const handleAddTask = (task: Task) => {
    setTasks((prev) => [...prev, task]);
  };
  const handleEditTask = (updatedTask: Task) => {
    setTasks((prev) => prev.map(t => t.id === updatedTask.id ? updatedTask : t));
  };
  const handleDeleteTask = (id: string) => {
    setTasks((prev) => prev.filter(t => t.id !== id));
  };
  return (
    <div className="container mx-auto">
      <Hero onAddTask={handleAddTask} />
      <Analysis />
      <TaskList tasks={tasks} onEditTask={handleEditTask} onDeleteTask={handleDeleteTask} />
    </div>
  );
}
