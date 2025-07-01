"use client";
import Analysis from "@/components/sections/Analysis";
import Hero from "@/components/sections/Hero";
import TaskList from "@/components/sections/TaskList";

export default function Home() {
  return (
    <div className="container mx-auto">
      <Hero />
      <Analysis />
      <TaskList />
    </div>
  );
}
