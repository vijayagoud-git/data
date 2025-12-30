"use client";

import Image from "next/image";

export default function AboutUs() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* LEFT - IMAGE */}
        <div className="relative h-[420px] rounded-2xl overflow-hidden shadow-lg">
          <img
            src="/cars/about-car.jpg"
            alt="About our cars"
            className="w-full h-full object-cover"
          />
        </div>

        {/* RIGHT - CONTENT */}
        <div>
          <p className="text-orange-500 text-sm font-semibold mb-3">
            ABOUT US
          </p>

          <h2 className="text-4xl font-bold mb-6 text-gray-900">
            Trusted Car Dealer with Years of Experience
          </h2>

          <p className="text-gray-600 leading-7 mb-6">
            We are an award-winning, family-owned car dealership offering
            a wide range of new and pre-owned vehicles. Our goal is to
            help customers find the perfect car at the best price with
            complete transparency and trust.
          </p>

          <p className="text-gray-600 leading-7 mb-8">
            From luxury sedans to reliable SUVs, every vehicle in our
            inventory is carefully inspected and maintained to meet the
            highest quality standards.
          </p>

          {/* FEATURES */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            {[
              "Certified Vehicles",
              "Affordable Prices",
              "Flexible Financing",
              "Trusted Dealership",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 text-gray-700"
              >
                <span className="w-3 h-3 bg-orange-500 rounded-full" />
                {item}
              </div>
            ))}
          </div>

          {/* CTA */}
          <button className="bg-orange-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-orange-600 transition">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
