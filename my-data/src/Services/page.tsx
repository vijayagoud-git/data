"use client"
import React, { useState } from "react";

function Services() {

  // useState hooks for form fields
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");

  const [country, setCountry] = useState("");
  const [bio, setBio] = useState("");


  // Handle checkbox group
  
  // Form submit handler
  
  return (
    <div className="h-auto bg-gray-100 flex justify-center items-center p-4">

      <div className="bg-white p-8 rounded-xl shadow-xl w-full max-w-lg">
        <h1 className="text-3xl font-bold text-center mb-6">React Form Example</h1>

    
          {/* Name */}
          <div>
            <label className="font-semibold block mb-1">Full Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full p-2 border rounded-lg"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          {/* Age */}
          <div>
            <label className="font-semibold block mb-1">Age</label>
            <input
              type="number"
              className="w-full p-2 border rounded-lg"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="font-semibold block mb-1">Email Address</label>
            <input
              type="email"
              className="w-full p-2 border rounded-lg"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="font-semibold block mb-1">Password</label>
            <input
              type="password"
              className="w-full p-2 border rounded-lg"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* Radio buttons */}
          <div>
            <label className="font-semibold block mb-1">Gender</label>

            <div className="flex gap-4">
              <label>
                <input
                  type="radio"
                  value="Male"
                  checked={gender === "Male"}
                  onChange={(e) => setGender(e.target.value)}
                />{" "}
                Male
              </label>

              <label>
                <input
                  type="radio"
                  value="Female"
                  checked={gender === "Female"}
                  onChange={(e) => setGender(e.target.value)}
                />{" "}
                Female
              </label>

              <label>
                <input
                  type="radio"
                  value="Other"
                  checked={gender === "Other"}
                  onChange={(e) => setGender(e.target.value)}
                />{" "}
                Other
              </label>
            </div>
          </div>

          {/* Checkbox group */}
          <div>
            <label className="font-semibold block mb-1">Hobbies</label>

            <div className="flex gap-4 flex-wrap">
              <label>
                <input
                  type="checkbox"
                  value="Reading"
                  
                />{" "}
                Reading
              </label>

              <label>
                <input
                  type="checkbox"
                  value="Sports"
             
          
                />{" "}
                Sports
              </label>

              <label>
                <input
                  type="checkbox"
                  value="Music"
             
                />{" "}
                Music
              </label>
            </div>
          </div>

          {/* Select dropdown */}
          <div>
            <label className="font-semibold block mb-1">Country</label>
            <select
              className="w-full p-2 border rounded-lg"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              required
            >
              <option value="">Select Country</option>
              <option value="India">India</option>
              <option value="USA">USA</option>
              <option value="UK">UK</option>
              <option value="Canada">Canada</option>
            </select>
          </div>

          {/* Textarea */}
          <div>
            <label className="font-semibold block mb-1">Bio</label>
            <textarea
              className="w-full p-2 border rounded-lg"

              placeholder="Write something..."
              value={bio}
              onChange={(e) => setBio(e.target.value)}
            ></textarea>
          </div>

          {/* Submit button */}
          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-3 rounded-lg text-lg hover:bg-purple-700 transition"
          >
            Submit Form
          </button>


        {/* Display submitted data */}
      
      </div>
    </div>
  );
}

export default Services;
