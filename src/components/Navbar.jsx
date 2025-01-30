import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
        <div className="nav px-5 mx-20 h-[50px] flex justify-between items-center bg-slate-500 max-sm:mx-1 ">
            <div className="logo">Todo-Logo</div>
            <ul className="w-1/4 flex justify-between max-sm:flex-col">
               
                <li><NavLink to='/' >Home</NavLink> </li>
                <li><NavLink to='/contact' >Contact</NavLink> </li>
              
            </ul>
        </div>
    </div>
  );
}

export default Navbar;
