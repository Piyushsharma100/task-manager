import { useContext, useState, useMemo, useEffect } from 'react';
import TaskItem from './TaskItem';
import { TaskContext } from '../context/TaskContextValue';

const tabs = [
  { label: 'All', value: 'all' },
  { label: 'Completed', value: 'completed' },
  { label: 'Pending', value: 'pending' },
];

export default function TaskList() {
  const { tasks } = useContext(TaskContext);
  const [filter, setFilter] = useState<'all' | 'completed' | 'pending'>('all');

 const [theme, setTheme] = useState(document.body.className);

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setTheme(document.body.className);
    });
    observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);
 const filteredTasks = useMemo(() => {
    if (filter === 'completed') return tasks.filter((t) => t.completed);
    if (filter === 'pending') return tasks.filter((t) => !t.completed);
    return tasks;
  }, [tasks, filter]); 

  return (
    <div>
      <div
        className="filter-tabs"
        style={{
          display: 'flex',
          marginBottom: '1rem',
        }}
      >
        {tabs.map((tab) => (
          <button
            key={tab.value}
            onClick={() => setFilter(tab.value as 'all' | 'completed' | 'pending')}
            style={{
              flex: 1,
              padding: '10px 0',
              background: 'none',
              border: 'none',
              borderBottom: filter === tab.value ? '3px solid #1976d2' : '3px solid transparent',
color: filter === tab.value
  ? '#1976d2'
  : theme === 'dark'
    ? '#fff'
    : '#222',            
              fontWeight: filter === tab.value ? 'bold' : 'normal',
              cursor: 'pointer',
              outline: 'none',
              transition: 'border-bottom 0.2s, color 0.2s',
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div
        className="task-list"
        style={{
          overflowY: 'auto',
          maxHeight: '50vh',
          minHeight: 0,
          width: '100%',
          paddingBottom: '2rem',
      marginTop: '0.5rem',
          
        }}
      >
      {[...filteredTasks].reverse().map((task) => (
    <TaskItem key={task.id} task={task} />
  ))}
      </div>
    </div>
  );
}