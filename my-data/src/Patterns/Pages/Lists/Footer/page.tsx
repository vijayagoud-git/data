"use client";
import { Instagram } from "lucide-react";
import Link from "next/link";

// import { Facebook, Twitter, Instagram, Link } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#1f2632] text-white">
      <div className="max-w-7xl mx-auto px-8 py-16">
        {/* TOP */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* LOGO */}
          <div>
            <div className="flex items-center gap-2 text-2xl font-bold mb-6">
              <Link className="cursor-pointer"
              href="/">🚗 Vehica</Link>
            </div>
          </div>

          {/* LINKS */}
          <div className="flex gap-20">
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-2">
               <Link className="cursor-pointer "
               href="/Listings">•  Listings</Link> 
              </li>
              <li className="flex items-center gap-2">
                <Link className="cursor-pointer"
                href="/Faq">•  FAQ</Link> 
              </li>
              <li className="flex items-center gap-2">
                <Link className="curser-pointer"
                href="/About">• About </Link> 
              </li>
            </ul>

            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-2">
                <span className="text-orange-500">•</span> Blog
              </li>
              <li className="flex items-center gap-2">
                <span className="text-orange-500">•</span> Our team
              </li>
              <li className="flex items-center gap-2">
                <span className="text-orange-500">•</span> Contact
              </li>
            </ul>
          </div>

          {/* DESCRIPTION */}
          <div className="text-sm leading-7 text-gray-300">
            Award-winning, family owned dealership of new and pre-owned
            vehicles with several locations across the city. Lowest prices
            and the best customer service guaranteed.
          </div>

          {/* CONTACT */}
          <div className="text-sm space-y-3">
            <p className="text-2xl font-bold">
              (123) <span className="text-orange-500">456-78901</span>
            </p>
            <p className="text-gray-300">support@vehica.com</p>
            <p className="text-gray-300">
              West 12th Street <br />
              New York, NY, USA
            </p>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="border-t border-gray-700 mt-14 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm text-gray-400">
            Copyright © 2021. All rights reserved.
          </p>

          {/* SOCIAL ICONS */}
          {/* <div className="flex gap-3">
            <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-orange-500 transition cursor-pointer">
              <Facebook size={18} />
            </div>
            <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-orange-500 transition cursor-pointer">
              <Twitter size={18} />
            </div>
            <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-orange-500 transition cursor-pointer">
              <Instagram size={18} />
            </div>
          </div> */}
        </div>
      </div>
    </footer>
  );
}
