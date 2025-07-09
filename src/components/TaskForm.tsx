import { useContext, useState } from 'react';
import { TaskContext } from '../context/TaskContextValue';

 
export default function TaskForm() {
  const [input, setInput] = useState('');
  const { addTask } = useContext(TaskContext);
 
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addTask(input);
    setInput('');
  };
 
  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a new task"
      />
      <button type="submit">Add</button>
    </form>
  );
}