"use client";
import React, { useState } from "react";
import {
  FaEye,

  FaLowVision,
  FaUserMd,
  FaMicroscope,
  FaChild,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";

export default function ServicesGrid() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const services = [
    {
      title: "Cataract Surgery",
      icon: <FaEye className="text-blue-600 text-4xl" />,
      description:
        "Advanced cataract treatment using modern surgical techniques for faster recovery and clearer vision.",
    },
    {
      title: "LASIK Surgery",
      
      description:
        "Blade-free LASIK procedures to correct vision with precision and long-term results.",
    },
    {
      title: "Retina Care",
      icon: <FaMicroscope className="text-blue-600 text-4xl" />,
      description:
        "Comprehensive diagnosis and treatment for retinal diseases with cutting-edge technology.",
    },
    {
      title: "Glaucoma Treatment",
      icon: <FaLowVision className="text-blue-600 text-4xl" />,
      description:
        "Early detection and personalized treatment plans to manage glaucoma effectively.",
    },
    {
      title: "Pediatric Eye Care",
      icon: <FaChild className="text-blue-600 text-4xl" />,
      description:
        "Specialized eye care services for children, ensuring healthy vision from an early age.",
    },
    {
      title: "Cornea Services",
      icon: <FaUserMd className="text-blue-600 text-4xl" />,
      description:
        "Diagnosis and advanced treatments for corneal disorders by experienced specialists.",
    },
  ];

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Eye Care Services
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Comprehensive eye care services designed to protect, improve, and
            maintain your vision.
          </p>
          
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow hover:shadow-lg transition p-8"
            >
         
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                {service.icon}
              </div>

         
              <h3 className="text-xl font-bold mb-4">
                {service.title}
              </h3>

     
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="flex items-center gap-2 text-blue-600 font-semibold hover:underline"
              >
                Learn More
                {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
              </button>

        
              {openIndex === index && (
                <p className="mt-4 text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
