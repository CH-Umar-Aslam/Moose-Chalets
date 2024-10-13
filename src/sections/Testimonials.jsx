"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Import Swiper styles
import "swiper/css/navigation"; // Import Navigation styles
import "swiper/css/pagination"; // Import Pagination styles
import { Pagination, Autoplay } from "swiper/modules"; // Import necessary modules
import { FaStar, FaArrowRight } from "react-icons/fa"; // Import stars and arrow icon from react-icons
import Link from "next/link";

const testimonials = [
    {
        src: "/assets/image1.jpeg",
        name: "Ahsan Ilyas",
        feedback: "Great location, just a 2-minute walk to Karimabad market. Beautiful atmosphere and amazing views. Friendly and helpful staff. The hotel is clean, stylish, and spacious with excellent service. Good food, great value for money, and very comfortable rooms. I truly enjoyed my stay and hope to return for a longer visit.",
        date: "1 month ago",
        rating: 5,
    },
    {
        src: "/assets/image2.jpeg",
        name: "Việt Hoàng Phạm",
        feedback: "Magnificent mountain views and very friendly hosts. They prepared Vietnamese ingredients for us to cook. The hotel is new, well-organized, and the rooms are clean.",
        date: "2 months ago",
        rating: 5,
    },
    {
        src: "/assets/image3.jpeg",
        name: "Fatik Owais",
        feedback: "For breathtaking views and a European vibe, this hidden gem is the place to be. Cooperative host and simple, lovely breakfast. Off-season challenges include electricity issues, but it’s still a wonderful place to enjoy Hunza.",
        date: "3 weeks ago",
        rating: 5,
    },
    {
        src: "/assets/image4.jpeg",
        name: "Nikhil Satiani",
        feedback: "Located in a quiet neighborhood, just a 5-10 minute walk from the market. The rooms are well-designed, clean, and have constant electricity and hot water. Amazing views, and Nazir bhai is an excellent host who creates a welcoming atmosphere. 10/10 recommend.",
        date: "1 month ago",
        rating: 5,
    },
    {
        src: "/assets/image5.jpeg",
        name: "Elena Fulgoi",
        feedback: "One of the best places I stayed at. The warmth of the hosts, attention to detail, and the chalet’s quality made my stay memorable. Bonus: stunning views and a playful, intelligent pet.",
        date: "4 weeks ago",
        rating: 5,
    },
];

const StarRating = ({ rating }) => {
    return (
        <div className="flex items-center mb-2">
            {[...Array(5)].map((_, index) => (
                <FaStar key={index} className={`h-5 w-5 ${index < rating ? "text-yellow-500" : "text-gray-400"}`} />
            ))}
        </div>
    );
};

export default function TestimonialSlider() {
    return (
        <div className="pt-10 pb-10 border-t-2" id="testimonials" style={{ backgroundColor: "#52503B" }}>
            <div className="mx-3 sm:mx-16">
                <h2 className="text-xl sm:text-3xl  text-center pt-14 text-white font-bold sm:mb-8">What Our Guests Say</h2>
                <div className="relative">
                    <Swiper
                        modules={[Pagination, Autoplay]}
                        autoplay={{
                            delay: 2000,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true,
                        }}
                        pagination={{ clickable: true }}
                        spaceBetween={15}
                        slidesPerView={1}
                        className="h-full sm:pb-20"
                        breakpoints={{
                            640: {
                                slidesPerView: 1,
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 10,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 20,
                            },
                        }}
                    >
                        {testimonials.map((testimonial, index) => (
                            <SwiperSlide key={index} className="flex flex-col items-center text-center py-6 transition-transform duration-300 hover:scale-105 bg-[#52503B] rounded-lg shadow-lg" style={{ height: '300px' }}>
                                <h3 className="text-lg sm:text-xl font-semibold text-white">{testimonial.name}</h3>
                                <p className="text-gray-300 text-sm p-2">{testimonial.feedback}</p>
                                <div className="flex justify-center">
                                    <StarRating rating={testimonial.rating} />
                                </div>
                                <span className="text-gray-400 text-xs">{testimonial.date}</span>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                {/* View More Button */}
                <div className="flex justify-end mt-6">
                    <Link href="https://www.google.com/maps/place/Moose+Chalet/@36.3279221,74.6614297,17z/data=!4m8!3m7!1s0x38e8a1d8a2cc36d5:0x2d5354c3daa734a5!8m2!3d36.3279178!4d74.6640046!9m1!1b1!16s%2Fg%2F11t86ykpjt?hl=en-GB&entry=ttu&g_ep=EgoyMDI0MTAwOS4wIKXMDSoASAFQAw%3D%3D" > 
                    <button  className="flex items-center text-white bg-yellow-500 hover:bg-yellow-600 font-semibold py-2 px-4 rounded">
                        View More Testimonials <FaArrowRight className="ml-2" />
                    </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
