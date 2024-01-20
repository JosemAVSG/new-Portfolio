import react ,{ useState,useEffect } from 'react'
import Acerca from './pages/Acerca';
import Home from  './pages/Home';
import { BrowserRouter as Router, Routes, Route } from'react-router-dom';
import Error404 from './pages/Error404';
import Contacto from './pages/Contacto';
import Navigation from './components/Nav';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from './components/Footer';


function App() {

  return (
   
    <div>
       <Router>
     
        <Navigation></Navigation>
        <Routes >
          <Route exact path='/' element={<Home/>} />
          <Route exact path='/acerca' element={<Acerca/>} />
          <Route exact path='/contacto' element={<Contacto/>} />
          <Route path='*' element={<Error404/>} />
        </Routes>
        <Footer></Footer>
      </Router>
      
    
    </div>
  )
}

export default App
