"use client";
import wifiImage from "../../public/assets/wifi.svg";
import securityImage from "../../public/assets/security.svg";
import serviceImage from "../../public/assets/room-service.svg";
import waterImage from "../../public/assets/hot-water.svg";
import Image from "next/image";

export default function Services() {
  return (
    <div className="py-12 md:py-24 bg-sectionBackground px-4 font-Poppins  sm:px-6 lg:px-8">
      <div className="md:text-center max-w-7xl mx-auto">
        <h2 className="text-2xl  md:text-3xl font-extrabold tracking-tight text-heading sm:text-4xl">
          Services and Amenities for Your Comfort
        </h2>
        <p className="mt-4 text-base leading-6 text-paragraph text-justify md:text-center">
          Enjoy 24/7 room service, high-speed Wi-Fi access, high-class security,
          and warm water to ensure your stay is comfortable and convenient.
          Experience exceptional hospitality tailored to meet your every need.
        </p>
      </div>
      <div className=" mt-5 md:mt-12 grid grid-cols-1 gap-y-10 sm:grid-cols-2 sm:gap-x-8 lg:grid-cols-4 lg:gap-10">
        <div className="flex flex-col justify-between p-6  rounded-lg shadow-md">
          <div className="flex items-center justify-center mx-auto mb-5">
            <Image
              src={serviceImage}
              height={40}
              width={40}
              alt="service-image"
              className="w-12 h-12"
              aria-hidden="true"
            />
          </div>
          <h3 className="text-lg font-medium text-center leading-6 text-gray-900">
            24/7 Room Service
          </h3>
          <p className="mt-2 text-sm text-gray-500 text-center">
            Enjoy 24-hour room service with delicious meals and drinks delivered
            right to your door anytime.
          </p>
        </div>
        <div className="flex flex-col justify-between p-6  rounded-lg shadow-md">
          <div className="flex items-center justify-center mx-auto mb-5">
            <Image
              src={wifiImage}
              height={40}
              width={40}
              alt="wifi-image"
              className="w-12 h-12"
              aria-hidden="true"
            />
          </div>
          <h3 className="text-lg font-medium text-center leading-6 text-gray-900">
            Fast & Free Wifi
          </h3>
          <p className="mt-2 text-sm text-gray-500 text-center">
            Stay connected with our fast and free Wi-Fi, available throughout
            the hotel for your convenience.
          </p>
        </div>
        <div className="flex flex-col justify-between p-6  rounded-lg shadow-md">
          <div className="flex items-center justify-center mx-auto mb-5">
            <Image
              src={securityImage}
              height={40}
              width={40}
              alt="security-image"
              className="w-12 h-12"
              aria-hidden="true"
            />
          </div>
          <h3 className="text-lg font-medium text-center leading-6 text-gray-900">
            Hi-Class Security
          </h3>
          <p className="mt-2 text-sm text-gray-500 text-center">
            Experience high-class security for your peace of mind, ensuring a
            safe and secure environment.
          </p>
        </div>
        <div className="flex flex-col justify-between p-6  rounded-lg shadow-md">
          <div className="flex items-center justify-center mx-auto mb-5">
            <Image
              src={waterImage}
              height={40}
              width={40}
              alt="water-image"
              className="w-12 h-12"
              aria-hidden="true"
            />
          </div>
          <h3 className="text-lg font-medium text-center leading-6 text-gray-900">
            Warm Water
          </h3>
          <p className="mt-2 text-sm text-gray-500 text-center">
            Enjoy warm water in your room for a relaxing experience any time you
            need it.
          </p>
        </div>
      </div>
    </div>
  );
}
