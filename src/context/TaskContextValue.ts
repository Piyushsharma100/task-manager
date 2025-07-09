import { createContext } from 'react';
import type { Task } from '../types/Task';

export interface TaskContextType {
  tasks: Task[];
  addTask: (task: string) => void;
  deleteTask: (id: number) => void;
  toggleTask: (id: number) => void;
}

export const TaskContext = createContext<TaskContextType>({} as TaskContextType);