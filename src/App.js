import logo from './logo.svg';
import './App.css';
import { Router, RouterProvider } from 'react-router-dom';
import { router } from './Routs/Routs';

function App() {
  return (
    <div className="">
      <RouterProvider router={router}>

      </RouterProvider>
    </div>
  );
}

export default App;
