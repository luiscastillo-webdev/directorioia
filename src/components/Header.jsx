import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { CiMenuBurger,CiCircleRemove } from "react-icons/ci";
import logo from '../assets/logo.png'

const Header = () => {

   const links = [    
    {
        id:1,
        nombre:"envia tu ia",
        url:"/enviatuia",
    },
    {
        id:2,
        nombre:"contacto",
        url:"/contacto",
    },
   ];

   const [nav,setNav] = useState(false)
    

  return (
    <header className='w-full bg-[#252734]'>
        <div className='flex max-w-screen-lg mx-auto justify-between h-16 items-center'>  
            <NavLink to="/">
                <img src={logo} alt="LOGO" className='p-4 w-[55%]'/> 
            </NavLink>                      
            <ul className='hidden md:flex'>
                {links.map(({id,nombre,url})=>(
                <li key={id}
                    className="px-4 cursor-pointer uppercase text-white hover:scale-125">
                    <NavLink to={url}
                        style={({ isActive  }) => {
                            return {
                            fontWeight: isActive ? "bold" : "",                     
                            borderBottom: isActive ? "solid 2px" : "",                            
                            };
                        }}                        
                        >
                        {nombre}
                    </NavLink>                    
                </li>
                 ))}                
            </ul>
            <div onClick={()=>setNav(!nav)} className='cursor-pointer pr-4 z-10 text-gray-500 md:hidden'>
              {nav ? <CiCircleRemove size={30}/> : <CiMenuBurger size={30}/> }
            </div> 
            {nav && 
            <ul className="flex flex-col justify-center items-center absolute z-999 top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
              {links.map(({id, nombre, url})=>(
                  <li key={id} className="px-4 cursor-pointer capitalize py-6 text-4xl hover:text-white">               
                    <NavLink to={url} onClick={()=>setNav(false)}>{nombre}</NavLink>
                  </li>                
                ))}          
           </ul>           
            
            }                           
        </div>
    </header>
  )
}

export default Header