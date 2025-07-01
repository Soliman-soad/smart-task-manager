import React from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { DatePicker } from "../ui/datepicker";

const Form = ({ onCancel }: { onCancel: () => void }) => {
  return (
    <div className="space-y-5">
      <div>
        <label className="text-sm font-medium mb-1" htmlFor="taskName">
          Task Name
        </label>
        <Input type="text" placeholder="Task Name" />
      </div>
      <div>
        <label className="text-sm font-medium mb-1" htmlFor="taskDescription">
          Task Description
        </label>
        <Textarea placeholder="Task Description" />
      </div>
      <DatePicker label="Task Date" name="taskDate" placeholder="Pick a date" />
      <div className="flex justify-end gap-2">
        <Button variant="outline" onClick={onCancel}>
          Cancel
        </Button>
        <Button>Add Task</Button>
      </div>
    </div>
  );
};

export default Form;
