import { Calendar, Check, Clock1, Edit, Trash2, X } from "lucide-react";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import { cn } from "@/lib/utils";
import Modal from "../ui/Modal";
import { Input } from "../ui/input";
import { Task } from "../types/task";

interface CardProps {
  task: Task;
  onEdit: (task: Task) => void;
  onDelete: (id: string) => void;
}

const Card = ({ task, onEdit, onDelete }: CardProps) => {
  const [completedTasks, setCompletedTasks] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [subtasks, setSubtasks] = useState<string[]>([]);
  const [subtaskLoading, setSubtaskLoading] = useState(false);
  const [subtaskError, setSubtaskError] = useState<string | null>(null);
  const [newSubtask, setNewSubtask] = useState("");
  const [editName, setEditName] = useState(task.name);
  const [editDescription, setEditDescription] = useState(task.description);

  const taskName = isEditOpen ? editName : task.name;
  const taskDescription = isEditOpen ? editDescription : task.description;

  const handleSuggestSubtasks = async () => {
    setSubtaskLoading(true);
    setSubtaskError(null);
    try {
      const res = await fetch("/api/suggest-subtasks", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ task: taskName, description: taskDescription }),
      });
      const data = await res.json();
      if (data.subtasks) {
        setSubtasks(data.subtasks);
      } else {
        setSubtaskError(data.error || "Failed to get subtasks");
      }
    } catch (err) {
      console.log(err);
      setSubtaskError("Failed to get subtasks");
    } finally {
      setSubtaskLoading(false);
    }
  };

  const handleAddSubtask = () => {
    if (newSubtask.trim()) {
      setSubtasks((prev) => [...prev, newSubtask.trim()]);
      setNewSubtask("");
    }
  };

  const handleEditConfirm = () => {
    onEdit({ ...task, name: editName, description: editDescription });
    setIsEditOpen(false);
  };

  const handleDeleteConfirm = () => {
    onDelete(task.id);
    setIsOpen(false);
  };

  return (
    <div
      className={cn(
        "border p-4 rounded-lg space-y-2",
        completedTasks && "bg-emerald-500/10"
      )}
    >
      <h1 className="flex items-center gap-2">
        <Checkbox
          id={`task-${task.name}`}
          className="w-4 h-4"
          checked={completedTasks}
          onCheckedChange={(checked) => {
            setCompletedTasks(checked === "indeterminate" ? false : checked);
            onEdit({
              ...task,
              completed: checked === "indeterminate" ? false : checked,
            });
          }}
          disabled={isEditOpen}
        />
        <label
          htmlFor={`task-${task.name}`}
          className={cn(
            "text-lg font-semibold",
            completedTasks && "line-through text-gray-500"
          )}
        >
          {isEditOpen ? (
            <Input
              type="text"
              value={editName}
              onChange={(e) => setEditName(e.target.value)}
            />
          ) : (
            task.name
          )}
        </label>
      </h1>

      <p
        className={cn(
          "text-sm",
          completedTasks && "line-through text-gray-500"
        )}
      >
        {isEditOpen ? (
          <Input
            type="text"
            value={editDescription}
            onChange={(e) => setEditDescription(e.target.value)}
          />
        ) : (
          task.description || "No details"
        )}
      </p>

      {subtasks.length > 0 && (
        <div className="mt-2 ml-4">
          <h2 className="text-sm font-semibold mb-1">Suggested Subtasks:</h2>
          <ul className="list-disc pl-5">
            {subtasks.length > 0 ? (
              subtasks.map((sub, idx) => (
                <li key={idx} className="text-sm">
                  {sub}
                </li>
              ))
            ) : (
              <li className="text-sm">No subtasks</li>
            )}
          </ul>
        </div>
      )}
      {subtaskError && (
        <div className="text-red-500 text-xs mt-1">{subtaskError}</div>
      )}

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
          <p>
            {task.date ? new Date(task.date).toLocaleDateString() : "No date"}
          </p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        {isEditOpen ? (
          <div className="flex items-center gap-2  justify-end">
            <Button
              className="text-sm bg-emerald-600"
              onClick={handleEditConfirm}
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
            <Button
              variant="outline"
              className="text-sm"
              onClick={handleSuggestSubtasks}
              disabled={
                subtaskLoading ||
                completedTasks ||
                isEditOpen ||
                subtasks.length >= 3 ||
                task.name.length === 0 ||
                task.description.length === 0
              }
            >
              {subtaskLoading ? "Suggesting..." : "Suggest subtask"}
            </Button>
            <Button
              variant="outline"
              className="text-sm"
              onClick={() => setIsEditOpen(true)}
              disabled={completedTasks}
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
          <Button onClick={handleDeleteConfirm}>Delete</Button>
        </div>
      </Modal>
    </div>
  );
};

export default Card;
