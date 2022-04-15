
import './App.css';
import Main from './components/Main'
import Login from './components/login/Login'
import Register from './components/register/Register'
import {BrowserRouter,Routes,Route,} from "react-router-dom";

function App() {
  return (
   <>
   <BrowserRouter>
   <Routes>
    <Route path='/home' element={<Main/>}/>
    <Route path='' element={<Login/>}/>
    <Route path='login' element={<Login/>}/>
    <Route path='signup' element={<Register/>}/>
  </Routes>
  </BrowserRouter>
  </>
  );
}

export default App;
