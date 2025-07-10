import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import ThemeToggle from './components/ThemeToggle';
import { TaskProvider } from './context/TaskContext';
import './styles/main.css';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import { Box } from '@mui/material';


function App() {
    const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
   <TaskProvider>
    <div className="app">
      <div className="app-header">
         <div>

          <h1 className="heading">Task Manager</h1>       
          </div>
           <div className="theme-toggle-wrapper">
            <ThemeToggle />
          </div>
        </div>
        
        
    <Grid
  container
  justifyContent={isMobile ? 'center' : 'flex-start'}
  alignItems="flex-start"
  sx={{ minHeight: '60vh', p: '20px' }}
>
 


 <Grid
container
   
  
      component="div"

    sx={{
      border: '2px solid #fff',
      borderRadius: '12px',
      boxSizing: 'border-box',
      background: 'rgba(255,255,255,0.05)',
      display: 'flex',
      flexDirection: 'column',
      height: { xs: '80vh', sm: '80vh', md: '80vh', lg: '80vh' },
      minHeight: 400,
      maxHeight: '100vh',
      overflow: 'hidden',
      width: isMobile ? '100%' : 600,
      p: 0,
    }}
  >
    <Box sx={{ width: '100%', flexShrink: 0 }}>
      <TaskForm />
    </Box>
    <Box
  sx={{
    minHeight: 0,
    width: '96%',
    p: '2%',
    flexGrow: 1,
    overflowY: 'auto', 
  }}
>
      <TaskList />
    </Box>
  </Grid>


</Grid>

      </div>
   </TaskProvider>
  )
}

export default App
