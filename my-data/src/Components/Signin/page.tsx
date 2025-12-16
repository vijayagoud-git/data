"use client"
import React, { useState } from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaEye,
  FaBars,
  FaCalendarAlt,
} from "react-icons/fa";

export default function App() {
   const [activeTab, setActiveTab] = useState<"home" | "services" | null>(null);

  
  const healthCareServices = [
    "General Checkup",
    "Eye Examination",
    "Pediatric Care",
    "Emergency Services",
    "Vision Therapy",
  ];

  const hospitalNames = [
    "Viswam Eye Hospital",
    "City Care Hospital",
    "Sunshine Health Center",
    "Green Valley Clinic",
    "Hope Medical Institute",
  ];

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Top Blue Info Bar */}
      <div className="bg-blue-900 text-white text-sm flex justify-between px-6 py-1 select-none">
        <div className="flex gap-6 items-center">
          <div className="flex items-center gap-1">
            <FaPhoneAlt /> +91 98765 43210
          </div>
          <div className="flex items-center gap-1">
            <FaEnvelope /> info@viswameye.com
          </div>
        </div>
        <div className="flex items-center gap-1">
          <FaClock /> Mon-Sat: 9AM-8PM | Sun: 9AM-2PM
        </div>
      </div>

     
      <header className="flex justify-between items-center px-6 py-4 border-b border-gray-200 bg-white max-w-7xl mx-auto">
        <div className="flex items-center gap-4">
          <FaEye className="text-blue-600 text-3xl" />
          <div>
            <h1 className="text-xl font-bold text-blue-800">
              Viswam Eye Hospital
            </h1>
            <p className="text-sm text-gray-500">
              Vision Care Excellence Since 1995
            </p>
          </div>
        </div>
        <button
          aria-label="menu"
          className="text-gray-600 text-2xl focus:outline-none"
        >
          <FaBars />
        </button>
      </header>

      <nav className="bg-gray-50 text-gray-600 text-sm px-6 py-2 max-w-7xl mx-auto flex items-center gap-1">
        <span>Home</span>
        <span className="text-blue-600"> &gt; </span>
        <a href="#" className="text-blue-600 hover:underline">
          Services
        </a>
      </nav>

      <section className="bg-blue-100 rounded-xl max-w-7xl mx-auto px-10 py-12 mt-8">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-2 max-w-3xl">
          Clear Vision, <span className="text-blue-600">Bright Future</span>
        </h1>
        <p className="text-gray-700 mb-8 max-w-2xl">
          Experience world-class eye care with advanced technology and
          compassionate experts at Viswam Eye Hospital.
        </p>

        <div className="flex gap-6">
          <button className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition">
            <FaCalendarAlt />
            Book Appointment
          </button>
          <button className="px-6 py-3 rounded-full font-semibold border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition">
            Learn More
          </button>
        </div>
      </section>

  
      <section className="max-w-7xl mx-auto mt-10 px-6 flex gap-4">
        <button
          className={`px-6 py-3 rounded font-semibold border ${
            activeTab === "home"
              ? "bg-blue-600 text-white border-blue-600"
              : "border-gray-300 text-gray-700 hover:bg-blue-100"
          }`}
          onClick={() => setActiveTab("home")}
        >
          Home
        </button>
        <button
          className={`px-6 py-3 rounded font-semibold border ${
            activeTab === "services"
              ? "bg-blue-600 text-white border-blue-600"
              : "border-gray-300 text-gray-700 hover:bg-blue-100"
          }`}
          onClick={() => setActiveTab("services")}
        >
          Services
        </button>
      </section>

      <section className="max-w-7xl mx-auto mt-6 px-6 bg-gray-50 rounded-lg p-6 min-h-[120px]">
        {!activeTab && (
          <p className="text-gray-600 text-center">Please select a tab above.</p>
        )}

        {activeTab === "home" && (
          <div>
            <h2 className="text-2xl font-bold mb-4 text-blue-700">
              Health Care Services
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              {healthCareServices.map((service) => (
                <li key={service}>{service}</li>
              ))}
            </ul>
          </div>
        )}

        {activeTab === "services" && (
          <div>
            <h2 className="text-2xl font-bold mb-4 text-blue-700">
              Hospital Names
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              {hospitalNames.map((hospital) => (
                <li key={hospital}>{hospital}</li>
              ))}
            </ul>
          </div>
        )}
      </section>

     
      <div className="bg-blue-200 rounded-xl max-w-7xl mx-auto mt-10 h-64 flex justify-center items-center">
        <FaEye className="text-blue-600 text-9xl" />
      </div>
    </div>
  );
}
