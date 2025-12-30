"use client";

import { useState } from "react";
import Image from "next/image";

import { Link } from "lucide-react";





<Image src="/cars/car1.jpg" alt="car" fill className="object-cover" />

export default function Hero() {
    

  const [openMenu, setOpenMenu] = useState<
    "home" | "search" | "pages" | null
  >(null);

  const toggleMenu = (menu: "home" | "search" | "pages") => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  return (
    <div className="relative h-screen w-full overflow-hidden text-white">
      {/* BACKGROUND MOSAIC */}
      <div className="absolute inset-0 grid grid-cols-4 grid-rows-3">
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className="relative">
        <img src="cars/hero-1.jpg.jpg" alt="" />
            <div className="absolute inset-0 bg-black/40" />
          </div>
        ))}
      </div>

      {/* NAVBAR */}
      <nav className="relative z-20 flex items-center justify-between px-10 py-6">
        {/* LEFT */}
        <div className="flex items-center gap-10">
          <div className="flex items-center gap-2 text-2xl font-bold">
            🚗 Vehica
          </div>

          <div className="hidden md:flex items-center gap-6 text-sm relative">
            {/* HOME */}
            <div className="relative">
              <button onClick={() => toggleMenu("home")}>
                Home ▾
              </button>

              

              {openMenu === "home" && (
                <div className="absolute top-8 left-0 bg-white text-black rounded-lg shadow-lg w-56">
                  {[
                    "Homepage Mosaic",
                  
                    "Homepage Car Dealer",
                    "Homepage Location",
                    "Homepage Modern",
                    "Homepage Classic",
                    "Homepage Video",
                    "Homepage Slideshow",
                  ].map((item) => (
                    <button
                      key={item}
                      className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                    >
                      {item}
                    </button>
                  ))}
                </div>
              )}
            </div>
           <Link className="cursor pointer"
           href="/homepagemosaic">Home</Link>

            {/* SEARCH */}
            <div className="relative">
              <button onClick={() => toggleMenu("search")}>
                Search ▾
              </button>

              {openMenu === "search" && (
                <div className="absolute top-8 left-0 bg-white text-black rounded-lg shadow-lg w-40">
                  {["Classic", "Map"].map((item) => (
                    <button
                      key={item}
                      className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                    >
                      {item}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* PAGES */}
            <div className="relative">
              <button onClick={() => toggleMenu("pages")}>
                Pages ▾
              </button>

              {openMenu === "pages" && (
                <div className="absolute top-8 left-0 bg-white text-black rounded-lg shadow-lg w-56">
                  {[
                    "About us",
                    "Our team – simple",
                    "Our team – advanced",
                    "Sold",
                    "Loan Calculator",
                    "FAQ",
                  ].map((item) => (
                    <button
                      key={item}
                      className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                    >
                      {item}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button>Blog</button>
            <button>Contact</button>
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-4 text-sm">
          <button className="flex items-center gap-1 opacity-80">
            👤 Log in
          </button>
          <button className="border border-orange-500 px-4 py-2 rounded-md text-orange-500 hover:bg-orange-500 hover:text-black transition">
            + Add Listing
          </button>
        </div>
      </nav>

      {/* HERO CONTENT */}
      <div className="relative z-20 flex flex-col items-center justify-center h-[75%] text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-10">
          Find Your <span className="text-orange-500">Perfect</span> Car
        </h1>

        <div className="bg-white rounded-xl flex items-center gap-4 p-4 shadow-xl w-full max-w-3xl">
          <select className="flex-1 px-4 py-3 rounded-lg bg-gray-100 text-black outline-none">
            <option>All Makes</option>
          </select>

          <select className="flex-1 px-4 py-3 rounded-lg bg-gray-100 text-black outline-none">
            <option>All Models</option>
          </select>

          <select className="flex-1 px-4 py-3 rounded-lg bg-gray-100 text-black outline-none">
            <option>Max Price</option>
          </select>

          <button className="bg-blue-500 p-4 rounded-lg text-white">
            🔍
          </button>
        </div>

        <div className="flex gap-10 mt-14">
          {["Sedan", "Coupe", "SUV", "Hatchback", "Convertible"].map(
            (type) => (
              <div key={type} className="flex flex-col items-center gap-2">
                <div className="w-15 h-15 rounded-full border border-white flex items-center justify-center">
                  🚗
                </div>
                <span className="text-sm">{type}</span>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}
