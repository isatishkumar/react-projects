import logo from './logo.svg';
import './App.css';
import TabsForm from './components/TabsForm';
import { UserProvider, useUser } from './components/User-context';
import { ThemeProvider } from './components/ThemeContext';
import { lazy, Suspense } from 'react';

function App() {
  const user = useUser();
  const Tabs = lazy(()=> import('./components/TabsForm'));
  return (
    <>
    <ThemeProvider>
      <Suspense>
     <Tabs/>
      </Suspense>
    </ThemeProvider>
    </>
  );
}

export default App;
