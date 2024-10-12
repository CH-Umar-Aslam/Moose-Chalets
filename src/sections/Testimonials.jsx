"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Import Swiper styles
import "swiper/css/navigation"; // Import Navigation styles
import "swiper/css/pagination"; // Import Pagination styles
import { Navigation, Pagination } from "swiper/modules"; // Import necessary modules
import Image from "next/image";

const testimonials = [
    {
        src: "/assets/image1.jpeg",
        name: "Alice Johnson",
        feedback: "A perfect escape! The views were breathtaking.",
    },
    {
        src: "/assets/image2.jpeg",
        name: "Bob Smith",
        feedback: "Amazing stay! Luxurious and relaxing.",
    },
    {
        src: "/assets/image3.jpeg",
        name: "Cathy Lee",
        feedback: "Exploring nearby trails was the highlight!",
    },
    {
        src: "/assets/image4.jpeg",
        name: "David Kim",
        feedback: "Serene surroundings made it easy to unwind.",
    },
    {
        src: "/assets/image5.jpeg",
        name: "Ella Brown",
        feedback: "Incredibly welcoming staff made me feel at home.",
    },
];

export default function TestimonialSlider() {
    return (
        <div className="pt-10 pb-10 border-t-2  " id="testimonials" style={{ backgroundColor: '#52503B' }}>
            <div className=" sm:container sm:mx-auto">

           
            <h2 className="text-3xl text-center pt-14 text-white font-bold mb-8">What Our Guests Say</h2>
            <div className="relative">
                <Swiper 
                    modules={[Navigation]}
                    navigation
                   
                    spaceBetween={20} // Space between slides
                    slidesPerView={3} // Default number of slides
                    className="h-full sm:pb-20"
                   
                    breakpoints={{
                        100: {
                            slidesPerView: 1, // 1 slide for mobile
                            spaceBetween: 10, // Space between slides
                        },
                        722: {
                            slidesPerView: 2, // 2 slides for tablet
                            spaceBetween: 10, // Space between slides
                        },
                        1080: {
                            slidesPerView: 3, // 3 slides for desktop
                            spaceBetween: 20, // Space between slides
                        },
                    }}
                >
                    {testimonials.map((testimonial, index) => (
                        <SwiperSlide key={index} className="flex flex-col items-center text-center py-6 border border-white rounded-lg transition-transform duration-300 hover:scale-105">
                            <Image 
                                src={testimonial.src}
                                alt={testimonial.name}
                                width={80}
                                height={80}
                                className="rounded-full aspect-auto object-cover mb-2 mx-auto"
                            />
                            <h3 className="text-xl font-semibold  text-white">{testimonial.name}</h3>
                            <p className="text-gray-300 text-sm p-2 md:text-nowrap">{testimonial.feedback}</p>
                        </SwiperSlide>
                    ))}
                </Swiper>
                {/* Custom Pagination Style */}
              
            </div>
        </div> </div>
    );
}
