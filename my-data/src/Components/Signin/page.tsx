"use client";
import React, { useState } from "react";
import {
  FaUserMd,
  FaAmbulance,
  FaStethoscope,
  FaHeartbeat,
} from "react-icons/fa";

export default function ServicesSection() {
  const [activeService, setActiveService] = useState<number | null>(null);

  const services = [
    {
      id: 1,
      title: "Primary Care",
      icon: FaUserMd,
      description: "Comprehensive healthcare for all ages",
      details: [
        "General health checkups",
        "Blood pressure & diabetes care",
        "Preventive health guidance",
      ],
    },
    {
      id: 2,
      title: "Emergency Care",
      icon: FaAmbulance,
      description: "24/7 urgent medical attention",
      details: [
        "Immediate trauma care",
        "Emergency diagnostics",
        "Critical patient stabilization",
      ],
    },
    {
      id: 3,
      title: "Specialized Treatment",
      icon: FaStethoscope,
      description: "Expert care from medical specialists",
      details: [
        "Specialist consultations",
        "Advanced diagnostics",
        "Personalized treatment plans",
      ],
    },
    {
      id: 4,
      title: "Preventive Care",
      icon: FaHeartbeat,
      description: "Health screenings & wellness programs",
      details: [
        "Routine health screenings",
        "Vaccinations",
        "Lifestyle & wellness counseling",
      ],
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Medical Services
          </h2>
          <p className="text-xl text-gray-600">
            Comprehensive healthcare solutions tailored to your needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all"
            >
              {/* ICON CIRCLE */}
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <service.icon className="text-blue-600 text-3xl" />
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {service.title}
              </h3>

              <p className="text-gray-600 mb-4">
                {service.description}
              </p>

              {/* TOGGLE BUTTON */}
              <button
                onClick={() =>
                  setActiveService(
                    activeService === service.id ? null : service.id
                  )
                }
                className="text-blue-600 font-semibold hover:underline"
              >
                {activeService === service.id
                  ? "Hide Information"
                  : "Click For More Information"}
              </button>

              {/* EXPANDED CONTENT */}
              {activeService === service.id && (
                <ul className="mt-4 text-sm text-gray-600 list-disc pl-4 space-y-1">
                  {service.details.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
