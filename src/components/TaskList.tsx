import { useContext, useState, useMemo } from 'react';

import TaskItem from './TaskItem';
import { TaskContext } from '../context/TaskContextValue';
 
export default function TaskList() {
  const { tasks } = useContext(TaskContext);
  const [filter, setFilter] = useState<'all' | 'completed' | 'pending'>('all');
 
  const filteredTasks = useMemo(() => {
    if (filter === 'completed') return tasks.filter((t) => t.completed);
    if (filter === 'pending') return tasks.filter((t) => !t.completed);
    return tasks;
  }, [tasks, filter]);
 
  return (
    <div>
      <div className="filter-buttons">
        <button onClick={() => setFilter('all')}>All</button>
        <button onClick={() => setFilter('completed')}>Completed</button>
        <button onClick={() => setFilter('pending')}>Pending</button>
      </div>
      <div className="task-list">
        {filteredTasks.map((task) => (
<TaskItem key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
}