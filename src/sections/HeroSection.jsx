"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Import Swiper styles
import "swiper/css/navigation"; // Import Navigation styles
import "swiper/css/pagination"; // Import Pagination styles
import { Navigation, Pagination, Autoplay } from "swiper/modules"; // Import necessary modules
import { useEffect } from "react";
import Image from "next/image";

const images = [
    { src: "/assets/image1.jpeg", title: "Welcome to Moose Chalets", description: "Experience the beauty of nature and luxury in one place." },
    { src: "/assets/image5.jpeg", title: "Luxurious Rooms with Stunning Views", description: "Discover the rich heritage and traditions." },
 
    { src: "/assets/image2.jpeg", title: "Relax in Comfort", description: "Enjoy our well-furnished rooms with stunning views." },
    { src: "/assets/image3.jpeg", title: "Explore the Outdoors", description: "Adventure awaits with hiking, biking, and more." },
    { src: "/assets/image4.jpeg", title: "Unwind in Nature", description: "Take a break and enjoy serene surroundings." },
    { src: "/assets/image10.jpeg", title: "Sunset Views ", description: "Witness stunning sunsets from your room" },
    { src: "/assets/image9.jpeg", title: "Explore the Outdoors", description: "Savor delicious meals with stunning landscapes." },
    { src: "/assets/image7.jpeg", title: "Dine with a View", description: "Create unforgettable memories at Mossess Chalets." },
    { src: "/assets/image11.jpeg", title: "Peaceful Escape", description: "Relax in quiet, tranquil settings." },
];

export default function HeroSection() {
    useEffect(() => {
        // Additional Swiper setup can be done here if needed
    }, []);

    return (
        <div id="hero-section" className="relative w-full h-screen">
            <Swiper
                modules={[ Pagination, Autoplay,Navigation]} // Include Autoplay module
                navigation={{
                    prevEl: ".swiper-button-prev",
                    nextEl: ".swiper-button-next",
                }}
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000 }} // Set autoplay delay
                className="h-full"
            >
                {images.map((image, index) => (
                    <SwiperSlide key={index} className="relative h-full">
                        <Image
                            width={3920} // Use a higher width for clarity
                            height={1080} // Use a higher height for clarity
                            src={image.src}
                            alt={image.title}
                            className="w-full h-full object-cover"
                            loading="lazy" // Lazy loading
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col  justify-center sm:items-center text-white p-4">
                            <h2 className="text-3xl sm:text-4xl  font-bold mb-2 t">{image.title}</h2>
                            <p className="text-lg">{image.description}</p>
                        </div>
                    </SwiperSlide>
                ))}
                <div className="sm:block hidden">
                <div className="swiper-button-prev " /> 
                <div className="swiper-button-next " /> 
                </div>
            </Swiper>
        </div>
    );
}