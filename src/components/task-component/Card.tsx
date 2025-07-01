import { Calendar, Check, Clock1, Edit, Save, Trash2, X } from "lucide-react";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import { cn } from "@/lib/utils";
import Modal from "../ui/Modal";
import { Input } from "../ui/input";

const Card = () => {
  const [completedTasks, setCompletedTasks] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  return (
    <div
      className={cn(
        "border p-4 rounded-lg space-y-2",
        completedTasks && "bg-emerald-500/10"
      )}
    >
      <h1 className="flex items-center gap-2">
        <Checkbox
          id="task-1"
          className="w-4 h-4"
          checked={completedTasks}
          onCheckedChange={(checked) =>
            setCompletedTasks(checked === "indeterminate" ? false : checked)
          }
          disabled={isEditOpen}
        />
        <label
          htmlFor="task-1"
          className={cn(
            "text-lg font-semibold",
            completedTasks && "line-through text-gray-500"
          )}
        >
          {isEditOpen ? (
            <Input type="text" placeholder="Task Name" />
          ) : (
            "Task 1"
          )}
        </label>
      </h1>

      <p
        className={cn(
          "text-sm",
          completedTasks && "line-through text-gray-500"
        )}
      >
        {isEditOpen ? <Input type="text" placeholder="Task Name" /> : "details"}
      </p>
      <div className="flex items-center gap-2">
        {completedTasks ? (
          <div className="inline-flex items-center gap-2 text-sm bg-emerald-500 text-white px-2 py-1 rounded-full">
            <Check size={14} />
            <p>Completed</p>
          </div>
        ) : (
          <div className="inline-flex items-center gap-2 text-sm bg-black text-white px-2 py-1 rounded-full">
            <Clock1 size={14} />
            <p>Pending</p>
          </div>
        )}
        <div className="inline-flex items-center gap-2 text-sm border px-2 py-1 rounded-full border-gray-300">
          <Calendar size={14} />
          <p>2025-01-01</p>
        </div>
      </div>
      <div className="flex items-center gap-2 justify-end">
        {isEditOpen ? (
          <div className="flex items-center gap-2">
            <Button
              className="text-sm bg-emerald-600"
              onClick={() => setIsEditOpen(false)}
            >
              <Check />
            </Button>
            <Button
              className="text-sm bg-red-600"
              onClick={() => setIsEditOpen(false)}
            >
              <X />
            </Button>
          </div>
        ) : (
          <>
            <Button variant="outline" className="text-sm">
              Suggest subtask
            </Button>
            <Button
              variant="outline"
              className="text-sm"
              onClick={() => setIsEditOpen(true)}
            >
              <Edit size={14} />
            </Button>
            <Button
              onClick={() => setIsOpen(true)}
              variant="outline"
              className="text-sm text-red-500"
            >
              <Trash2 size={14} />
            </Button>
          </>
        )}
      </div>
      <Modal isOpen={isOpen} title="Add Task" onClose={() => setIsOpen(false)}>
        <h1>Do you want to delete this task?</h1>
        <div className="flex justify-end gap-2">
          <Button variant="outline" onClick={() => setIsOpen(false)}>
            Cancel
          </Button>
          <Button>Delete</Button>
        </div>
      </Modal>
    </div>
  );
};

export default Card;
