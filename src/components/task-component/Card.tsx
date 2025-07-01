import { Calendar, Clock1, Edit, Trash2 } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";

const Card = () => {
  return (
    <div className="border p-4 rounded-lg space-y-2">
      <h1 className="flex items-center gap-2">        
        <Checkbox id="task-1" className="w-4 h-4"/>
        <label htmlFor="task-1" className="text-lg font-semibold">Task 1</label>
      </h1>

      <p>details</p>
      <div className="flex items-center gap-2">
        <div className="inline-flex items-center gap-2 text-sm bg-black text-white px-2 py-1 rounded-full">
          <Clock1 size={14} />
          <p>Pending</p>
        </div>
        <div className="inline-flex items-center gap-2 text-sm border px-2 py-1 rounded-full">
          <Calendar size={14} />
          <p>2025-01-01</p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <Button variant="outline" className="text-sm">
          Suggest subtask
        </Button>
        <Button variant="outline" className="text-sm">
          <Edit size={14} />
          Edit
        </Button>
        <Button variant="outline" className="text-sm">
          <Trash2 size={14} />
          Delete
        </Button>
      </div>
    </div>
  );
};

export default Card;
