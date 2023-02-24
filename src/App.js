import './App.css';
import Navbar from './Components/Navbar';
import About from './Components/SP_Components/About';
import Home from './Components/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Contact from './Components/SP_Components/Contact';


function App() {
  return (
      <>
    <BrowserRouter>
      <Navbar />
     
      <Routes>
      <Route exact path="/" element={  <Home/> }></Route>
      <Route exact path="/About" element={ <About /> }></Route>
      <Route exact path="/Contact" element={ <Contact/> }></Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
