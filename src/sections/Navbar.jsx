"use client";
import { useRef, useState } from "react";
import Link from "next/link";




export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const scrollTo = (id) => {
    const testimonialsSection = document.getElementById(id);
    setIsMenuOpen(false)
  
    if (testimonialsSection) {
        testimonialsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };


  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };
  
  return (
    <nav className="bg-[#3B3A2B] sm:px-8  text-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
        {/* Logo on the left */}
        <Link onClick={(e)=> {
            e.preventDefault(),
            scrollTo("hero-section")}}  href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          {/* <Image src={Logo} height={40} width={40} className="h-8 object-cover" alt="Mossess Chalets Logo" /> */}
          <span className="self-center  text-2xl font-semibold whitespace-nowrap dark:text-white">Moose Chalets</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center justify-center flex-grow space-x-8">
          <Link onClick={(e)=> {
            e.preventDefault(),
            scrollTo("testimonials")}} href="#" className="block py-2 px-3 text-gray-300 rounded hover:bg-[#3B3A2B]">Testimonials</Link>
          <Link href="#"  className="block py-2 px-3 text-gray-300 rounded hover:bg-[#3B3A2B]">Our History</Link>
          <Link onClick={(e)=> {
            e.preventDefault(),
            scrollTo("contact")}} href="#" className="block py-2 px-3 text-gray-300 rounded hover:bg-[#3B3A2B]">Contact</Link>
        </div>

        {/* Book Now Button on the right */}
        <button
          type="button"
          className="hidden md:block text-white bg-blue-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2"
        >
          Book Now
        </button>

        {/* Hamburger button for mobile */}
        <button
          onClick={toggleMenu}
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-900 dark:focus:ring-gray-600"
          aria-controls="navbar-sticky"
          aria-expanded={isMenuOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-10 bg-[#52503B] transition-transform duration-300 transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}>
        <div className="flex flex-col items-start p-4 space-y-2">
          <div className="flex justify-between w-full">
            <Link  onClick={(e)=> {
            e.preventDefault(),
            scrollTo("hero-section")}} href="#" className="text-2xl font-semibold text-white">Mossess Chalets</Link>
            <button
              onClick={toggleMenu}
              className="text-white hover:bg-gray-700 rounded p-2"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <Link onClick={(e)=> {
            e.preventDefault(),
            scrollTo("testimonials")}} href="#" className="block py-2 px-3 text-gray-300 rounded hover:bg-[#3B3A2B] w-full text-left">Testimonials</Link>
          <Link href="#" className="block py-2 px-3 text-gray-300 rounded hover:bg-[#3B3A2B] w-full text-left">Our History</Link>

          <Link onClick={(e)=> {
            e.preventDefault(),
            scrollTo("contact")}} href="#" className="block py-2 px-3 text-gray-300 rounded hover:bg-[#3B3A2B] w-full text-left">Contact</Link>
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 w-full text-center"
          >
            Book Now
          </button>
        </div>
      </div>
    </nav>
  );
}
