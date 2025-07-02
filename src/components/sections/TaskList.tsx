import React, { useState } from "react";
import Card from "../task-component/Card";

interface Task {
  name: string;
  description: string;
  date: string;
}

const TaskList = ({ tasks }: { tasks: Task[] }) => {
  return (
    <div className="my-10 mx-2">
      <h1 className="text-2xl font-bold mb-6">Task List(01)</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {tasks.map((task, idx) => (
          <Card key={idx} task={task} />
        ))}
      </div>
    </div>
  );
};

export default TaskList;
