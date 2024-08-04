import React, { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  function dodown(){
    const intro  = document.querySelector(".intro");
    setIsMenuOpen(!isMenuOpen);
    
    // intro.style.backgroundColor  = `white`;
  }

  return (
    <header className="md:bg-transparent text-white shadow-lg font-bold z-20">
      <div className="container mx-auto px-7 py-6 lg:px-40 flex items-center justify-between">
      
        <div className="text-3xl font-black">
          <a href="/" className="hover:text-gray-400">
            ADH
          </a>
        </div>

        <nav className="hidden md:flex space-x-5 items-center">
          <a href="/" className="hover:text-gray-400">
            Home
          </a>
          <a href="/" className="hover:text-gray-400">
            Home
          </a>
          <a href="/" className="hover:text-gray-400">
            Home
          </a>
          <a href="/about" className="hover:text-gray-400">
            About
          </a>
          <a href="/services" className="hover:text-gray-400">
            Services
          </a>
          <button className="bg-black text-black rounded-md p-3 transition ease-in-out delay-150 bg-white text-[rgb(0,0,0)] hover:bg-black hover:text-white hover:duration-300 border-2 border-transparent hover:border-white ">
            Contact
          </button>
        </nav>

        <button
          onClick={() => dodown()}
          className="md:hidden flex items-center p-2"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      <div 
        className= {`md:hidden ${isMenuOpen ? "block" : "hidden"} bg-transparent z-30`}
      >
        <nav className="px-4 py-3">
        <a href="/" className="block py-2 text-white text-center hover:bg-gray-700">
            Home
          </a>
          <a href="/" className="block py-2 text-white  text-center hover:bg-gray-700">
            Home
          </a>
          <a href="/" className="block py-2 text-white text-center hover:bg-gray-700">
            Home
          </a>
          <a href="/about" className="block py-2 text-white text-center  hover:bg-gray-700">
            About
          </a>
          <a
            href="/services"
            className="block py-2 text-white text-center  hover:bg-gray-700"
          >
            Services
          </a>
          <a
            href="/contact"
            className="block py-2 text-white text-center hover:bg-gray-700"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
