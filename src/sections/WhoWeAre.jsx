import Image from "next/image";
import React from "react";
import AboutSection from "../../public/assets/about-section.svg";
const WhoWeAre = () => {
  return (
    <section id="about" className="bg-gray-100 py-12">
      <div className="container mx-auto  px-4 sm:px-4   text-justify md:text-center">
        <h2 className="text-4xl  font-Poppins font-bold mb-6 text-heading">
          Who We Are?
        </h2>
        <p className=" text-base md:text-lg text-paragraph max-w-7xl mx-auto">
          Welcome to our hotel in the breathtaking Hunza Valley, where stunning
          landscapes meet exceptional hospitality. Our passionate team is
          dedicated to providing every guest with a memorable experience and
          personalized service, creating a true home away from home. Nestled
          among majestic mountains, we offer modern amenities while celebrating
          the rich culture of the region. Whether indulging in our exquisite
          cuisine, relaxing in mountain-facing rooms, or exploring local
          attractions, our knowledgeable staff is here to assist you. Join us in
          Hunza Valley for an unforgettable journey that combines natural beauty
          with heartfelt hospitality.
        </p>
        <Image
          className="mt-5"
          src={AboutSection}
          height={1060}
          width={1920}
          alt="hero-section-image"
        />
      </div>
    </section>
  );
};

export default WhoWeAre;
