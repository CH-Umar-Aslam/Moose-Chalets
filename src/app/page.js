import ContactForm from '@/sections/Contact'
import Footer from '@/sections/Footer'
import HeroSection from '@/sections/HeroSection'
import Navbar from '@/sections/Navbar'
import Testimonials from '@/sections/Testimonials'
import React from 'react'

function Home() {
  return (
    <div className='bg-[#52503B] '>
       <div className='2xl:container mx-auto'>
       <Navbar/>
        <HeroSection/>
        <Testimonials/>
        <ContactForm/>
        <Footer/>

       </div>

    </div>
  )
}

export default Home