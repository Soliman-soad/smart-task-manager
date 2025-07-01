import { Calendar, ChartLine, CircleCheckBig, Clock2 } from "lucide-react";
import React from "react";

const Analysis = () => {
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
      <div className="border rounded-lg p-4 space-y-2">
        <div className="inline-flex items-center justify-center p-2 rounded-lg bg-blue-100">
          <Calendar size={30} className="text-blue-500" />
        </div>
        <h2 className="text-3xl">01</h2>
        <p>Total tasks</p>
      </div>
      <div className="border rounded-lg p-4 space-y-2">
        <div className="inline-flex items-center justify-center p-2 rounded-lg bg-green-100">
          <CircleCheckBig size={30} className="text-green-500" />
        </div>
        <h2 className="text-3xl">01</h2>
        <p>Completed</p>
      </div>
      <div className="border rounded-lg p-4 space-y-2">
        <div className="inline-flex items-center justify-center p-2 rounded-lg bg-yellow-100">
          <Clock2 size={30} className="text-yellow-500" />
        </div>
        <h2 className="text-3xl">01</h2>
        <p>Pending</p>
      </div>
      <div className="border rounded-lg p-4 space-y-2">
        <div className="inline-flex items-center justify-center p-2 rounded-lg bg-purple-100">
          <ChartLine size={30} className="text-purple-500" />
        </div>
        <h2 className="text-3xl">01</h2>
        <p>Completion Rate</p>
      </div>
    </div>
  );
};

export default Analysis;
