

import {  Link } from "react-router-dom"
import Logo from '../assets/images/logo.png'
import bg from '../assets/images/bg.jpg'
export const NavigationBar = (props) => {



  const handleMenu = () => {
  
    document.querySelector('#menu').classList.toggle('hidden')
  

  }
  return (

    <>
      <div style={{ backgroundImage: `url(${bg})`, height: "300px"}}>
    <nav
        className="
          flex flex-wrap
          items-center
          justify-between
          w-full
         
          md:py-0
          px-4
          text-lg text-gray-700
        "
      >
       <div>
          <a href="/">
          <img src={Logo} alt="Ecell logo" height="100" width="210" />
          </a>
        </div>
       
         <svg
            xmlns="http://www.w3.org/2000/svg"
            id="menu-button"
            className="h-6 w-6 cursor-pointer md:hidden block"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            onClick={handleMenu}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
       
       <div className="hidden w-full md:flex md:items-center md:w-auto" id="menu">
          <ul
            className="
              pt-4
              text-base text-gray-700
              md:flex
              md:justify-between 
              md:pt-0"
          >
            <li>
              <Link to="/" className="md:p-4 py-2 text-white no-underline block hover:text-purple-400">Home</Link>
            </li>
            <li>
              <Link to="/about" className="md:p-4 py-2 block hover:text-purple-400 text-white no-underline">About</Link>

            </li>
            
            <li>
              <Link to="/notifications" className="md:p-4 py-2 block hover:text-purple-400 text-white no-underline">Notifications</Link>
            </li>
            <li>
              <Link to="/login" className="md:p-4 py-2 block hover:text-purple-400 text-white no-underline">Log In</Link>
            </li>
            
          </ul>
        </div>
        
    </nav>
 
 <h1 className="text-white  text-2xl pl-12 pt-5">{props.heading  }</h1>
  </div>
    </>
  );

}