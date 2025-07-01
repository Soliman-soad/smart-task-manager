import { PackageCheck, Plus } from "lucide-react";
import React, { useState } from "react";
import { Button } from "../ui/button";
import Form from "../task-component/Form";
import Modal from "../ui/Modal";

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center mt-20">
      <h1 className="md:text-4xl text-2xl font-bold text-center">
        <PackageCheck size={44} className="inline mr-3" />
        Smart Task Manager
      </h1>
      <h4 className="md:text-xl text-center">
        Manage your tasks with AI-powered subtask suggestions
      </h4>
      <div className="mt-10">
        <Button className="text-xl" onClick={() => setIsOpen(true)}>
          <Plus strokeWidth={4} size={20} />
          Add task
        </Button>
      </div>
      <Modal isOpen={isOpen} title="Add Task" onClose={() => setIsOpen(false)}>
        <Form onCancel={() => setIsOpen(false)} />
      </Modal>
    </div>
  );
};

export default Hero;
