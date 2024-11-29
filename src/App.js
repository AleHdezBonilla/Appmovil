 
import {BrowserRouter} from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Login from './Components/Login';
import Profile from './Components/Profile';
import Navbar from './Components/Navbar.jsx';
import Item from './Components/Item.jsx';


function App() {
  return (
   
    <div className="App">
       <BrowserRouter>
      <Navbar />
        <Home/>
        <Login/>
        <Profile/>
        <Item/>
        </BrowserRouter>
    </div>
  );
}

export default App;
