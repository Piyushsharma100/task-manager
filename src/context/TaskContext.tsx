import { useCallback, useMemo } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import type { Task } from '../types/Task';
import { TaskContext } from './TaskContextValue';
 

 

export function TaskProvider({ children }: { children: React.ReactNode }) {
  const [tasks, setTasks] = useLocalStorage<Task[]>('tasks', []);
 
  const addTask = useCallback((task: string) => {
    if (!task.trim()) return;
    setTasks((prev) => [...prev, { id: Date.now(), text: task, completed: false }]);
  }, [setTasks]);
 
  const deleteTask = useCallback((id: number) => {
setTasks((prev) => prev.filter((task) => task.id !== id));
  }, [setTasks]);
 
  const toggleTask = useCallback((id: number) => {
setTasks((prev) => prev.map((task) => task.id === id ? { ...task, completed: !task.completed } : task));
  }, [setTasks]);
 
  const value = useMemo(() => ({ tasks, addTask, deleteTask, toggleTask }), [tasks, addTask, deleteTask, toggleTask]);
 
  return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>;
}
 