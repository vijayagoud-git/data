"use client";
import { useState } from "react";

type SidebarItem =
  | "prime"
  | "advertise"
  | "boost"
  | "returns"
  | "app"
  | "help";

export default function SellerSidebar() {
  const [hoveredItem, setHoveredItem] = useState<SidebarItem | null>(null);

  return (
    <div className="flex gap-4">
      {/* SIDEBAR */}
      <div className="w-64 bg-white shadow-md rounded-lg p-4">
        <h2 className="text-lg font-bold text-gray-800 ms-4 mb-3">
          Quick Actions
        </h2>

        <div className="flex flex-col gap-3">
          <button
            onMouseEnter={() => setHoveredItem("prime")}
            onMouseLeave={() => setHoveredItem(null)}
            className="w-full text-left px-4 py-2 bg-gray-100 rounded-md hover:bg-gray-200 font-medium"
          >
            Get the Prime Badge
          </button>

          <button
            onMouseEnter={() => setHoveredItem("advertise")}
            onMouseLeave={() => setHoveredItem(null)}
            className="w-full text-left px-4 py-2 bg-gray-100 rounded-md hover:bg-gray-200 font-medium"
          >
            Advertise Your Products
          </button>

          <button
            onMouseEnter={() => setHoveredItem("boost")}
            onMouseLeave={() => setHoveredItem(null)}
            className="w-full text-left px-4 py-2 bg-gray-100 rounded-md hover:bg-gray-200 font-medium"
          >
            Boost Sales of Your Products
          </button>

          <button
            onMouseEnter={() => setHoveredItem("returns")}
            onMouseLeave={() => setHoveredItem(null)}
            className="w-full text-left px-4 py-2 bg-gray-100 rounded-md hover:bg-gray-200 font-medium"
          >
            Reduce Returns with Voice of Customer Dashboard
          </button>

          <button
            onMouseEnter={() => setHoveredItem("app")}
            onMouseLeave={() => setHoveredItem(null)}
            className="w-full text-left px-4 py-2 bg-gray-100 rounded-md hover:bg-gray-200 font-medium"
          >
            Manage your Business on the go with Amazon Seller App
          </button>

          <button
            onMouseEnter={() => setHoveredItem("help")}
            onMouseLeave={() => setHoveredItem(null)}
            className="w-full text-left px-4 py-2 bg-gray-100 rounded-md hover:bg-gray-200 font-medium"
          >
            Get Help Anytime
          </button>
        </div>
      </div>

      {/* CONTENT PANEL */}
      {hoveredItem && (
        <div className="w-[400px] p-4 bg-blue-50 border border-blue-200 rounded-md">
          {hoveredItem === "prime" && (
            <>
              <h3 className="text-lg font-bold text-blue-900 mb-2">
                Get the Prime Advantage
              </h3>

              <p className="font-semibold text-gray-800 mb-1">
                Fulfillment by Amazon (FBA)
              </p>

              <p className="text-gray-700 text-sm mb-3">
                When you use FBA, you send your products to the Amazon Fulfillment
                Center and we will take care of the rest. We pack and deliver your
                products to the buyer and manage customer queries.
              </p>

              <ul className="list-disc ml-5 text-gray-700 text-sm">
                <li>Sellers with Prime Badge have up to 3X higher sales</li>
                <li>Increased chances of getting the Buybox</li>
                <li>Hassle-free operations with fast Prime shipping</li>
                <li>Products with Prime Badge get higher conversion</li>
                <li>Amazon handles customer support and returns</li>
              </ul>
            </>
          )}

          {hoveredItem === "advertise" && (
            <>
              <h3 className="text-lg font-bold text-blue-900 mb-2">
                Advertise Your Products
              </h3>
              <p className="text-gray-700 text-sm">
                Promote your products to reach more customers and increase
                visibility across Amazon.
              </p>
            </>
          )}

          {hoveredItem === "boost" && (
            <>
              <h3 className="text-lg font-bold text-blue-900 mb-2">
                Boost Sales
              </h3>
              <p className="text-gray-700 text-sm">
                Use Amazon tools and insights to improve conversions and grow
                your business.
              </p>
            </>
          )}

          {hoveredItem === "returns" && (
            <>
              <h3 className="text-lg font-bold text-blue-900 mb-2">
                Reduce Returns
              </h3>
              <p className="text-gray-700 text-sm">
                Analyze customer feedback to improve product quality and reduce
                return rates.
              </p>
            </>
          )}

          {hoveredItem === "app" && (
            <>
              <h3 className="text-lg font-bold text-blue-900 mb-2">
                Amazon Seller App
              </h3>
              <p className="text-gray-700 text-sm">
                Manage orders, inventory, and performance anytime from your
                mobile device.
              </p>
            </>
          )}

          {hoveredItem === "help" && (
            <>
              <h3 className="text-lg font-bold text-blue-900 mb-2">
                Get Help Anytime
              </h3>
              <p className="text-gray-700 text-sm">
                Access seller support and resources whenever you need
                assistance.
              </p>
            </>
          )}
        </div>
      )}
    </div>
  );
}
