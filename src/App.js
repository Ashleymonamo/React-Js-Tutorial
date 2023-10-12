import './App.css';
//import Header from './Header'
import NavBar from './Components/Navbar'
import { Footer } from './Components/Footer';
import { Home } from './Pages/Home/Home';
import { Login } from './Pages/Login/Login';
import {Routes,Route} from 'react-router-dom';
import { About } from './Pages/About';


export default function App() {
  return(
    <>
<NavBar />

<Routes>
<Route path='/' element={<Home />} />
<Route path='/Login' element={<Login />} />
<Route path='/About' element={<About />} /> 




</Routes>

<Footer />

</>
  );
  
}
