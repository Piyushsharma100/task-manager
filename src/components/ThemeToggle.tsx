import { useEffect, useState } from 'react';
 
export default function ThemeToggle() {
  const [theme, setTheme] = useState<'light' | 'dark'>(
    (localStorage.getItem('theme') as 'light' | 'dark') || 'light'
  );
 
  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);
 
  return (
    <button onClick={() => setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))}>
      {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
    </button>
  );
}