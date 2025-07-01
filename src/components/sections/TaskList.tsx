import React from "react";
import Card from "../task-component/Card";

const TaskList = () => {
  return (
    <div className="my-10 mx-2">
      <h1 className="text-2xl font-bold mb-6">Task List(01)</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default TaskList;
