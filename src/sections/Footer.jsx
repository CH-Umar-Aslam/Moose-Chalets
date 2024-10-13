"use client"
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-[#3B3A2B] text-gray-300 py-6 px-4 sm:px-12">
            <div className="container mx-auto flex flex-col sm:flex-row justify-between items-start">
                <div className="flex flex-col items-start mb-4 sm:mb-0">
                    <h4 className="text-xl font-semibold">Contact Us</h4>
                    <p className="mb-1 ">Moose Chalet Karimabad</p>
                   
                    <p className="">Hunza Valley</p>
                    <p>
                        Email: 
                        <a href="mailto:info@mossesschalets.com" className="text-gray-200 hover:underline ml-1">info@moosechalet.com</a>
                    </p>
                </div>

                <div className="text-xs sm:text-sm sm:text-center mb-4 sm:mb-0">
                    © 2024 Mooese Chalet. All rights reserved.
                </div>

              

                    <div className="flex space-x-4">
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:underline transition duration-300">Facebook</a>
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:underline transition duration-300">Instagram</a>
                    </div>
                </div>
        
        </footer>
    );
}
