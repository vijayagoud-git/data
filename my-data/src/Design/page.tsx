"use client";
import React, { useState } from "react";
import { FaEye, FaCalendarAlt, FaInfoCircle } from "react-icons/fa";

export default function HeroSection() {
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [appointmentDate, setAppointmentDate] = useState("");

  return (
    <section className="relative overflow-hidden">
      <div className="bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600">
        <div className="max-w-7xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center justify-between">

          {/* LEFT CONTENT */}
          <div className="max-w-xl text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              Clear Vision for a{" "}
              <span className="text-yellow-300">Brighter Tomorrow</span>
            </h1>

            <p className="text-lg text-blue-100 mb-8">
              Advanced eye care with expert doctors, modern technology, and
              compassionate service.
            </p>

            {/* BUTTONS */}
            <div className="flex gap-4 mb-4">
              <button
                onClick={() => setShowDatePicker(true)}
                className="flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
              >
                <FaCalendarAlt />
                Book Appointment
              </button>

              <button className="flex items-center gap-2 border border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition">
                <FaInfoCircle />
                Learn More
              </button>
            </div>

            {/* DATE PICKER */}
            {showDatePicker && (
              <div className="mt-4">
                <input
                  type="date"
                  className="px-4 py-2 rounded text-white-600"
                  onChange={(e) => setAppointmentDate(e.target.value)}
                />
              </div>
            )}

            {/* CONFIRMATION MESSAGE */}
            {appointmentDate && (
              <p className="mt-4 text-lg font-semibold text-yellow-300">
                ✅ Your appointment is fixed on{" "}
                {new Date(appointmentDate).toDateString()}
              </p>
            )}
          </div>

          {/* RIGHT ICON */}
          <div className="mt-12 md:mt-0 relative">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
              <FaEye className="text-white text-8xl md:text-9xl" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
