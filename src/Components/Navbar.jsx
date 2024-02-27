// eslint-disable-next-line no-unused-vars
import React, { useRef } from 'react';
import { useEffect, useState } from 'react';
import axios from './api.jsx';

//icons-------
import { FaSearch } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {    
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const searchField = useRef(null);

  const handleSubmit = (event)=>{
    event.preventDefault();
    console.log(searchField.current.value);
  }

  async function getSearching() {
    try {
      const res = await axios.get(`/search/photos?query=nature&page=1&per_page=20`);
      console.log(res.data);
    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    getSearching();
  }, [])
  


  return (
    <>
    <header className="fixed z-50 w-full bg-gradient-to-r from-indigo-600 to-sky-400 shadow-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-2 gap-1 lg:px-8" aria-label="Global">

        <div className="flex">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Posteriod</span>
            <span className="font-semibold text-xl">Posteroid</span>
          </a>
        </div>

        

        <div className="w-96 items-center border-2 border-slate-300 bg-slate-100 px-4 py-1 rounded-md hover:shadow-lg focus-within:shadow-lg">
            <form className='flex gap-1 items-center justify-center' onSubmit={handleSubmit}>
              <input className="focus-within:outline-none bg-transparent w-full" type="search" placeholder="search" ref={searchField} />
              <button type="submit">
                <FaSearch/>
              </button>
            </form>
            
          </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <FaBars className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        <div className="hidden lg:flex lg:gap-x-12 lg:items-center">
          <a to="/" className="text-sm font-semibold leading-6 text-gray-900">
            Home
          </a>
          <a to="/locations" className="text-sm font-semibold leading-6 text-gray-900">
            Locations
          </a>
          <a to="/about" className="text-sm font-semibold leading-6 text-gray-900">
            Login
          </a>
        </div>        
      </nav>

      {mobileMenuOpen && 
      <div className="lg:hidden">
        <div className="fixed inset-0 z-10" />
        <div className="fixed inset-y-0 right-0 z-10 w-full h-screen overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 shadow-xl sm:rounded-l-md">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Posteroid</span>
              <span className="font-medium text-xl">Posteroid</span>
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <IoMdClose className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">                
                <a
                  to="/"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Home
                </a>
                <a
                  to="/locations"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Locations
                </a>
                
                <a
                  to="/about"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  About
                </a>
              </div> 
            </div>
          </div>
        </div>
      </div>
      }
    </header>
    </>
  )
}

export default Navbar