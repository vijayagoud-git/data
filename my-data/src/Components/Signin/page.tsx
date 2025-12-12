"use client"
import React, { useState } from "react";

export default function AmazonFeesPage() {
  const [open, setOpen] = useState(false);
  const [showHelp, setShowHelp] = useState(false);

  return (
    <div className="w-full bg-[#f7f4f1]">
  
      <nav className="flex items-center justify-between px-8 py-4 bg-white shadow-sm">
        <div className="flex items-center gap-2 text-xl font-bold">
          <span className="text-black">amazon</span>
          <span className="text-xs -ml-1">.in</span>
        </div>

      <div className="hidden md:flex gap-8 text-gray-800 font-bold relative">
  {/* START */}
  <div className="group relative cursor-pointer">
    <button className="py-2">Start ▾</button>

 
    <div className="absolute left-0 mt-2 hidden group-hover:block bg-white shadow-lg rounded-md w-40">
      <ul className="py-2 text-sm text-gray-700">
        <li className="px-4 py-2 hover:bg-gray-100">Become a Seller</li>
        <li className="px-4 py-2 hover:bg-gray-100">Registration Steps</li>
        <li className="px-4 py-2 hover:bg-gray-100">Account Setup</li>
      </ul>
    </div>
  </div>


  <div className="group relative cursor-pointer">
    <button className="py-2">Grow ▾</button>

    <div className="absolute left-0 mt-2 hidden group-hover:block bg-white shadow-lg rounded-md w-40">
      <ul className="py-2 text-sm text-gray-700">
        <li className="px-4 py-2 hover:bg-gray-100">Increase Sales</li>
        <li className="px-4 py-2 hover:bg-gray-100">Ad Tools</li>
        <li className="px-4 py-2 hover:bg-gray-100">Fulfillment Options</li>
      </ul>
    </div>
  </div>


  <div className="group relative cursor-pointer">
    <button className="py-2">Pricing ▾</button>

    <div className="absolute left-0 mt-2 hidden group-hover:block bg-white shadow-lg rounded-md w-40">
      <ul className="py-2 text-sm text-gray-700">
        <li className="px-4 py-2 hover:bg-gray-100">Fees</li>
        <li className="px-4 py-2 hover:bg-gray-100">Plans</li>
        <li className="px-4 py-2 hover:bg-gray-100">Taxes</li>
      </ul>
    </div>
  </div>

 
  <div className="group relative cursor-pointer">
    <button className="py-2">Resources ▾</button>

    <div className="absolute left-0 mt-2 hidden group-hover:block bg-white shadow-lg rounded-md w-40">
      <ul className="py-2 text-sm text-gray-700">
        <li className="px-4 py-2 hover:bg-gray-100">Help Center</li>
        <li className="px-4 py-2 hover:bg-gray-100">Support</li>
        <li className="px-4 py-2 hover:bg-gray-100">Tutorials</li>
      </ul>
    </div>
  </div>
</div>


 <div className="flex justify-center mt-10">
     
      <button
        className="px-5 py-2 bg-orange-600 text-white rounded-full font-semibold"
        onClick={() => setOpen(true)}
      >
        Start Selling
      </button>

      {open && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl w-96 shadow-xl relative">

            <button
              className="absolute top-3 right-3 text-gray-500"
              onClick={() => setOpen(false)}
            >
              ✕
            </button>

        
            <h2 className="text-xl font-bold mb-4">
              Create your personal account
            </h2>

            <label className="block mb-2 font-semibold">Mobile Number</label>
            <input
              type="text"
              className="w-full px-3 py-2 border rounded-lg mb-4"
              placeholder="Enter mobile number"
            />

            <label className="block mb-2 font-semibold">Email</label>
            <input
              type="email"
              className="w-full px-3 py-2 border rounded-lg mb-4"
              placeholder="Enter email"
            />

            <button className="w-full bg-orange-600 text-white py-2 rounded-full font-semibold mt-2">
              Continue
            </button>

         
            <div className="mt-4">
              <button
                className="text-blue-600 underline"
                onClick={() => setShowHelp(!showHelp)}
              >
                Need help?
              </button>
             
        <input type="checkbox" name="Create your account" id="Account" />
      
      

              {showHelp && (
                <div className="mt-2 p-3 border rounded-lg bg-gray-50">
                  <p className="text-sm">• Contact support</p>
                  <p className="text-sm">• Forgot account?</p>
                  <p className="text-sm">• Troubleshoot login</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>

       
      </nav>

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 grid grid-cols-1 md:grid-cols-2 gap-10">
   
        <div>
          <h2 className="text-gray-500 text-sm mb-3">
            Amazon Seller &gt; Fees and Pricing
          </h2>

          <h1 className="text-4xl font-extrabold text-gray-900 leading-tight mb-6">
            Fees and Pricing for <br /> Amazon.in sellers
          </h1>

          <div className="flex items-center gap-2 text-orange-700 font-semibold cursor-pointer mb-4">
            <span>Know more</span>
            <span>→</span>
          </div>

          <button className="px-8 py-3 bg-orange-600 text-white rounded-full text-lg font-semibold">
            Start Selling
          </button>

          <p className="mt-4 underline text-sm text-gray-600 cursor-pointer">
            Disclaimer
          </p>
        </div>

        <div className="flex justify-center md:justify-end">
          <div className="relative">
          {/* eslint-disable-next-line @next/next/no-img-element */}
<img src="/img1.svg" alt="demo" />

            <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full text-sm font-semibold shadow">
              Effective September 01, 2026
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
