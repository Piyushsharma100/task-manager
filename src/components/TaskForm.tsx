import { useContext, useState } from 'react';
import { TaskContext } from '../context/TaskContextValue';
import '../styles/main.css';
 
export default function TaskForm() {
  const [input, setInput] = useState('');
  const { addTask } = useContext(TaskContext);
 
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addTask(input);
    setInput('');
  };
 
  return (
<form
  onSubmit={handleSubmit}
  className="task-form"
  style={{
    width: '96%',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
    alignItems: 'stretch',
    justifyContent: 'center',
    padding: '2%',
  }}
>
  <input
    type="text"
    value={input}
    onChange={(e) => setInput(e.target.value)}
    maxLength={60}
    placeholder="Add a new task"
    style={{
      padding: '10px',
      borderRadius: '4px',
      border: '1px solid #ccc',
      width: '100%',
      boxSizing: 'border-box',
      background: '#fff',
    color: document.body.className === 'dark' ? '#222' : '#222',
   textAlign: 'center' }}
  />
  <button
    type="submit"
    disabled={!input.trim()}
  
style={{
    width: '50%',
    alignSelf: 'center',
    padding: '6px',     
    borderRadius: '4px',
    boxSizing: 'border-box',
    fontSize: '0.9rem',   
  }}
  >
    Add
  </button>
</form>
  );
}