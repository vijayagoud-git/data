"use client"
import { useState } from "react";

export default function SellerSidebar() {
  const [showPrimeInfo, setShowPrimeInfo] = useState(false);

  

  return (
    <div className="w-64 bg-white shadow-md rounded-lg p-4">
      <h2 className="text-lg font-bold text-gray-800 ms-4">Quick Actions</h2>

      <div className="flex flex-col gap-3">

        {/* CLICK EVENT */}
        <button
          onClick={() => setShowPrimeInfo(true)}
          className="w-full text-left px-4 py-2 bg-gray-100 rounded-md hover:bg-gray-200 font-medium"
        >
          Get the Prime Badge
        </button>

        <button className="w-full text-left px-4 py-2 bg-gray-100 rounded-md hover:bg-gray-200 font-medium">
          Advertise Your Products
        </button>

        <button className="w-full text-left px-4 py-2 bg-gray-100 rounded-md hover:bg-gray-200 font-medium">
          Boost Sales of Your Products
        </button>

        <button className="w-full text-left px-4 py-2 bg-gray-100 rounded-md hover:bg-gray-200 font-medium">
          Reduce Returns with Voice of Customer Dashboard
        </button>

        <button className="w-full text-left px-4 py-2 bg-gray-100 rounded-md hover:bg-gray-200 font-medium">
          Manage your Business on the go with Amazon Seller App
        </button>

        <button className="w-full text-left px-4 py-2 bg-gray-100 rounded-md hover:bg-gray-200 font-medium">
          Get Help Anytime
        </button>
      </div>

      {/* SHOW INFO WHEN CLICKED */}
      {showPrimeInfo && (
        <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-md">
          <h3 className="text-lg font-bold text-blue-900 mb-2">
            Get the Prime Advantage
          </h3>

          <p className="font-semibold text-gray-800 mb-1">
            Fulfillment by Amazon (FBA)
          </p>

          <p className="text-gray-700 text-sm mb-3">
            When you use FBA, you send your products to the Amazon Fulfillment Center  
            and we will take care of the rest. Once an order is received, we pack and 
            deliver your products to the buyer and manage customer queries.
          </p>

          <ul className="list-disc ml-5 text-gray-700 text-sm">
            <li>Sellers with Prime Badge have up to 3X higher sales</li>
            <li>Increased chances of getting the Buybox</li>
            <li>Hassle-free operations with fast Prime shipping</li>
            <li>Products with Prime Badge get higher conversion</li>
            <li>Amazon handles customer support and returns</li>
          </ul>

          {/* Close Button */}
          <button
            onClick={() => setShowPrimeInfo(false)}
            className="mt-4 px-3 py-1 bg-red-100 text-red-600 rounded hover:bg-red-200"
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
}
