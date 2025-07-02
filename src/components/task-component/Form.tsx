import React, { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Task } from "../types/task";
import { DatePicker } from "../ui/datepicker";

const Form = ({
  onCancel,
  onAddTask,
}: {
  onCancel: () => void;
  onAddTask: (task: Task) => void;
}) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState<Date | undefined>(undefined);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;
    onAddTask({ id: Date.now().toString(), name, description, date: date ? date.toISOString() : "" });
    setName("");
    setDescription("");
    setDate(undefined);
    onCancel();
  };

  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      <div>
        <label className="text-sm font-medium mb-1" htmlFor="taskName">
          Task Name
        </label>
        <Input
          type="text"
          placeholder="Task Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label className="text-sm font-medium mb-1" htmlFor="taskDescription">
          Task Description
        </label>
        <Textarea
          placeholder="Task Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div>
        <DatePicker
          label="Task Date"
          name="taskDate"
          placeholder="Task Date"
          value={date ? new Date(date) : undefined}
          onChange={(date) => setDate(date)}
        />
      </div>
      <div className="flex justify-end gap-2">
        <Button variant="outline" type="button" onClick={onCancel}>
          Cancel
        </Button>
        <Button type="submit">Add Task</Button>
      </div>
    </form>
  );
};

export default Form;
