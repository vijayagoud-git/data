"use client";
import React, { useState } from "react";

const Page = () => {
  // Category State
  const [selectedCategory, setSelectedCategory] = useState("all");

 

  

  // Handle button click
  const handleSubmit = () => {
    alert("Hi Vijay, how are you?");
  };

  return (
    <div className="p-6">
      {/* Category Buttons */}
      <div className="flex flex-wrap gap-4 items-center justify-between">
        <div className="flex gap-2">
          <button
            onClick={() => setSelectedCategory("ALL")}
            className={`px-4 py-2 rounded-lg ${
              selectedCategory === "ALL"
                ? "bg-blue-600 text-white"
                : "bg-gray-100"
            }`}
          >
           ALL
          </button>




          <button
            onClick={() => setSelectedCategory("ELECTRONICS")}
            className={`px-4 py-2 rounded-lg ${
              selectedCategory === "ELECTRONICS"
                ? "bg-blue-600 text-white"
                : "bg-gray-100"
            }`}
          >
           ELECTRONICS
          </button>

          <button
            onClick={() => setSelectedCategory("FASHION")}
            className={`px-4 py-2 rounded-lg ${
              selectedCategory === "FASHION"
                ? "bg-blue-600 text-white"
                : "bg-gray-100"
            }`}
          >
          FASHION
          </button>

          <button
            onClick={() => setSelectedCategory("HOME")}
            className={`px-4 py-2 rounded-lg ${
              selectedCategory === "HOME"
                ? "bg-blue-600 text-white"
                : "bg-gray-100"
            }`}
          >
          HOME
          </button>
        </div>
      </div>

      {/* Text + Button Section */}
      <div className="mt-6">
        <h1 className="text-2xl font-bold">HELLO VIJAY</h1>
        <p className="text-gray-600">Welcome to our channel</p>

        <button
          onClick={handleSubmit}
          className="mt-4 px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
        >
          Click me
        </button>
      </div>
    </div>
  );
};

export default Page;
