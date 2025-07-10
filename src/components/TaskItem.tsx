import { memo, useContext } from 'react';
import type { Task } from '../types/Task';
import { TaskContext } from '../context/TaskContextValue';
import DeleteButton from './DeleteButton';

 
const TaskItem = memo(({ task }: { task: Task }) => {
  const { deleteTask, toggleTask } = useContext(TaskContext);
 
  return (
    <div className={`task-item ${task.completed ? 'completed' : ''}`}>
<span onClick={()=> toggleTask(task.id)}>{task.text}</span>
<DeleteButton onClick={() => deleteTask(task.id)} />
    </div>
  );
});
 
export default TaskItem;