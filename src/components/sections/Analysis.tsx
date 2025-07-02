import { Calendar, ChartLine, CircleCheckBig, Clock2 } from "lucide-react";
import React from "react";
import { Task } from "../types/task";

const Analysis = ({ tasks }: { tasks: Task[] }) => {
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((task) => task.completed).length;
  const pendingTasks = tasks.filter((task) => !task.completed).length;
  const completionRate = (completedTasks / totalTasks) * 100;
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 mt-10 mx-2">
      <div className="border rounded-lg p-4 space-y-2">
        <div className="inline-flex items-center justify-center p-2 rounded-lg bg-blue-100">
          <Calendar size={30} className="text-blue-500" />
        </div>
        <h2 className="text-3xl">{totalTasks}</h2>
        <p className="text-lg font-semibold">Total tasks</p>
      </div>
      <div className="border rounded-lg p-4 space-y-2">
        <div className="inline-flex items-center justify-center p-2 rounded-lg bg-green-100">
          <CircleCheckBig size={30} className="text-green-500" />
        </div>
        <h2 className="text-3xl">{completedTasks}</h2>
        <p className="text-lg font-semibold">Completed</p>
      </div>
      <div className="border rounded-lg p-4 space-y-2">
        <div className="inline-flex items-center justify-center p-2 rounded-lg bg-yellow-100">
          <Clock2 size={30} className="text-yellow-500" />
        </div>
        <h2 className="text-3xl">{pendingTasks}</h2>
        <p className="text-lg font-semibold">Pending</p>
      </div>
      <div className="border rounded-lg p-4 space-y-2">
        <div className="inline-flex items-center justify-center p-2 rounded-lg bg-purple-100">
          <ChartLine size={30} className="text-purple-500" />
        </div>
        <h2 className="text-3xl">{completionRate.toFixed(2)}%</h2>
        <p className="text-lg font-semibold">Completion Rate</p>
      </div>
    </div>
  );
};

export default Analysis;
