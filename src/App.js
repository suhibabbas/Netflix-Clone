import logo from './logo.svg';
import './App.css';
import { Route , Routes } from 'react-router-dom'; //3rd
import Home from './components/Home/Home'
import Navbar from './components/Navbar/Navbar'



function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' exact element={<Home/>} />
      </Routes>

    </div>
  );
}

export default App;
