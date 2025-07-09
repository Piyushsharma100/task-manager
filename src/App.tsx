import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import ThemeToggle from './components/ThemeToggle';
import { TaskProvider } from './context/TaskContext';
import './styles/main.css';

function App() {


  return (
   <TaskProvider>
    <div className="app">
      <h1>Task Manager</h1>
      <ThemeToggle/>
      <TaskForm />
      <TaskList />
      </div>
   </TaskProvider>
  )
}

export default App
