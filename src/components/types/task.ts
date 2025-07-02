export interface Task {
    id: string;
    name: string;
    description: string;
    date: string;
    completed: boolean;
  }

  export interface TaskListProps {
    tasks: Task[];
    onEditTask: (task: Task) => void;
    onDeleteTask: (id: string) => void;
  }