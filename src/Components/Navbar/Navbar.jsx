import React from 'react';
import git from '../../assets/git.png'
import { Link, NavLink } from 'react-router';
import  './nav.css'

const Navbar = () => {
    const links=<>
    
    <NavLink to='/'><li><a>Home</a></li></NavLink>
    <NavLink to='/apps'><li><a>Apps</a></li></NavLink>
    <NavLink to='/installation'> <li><a>Installation</a></li></NavLink>
    
    </>
    return (
        <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow font-semibold">
       {
        links
       }
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">Appify.Io</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 font-semibold">
      {
        links
      }
    </ul>
  </div>
  <div className="navbar-end">
    <a href='https://github.com/dashboard' target='_blank' className="btn w-[145px] text-white bg-linear-to-r from-[#632EE3] to-[#9F62F2]">
        <div className='flex gap-3'>
            <img src={git} alt="" />
            <p>Contribute</p>
        </div>
    </a>
  </div>
</div>
    );
};

export default Navbar;