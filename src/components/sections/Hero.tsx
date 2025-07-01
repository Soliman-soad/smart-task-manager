import { PackageCheck } from "lucide-react";
import React from "react";

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="md:text-4xl text-2xl font-bold text-center">    
        <PackageCheck size={44} className="inline mr-3"/> 
        Smart Task Manager
      </h1>
      <h4 className="md:text-xl text-center">
        Manage your tasks with AI-powered subtask suggestions
      </h4>
    </div>
  );
};

export default Hero;
