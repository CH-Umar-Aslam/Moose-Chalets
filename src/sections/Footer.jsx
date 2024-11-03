import React from "react";
import Image from "next/image";
import { IoLocationSharp } from "react-icons/io5";
import { CgMail } from "react-icons/cg";
import { FaPhoneAlt } from "react-icons/fa";
import { TiSocialFacebook } from "react-icons/ti";
import { SlSocialInstagram } from "react-icons/sl";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  // 2297555a-df5e-4fa7-bca1-db8d82781251
  //  b4a88e54-d1b9-4347-9fbe-4da3e31a9fd6

  return (
    <div
      id="footer"
      className="relative  w-full text-white"
      style={{
        backgroundImage: `url('/assets/image.png')`, // Directly reference the image path
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay to control opacity of content while keeping the background image fully visible */}
      <div className="bg-[#123a1a]  opacity-90 py-16 px-6 md:px-12 flex flex-col md:flex-row justify-between space-y-8 md:space-y-0">
        {/* About Section */}
        <div className="flex-1">
          <h2 className="text-lg font-semibold  border-l-[7px] p-[10px] border-[#19F745]">
            Stunning Valley Views
          </h2>
          <p className="mt-4 ml-2 text-sm">
            Modern amenities and exceptional service, all designed to offer you
            a peaceful and memorable stay in the heart of nature.
          </p>
          <div className="mt-6 flex text-xl space-x-4 ml-2">
            <TiSocialFacebook />
            <SlSocialInstagram />
            <FaWhatsapp />
          </div>
        </div>

        {/* Quick Links Section */}
        <div className="flex-1">
          <h2 className="text-lg border-l-[7px] p-[10px] border-[#19F745] font-semibold">
            Quick Links
          </h2>
          <ul className="mt-4 ml-2 space-y-2 text-sm">
            <li>Home</li>
            <li>Rooms</li>
            <li>Services</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* Contact Information Section */}
        <div className="flex-1">
          <h2 className="text-lg font-semibold  border-l-[7px] p-[10px] border-[#19F745]">
            Contact Information
          </h2>
          <ul className="mt-4 ml-2 space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <FaPhoneAlt className="text-lg" /> +92-311-1122321
            </li>
            <li className="flex items-center gap-2">
              <CgMail className="text-lg" /> hunza.valley@gmail.com
            </li>
            <li className="flex items-center gap-2">
              <IoLocationSharp className="text-lg" /> Bungalow no. 04, Tulsa
              Road, Hunza Valley, 46602
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-[#123a1a] border-t-2  opacity-95 text-center py-6 text-sm">
        Copyright © 2024 Moose Chalet. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
