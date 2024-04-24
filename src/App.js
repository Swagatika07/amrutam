import './App.css';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProfileBanner from './components/ProfileBanner';
import FindDoctor from './components/FindDoctor';
import About from './components/About';

function App() {
const router = createBrowserRouter([
  {
    path: "/",
    element:<><Navbar/><ProfileBanner/></>
  },
  {
    path: "/find-doctors",
    element:<><Navbar/><FindDoctor/></>
  },
  {
    path: "/about-us",
    element:<><Navbar/><About/></>
  }

])
  return (
    <div className='App'>
    <RouterProvider router={router}/>
    </div>
  );
}

export default App;
