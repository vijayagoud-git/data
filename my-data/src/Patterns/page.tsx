"use client";
import React from "react";
import { FaUserMd, FaHospital, FaHeartbeat } from "react-icons/fa";

export default function HospitalOverview() {
  const features = [
    {
      icon: <FaUserMd className="text-blue-600 text-4xl" />,
      title: "Expert Doctors",
      description:
        "Our hospital is staffed with highly qualified and experienced doctors dedicated to providing the best medical care.",
    },
    {
      icon: <FaHospital className="text-blue-600 text-4xl" />,
      title: "Advanced Facilities",
      description:
        "We offer state-of-the-art medical equipment and modern infrastructure to ensure accurate diagnosis and treatment.",
    },
    {
      icon: <FaHeartbeat className="text-blue-600 text-4xl" />,
      title: "Patient-Centered Care",
      description:
        "We focus on compassionate care, ensuring every patient receives personalized attention and comfort.",
    },
  ];

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Hospital Overview
          </h2>
          <p className="text-gray-600 text-lg">
            Delivering world-class healthcare services with compassion,
            innovation, and excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition"
            >
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-6 mx-auto">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-center mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-center">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
