"use client";

import { Star } from "lucide-react";

type Car = {
  id: number;
  title: string;
  image: string;
  year: string;
  mileage?: string;
  transmission: string;
  fuel: string;
  drive: string;
  features: string;
  location: string;
  price: string;
  featured?: boolean;
};

const cars: Car[] = [
  {
    id: 1,
    title: "BMW 8-serie 2-door coupe grey",
    image: "/cars/bmw.jpg",
    year: "2021",
    transmission: "Automatic",
    fuel: "Petrol",
    drive: "Front Wheel Drive",
    features:
      "Keyless start, Leather seats, Navigation System, Reversing camera, Side airbags, Traction Control",
    location: "New York, NY, USA",
    price: "$62,000",
    featured: true,
  },
  {
    id: 2,
    title: "Mercedes-Benz AMG GT 2-door coupe yellow",
    image: "/cars/mercedes.jpg",
    year: "2020",
    mileage: "160,000 miles",
    transmission: "Automatic",
    fuel: "Diesel",
    drive: "Front Wheel Drive",
    features:
      "Blind spot alert, Bluetooth, Heated seats, Memory seat, Navigation System, Sound system",
    location: "Los Angeles, CA, USA",
    price: "$14,600",
    featured: true,
  },
];

export default function CarList() {
  return (
    <div className="max-w-6xl mx-auto p-6 space-y-6">
      {cars.map((car) => (
        <div
          key={car.id}
          className="flex gap-6 bg-white rounded-xl border p-5 relative"
        >
          {/* IMAGE */}
          <div className="relative w-60 h-36 rounded-lg overflow-hidden">
            <img
              src={car.image}
              alt={car.title}
              className="w-full h-full object-cover"
            />

            {car.featured && (
              <span className="absolute top-2 left-[-30px] rotate-[-45deg] bg-orange-500 text-white text-xs px-10 py-1 font-semibold">
                Featured
              </span>
            )}
          </div>

          {/* CONTENT */}
          <div className="flex-1">
            <h3 className="text-xl font-semibold mb-1">{car.title}</h3>

            <p className="text-sm text-gray-500 mb-2">{car.features}</p>

            <div className="flex flex-wrap gap-3 text-sm items-center mb-2">
              <span className="bg-orange-500 text-white px-2 py-1 rounded">
                {car.year}
              </span>
              {car.mileage && (
                <span className="text-gray-500">{car.mileage}</span>
              )}
              <span className="text-gray-500">
                • {car.transmission}
              </span>
              <span className="text-gray-500">• {car.fuel}</span>
              <span className="text-gray-500">• {car.drive}</span>
            </div>

            <p className="text-orange-600 text-sm">
              Location: <span className="text-black">{car.location}</span>
            </p>
          </div>

          {/* PRICE */}
          <div className="flex flex-col items-end justify-between">
            <Star className="text-gray-400 cursor-pointer hover:text-orange-500" />

            <div className="text-right">
              <p className="text-2xl font-bold text-orange-600">
                {car.price}
              </p>
              <button className="text-sm text-gray-400 underline">
                Calculate financing
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}


