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
  return (
    <div className="container mx-auto">
      <Hero onAddTask={handleAddTask} />
      <Analysis />
      <TaskList tasks={tasks} />
    </div>
  );
}
