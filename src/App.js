import logo from './logo.svg';
import './App.css';
import Home from './component/Home';
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import NavBar from './component/navbar/NavBar';
import Card from './component/navbar/Card';
import Login from './component/navbar/Login'




function App() {
  return (
    
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<NavBar/>}>
      <Route index element={<Home/>}/>
      <Route path='/Card' element={<Card/>}/>
      <Route path='/Login'  element={<Login/>}/>
     

    </Route>
  </Routes>
  </BrowserRouter>
  );
}

export default App;
