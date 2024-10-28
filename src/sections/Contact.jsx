"use client";
import React, { useState } from "react";
import Room2 from "../../public/assets/image4.jpeg";
import Image from "next/image";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [documentNumber, setDocumentNumber] = useState(""); // Combined field
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("cash");
  const [image, setImage] = useState(null);
  const [guestCount, setGuestCount] = useState(1);
  const [mattressOption, setMattressOption] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.length < 10) {
      alert("Message must be at least 10 characters long.");
      return;
    }
    if (!/^\d{5,}$/.test(documentNumber)) {
      alert("Document number must be at least 5 digits.");
      return;
    }

    const selectedDate = new Date(date);
    const currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0);

    if (selectedDate < currentDate) {
      alert("Date must be today or in the future.");
      return;
    }
    console.log("Form submitted:", {
      name,
      email,
      phone,
      documentNumber,
      subject,
      message,
      paymentMethod,
      guestCount,
      mattressOption,
      date,
      image,
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file && file.size <= 2 * 1024 * 1024) {
      setImage(file);
    } else {
      alert("Image file size should be less than 2MB.");
    }
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-3xl text-center font-bold text-gray-800 mb-8">
        Book Now
      </h2>

      <div className="">
        <form
          onSubmit={handleSubmit}
          className="flex max-w-xl mx-auto flex-col gap-4"
        >
          <div>
            <label
              htmlFor="name"
              className="block text-gray-700 font-bold mb-2"
            >
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              className="shadow border-none bg-gray-300 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-gray-700 font-bold mb-2"
            >
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              className="shadow border-none bg-gray-300 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label
              htmlFor="subject"
              className="block text-gray-700 font-bold mb-2"
            >
              Subject <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="subject"
              className="shadow border-none bg-gray-300 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
            />
          </div>
          <div>
            <label
              htmlFor="phone"
              className="block text-gray-700 font-bold mb-2"
            >
              Phone <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              className="shadow border-none bg-gray-300 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
          <div>
            <label
              htmlFor="documentNumber"
              className="block text-gray-700 font-bold mb-2"
            >
              Passport or ID Card Number <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="documentNumber"
              placeholder="Enter Passport Number or ID Card Number"
              className="shadow border-none bg-gray-300 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={documentNumber}
              onChange={(e) => setDocumentNumber(e.target.value)}
              required
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-gray-700 font-bold mb-2"
            >
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              className="shadow border-none bg-gray-300 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>
          <div>
            <label
              htmlFor="date"
              className="block text-gray-700 font-bold mb-2"
            >
              Date <span className="text-red-500">*</span>
            </label>
            <input
              type="date"
              id="date"
              className="shadow border-none bg-gray-300 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </div>
          <div>
            <label
              htmlFor="guestCount"
              className="block text-gray-700 font-bold mb-2"
            >
              Number of Guests <span className="text-red-500">*</span>
            </label>
            <select
              id="guestCount"
              className="shadow border-none bg-gray-300 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={guestCount}
              onChange={(e) => setGuestCount(Number(e.target.value))}
              required
            >
              <option value={1}>1 Guest</option>
              <option value={2}>2 Guests</option>
              <option value={3}>3 Guests</option>
            </select>
          </div>
          <div>
            <label
              htmlFor="mattressOption"
              className="block text-gray-700 font-bold mb-2"
            >
              Mattress Option <span className="text-gray-500">(optional)</span>
            </label>

            <div>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="mr-2 border-none bg-gray-300 leading-tight"
                  checked={mattressOption === "needed"}
                  onChange={(e) =>
                    setMattressOption(e.target.checked ? "needed" : "")
                  }
                />
                <span className="text-gray-700 font-bold">
                  Mattress Needed?
                </span>
              </label>
            </div>
          </div>
          <div>
            <label
              htmlFor="paymentMethod"
              className="block border-none bg-gray-300 text-gray-700 font-bold mb-2"
            >
              Payment Method <span className="text-red-500">*</span>
            </label>
            <select
              id="paymentMethod"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
              required
            >
              <option value="cash">Cash</option>
              <option value="bank">Bank Transfer</option>
            </select>
          </div>
          {paymentMethod === "bank" && (
            <div>
              <label
                htmlFor="image"
                className="block text-gray-700 font-bold mb-2"
              >
                Upload Image <span className="text-red-500">*</span> (max 2MB)
              </label>
              <input
                type="file"
                id="image"
                accept="image/*"
                className="shadow border-none bg-gray-300 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                onChange={handleImageChange}
                required
              />
            </div>
          )}
          <button
            type="submit"
            className=" p-2    rounded-lg bg-heading hover:bg-subHeading   text-white font-bold text-xl"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
