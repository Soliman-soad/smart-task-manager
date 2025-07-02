import React from "react";
import Card from "../task-component/Card";
import { Task } from "../types/task";

interface TaskListProps {
  tasks: Task[];
  onEditTask: (task: Task) => void;
  onDeleteTask: (id: string) => void;
}

const TaskList = ({ tasks, onEditTask, onDeleteTask }: TaskListProps) => {
  return (
    <div className="my-10 mx-2">
      <h1 className="text-2xl font-bold mb-6">Task List({tasks.length})</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {tasks.map((task) => (
          <Card key={task.id} task={task} onEdit={onEditTask} onDelete={onDeleteTask} />
        ))}
      </div>
    </div>
  );
};

export default TaskList;
