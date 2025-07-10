import { useEffect, useState } from 'react';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';

 
export default function ThemeToggle() {
  const [theme, setTheme] = useState<'light' | 'dark'>(
    (localStorage.getItem('theme') as 'light' | 'dark') || 'light'
  );
 
  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);
 
  return (
    <FormControlLabel
      control={
        <Switch
          checked={theme === 'dark'}
          onChange={() => setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))}
          color="default"
        />
      }
      label={theme === 'light' ? 'Dark Theme' : 'Light Theme'}
    />
  );
}