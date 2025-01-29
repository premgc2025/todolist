import React from 'react';

const Navbar = () => {
  return (
    <div>
        <div className="nav px-5 mx-20 h-[50px] flex justify-between items-center bg-slate-500 ">
            <div className="logo">Todo-Logo</div>
            <ul className="w-1/4 flex justify-between fontpoppins">
                <li>Home</li>
                <li>Contact</li>
            </ul>
        </div>
    </div>
  );
}

export default Navbar;
