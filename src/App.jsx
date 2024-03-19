import { useState } from 'react'
import { Route, Routes, BrowserRouter  } from "react-router-dom";
import Header from './components/Header'
import Contacto from './components/Contacto';
import EnviaTuIa from './components/EnviaTuIa';
import Home from './components/Home';
import NoEncontrado from './components/NoEncontrado';
import Footer from './components/Footer';
import Seo from './components/Seo';

function App() {
  

  return (
    <>
     <Seo 
      titulo="Gran Directorio de Aps IA | +100 aplicaciones"
      descripcion="El más grande directorio de aplicaciones con inteligencia artificial, para cualquier proyecto"
    />
    <BrowserRouter>
      <Header/>
       
      <Routes>
        <Route exact path="/" element={<Home/>}/>  
        <Route exact path="/enviatuia" element={<EnviaTuIa/>}/>            
        <Route exact path="/contacto" element={<Contacto/>}/> 
        <Route exact path="*" element={<NoEncontrado/>}/>      
      </Routes> 
    <Footer/> 
    </BrowserRouter>
    </>
  )
}

export default App
