import React from "react";

export default function FeaturesList() {
  const features = [
    {
      icon: (
        <svg
          className="w-6 h-6 text-blue-600"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12l2 2 4-4M7 20h10a2 2 0 002-2v-6a2 2 0 00-2-2H7a2 2 0 00-2 2v6a2 2 0 002 2z"
          />
        </svg>
      ),
      title: "Award Winning",
      description:
        "Recognized for excellence in ophthalmology services and patient care.",
    },
    {
      icon: (
        <svg
          className="w-6 h-6 text-blue-600"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87M16 3.13a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      ),
      title: "Expert Team",
      description:
        "Highly qualified ophthalmologists with international training and experience.",
    },
    {
      icon: (
        <svg
          className="w-6 h-6 text-blue-600"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0zM2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
          />
        </svg>
      ),
      title: "Advanced Technology",
      description:
        "Latest diagnostic and surgical equipment for precise treatment.",
    },
  ];

  return (
    <div className="max-w-3xl mx-auto p-4 space-y-6">
      {features.map((feature, idx) => (
        <div
          key={idx}
          className="flex items-start gap-4 bg-blue-50 rounded-lg p-4"
        >
          <div className="flex-shrink-0">{feature.icon}</div>
          <div>
            <h3 className="font-bold text-gray-900 text-lg">{feature.title}</h3>
            <p className="text-gray-600 mt-1">{feature.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
