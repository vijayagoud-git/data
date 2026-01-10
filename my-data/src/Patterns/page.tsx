"use client";

import { useState } from "react";

type Car = {
  id: number;
  title: string;
  price: string;
  year: string;
  transmission: string;
  fuel: string;
  image: string;
  featured?: boolean;
};

const cars: Car[] = [
  {
    id: 1,
    title: "BMW 8-serie 2-door coupe grey",
    price: "$62,000",
    year: "2021",
    transmission: "Automatic",
    fuel: "Petrol",
    image: "/cars/bmw.jpg",
    featured: true,
  },
  {
    id: 2,
    title: "Chevrolet Camaro 2-door convertible",
    price: "$40,000",
    year: "2021",
    transmission: "Automatic",
    fuel: "Diesel",
    image: "/cars/camaro.jpg",
  },
  {
    id: 3,
    title: "Ferrari LaFerrari 2-door coupe red",
    price: "$810,000",
    year: "2021",
    transmission: "Automatic",
    fuel: "Diesel",
    image: "/cars/ferrari.jpg",
  },
  {
    id: 4,
    title: "Audi A8 4-door sedan silver",
    price: "$70,000",
    year: "2021",
    transmission: "Automatic",
    fuel: "Diesel",
    image: "/cars/audi.jpg",
  },
  {
    id: 5,
    title: "Mercedes-Benz S-class 2-door coupe",
    price: "$76,000",
    year: "2021",
    transmission: "Automatic",
    fuel: "Diesel",
    image: "/cars/mercedes.jpg",
  },
];

const handlesubmit = () => {
  alert("Hello, Welcome to Vijay Cars Showroom");
};

export default function FeaturedListings() {
  const [type, setType] = useState<"New" | "Used">("New");

  const featured = cars.find((c) => c.featured);
  const others = cars.filter((c) => !c.featured);

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      {/* HEADER */}
      <div className="flex items-center justify-between mb-10">
        <div>
          <p className="text-orange-500 text-sm mb-1">Handy picked</p>
          <h2 className="text-4xl font-bold">Featured Listings</h2>
        </div>

        <button onClick={handlesubmit}>Click</button>

        <div className="flex gap-3">
          {["New", "Used"].map((btn) => (
            <button
              key={btn}
              onClick={() => setType(btn as "New" | "Used")}
              className={`px-6 py-2 rounded-lg border transition
                ${
                  type === btn
                    ? "border-orange-500 text-orange-500 bg-orange-50"
                    : "bg-gray-100"
                }`}
            >
              {btn}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* FEATURED BIG CARD */}
        {featured && (
          <div className="lg:col-span-2 relative rounded-2xl overflow-hidden group">
            {/* IMAGE */}
            <img
              src="download.jpg"
              alt=""
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

            <div className="absolute bottom-0 p-6 text-white w-full">
              <h3 className="text-2xl font-semibold mb-3">
                {featured.title}
              </h3>

              <div className="flex gap-4 text-sm opacity-90 mb-4">
                <span className="bg-orange-500 px-3 py-1 rounded-md">
                  {featured.year}
                </span>
                <span>{featured.transmission}</span>
                <span>{featured.fuel}</span>
              </div>

              <p className="text-3xl font-bold">{featured.price}</p>
            </div>
          </div>
        )}

        {/* OTHER CARS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {others.map((car) => (
            <div
              key={car.id}
              className="rounded-2xl overflow-hidden bg-[#1f2937] text-white group"
            >
              {/* IMAGE */}
              <div className="relative h-48 overflow-hidden inline-block">
                <img
                  src="images.jpg"
                  alt=""
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-5">
                <h4 className="font-medium mb-2 line-clamp-1">
                  {car.title}
                </h4>

                <p className="text-xl font-bold mb-3">{car.price}</p>

                <div className="flex gap-3 text-xs text-gray-300">
                  <span className="bg-orange-500 text-white px-2 py-1 rounded">
                    {car.year}
                  </span>
                  <span>{car.transmission}</span>
                  <span>{car.fuel}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


