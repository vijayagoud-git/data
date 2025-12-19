"use client";

import { useState } from "react";
import {
  FaHome,
  FaUsers,
  FaUserTie,
  FaFileAlt,
  FaCog,
  FaBuilding
} from "react-icons/fa";



type MainMenuKey =
  | "Overview"
  | "Employees"
  | "Users"
  | "Templates"
  | "Settings"
  | "Organization";

interface MainMenuItem {
  name: MainMenuKey;
  icon: React.ReactNode;

}


const mainMenu: MainMenuItem[] = [
  { name: "Overview", icon: <FaHome /> },
  { name: "Employees", icon: <FaUserTie /> },
  { name: "Users", icon: <FaUsers /> },
  { name: "Templates", icon: <FaFileAlt /> },
  { name: "Settings", icon: <FaCog /> },
  { name: "Organization", icon: <FaBuilding /> }
];

const subMenu: Record<MainMenuKey, string[]> = {
  Overview: ["Dashboard", "Statistics"],
  Employees: ["Employee List", "Add Employee"],
  Users: ["User List", "Roles"],
  Templates: ["Email Templates", "PDF Templates"],
  Settings: ["Profile", "Security"],
  Organization: ["Departments", "Locations"]
};



export default function Page() {
  const [activeMain, setActiveMain] = useState<MainMenuKey>("Overview");
  const [activeSub, setActiveSub] = useState<string | null>(null);


  return (
    <div className="flex h-screen font-sans">

      
      
      <aside className="w-56 bg-slate-900 p-3">
        {mainMenu.map(item => (
          <button
            key={item.name}
            onClick={() => {
              setActiveMain(item.name);
              setActiveSub(null);
            }}
            className={`w-full flex items-center gap-3 px-3 py-2 mb-1 rounded-lg text-left transition
              ${
                activeMain === item.name
                  ? "bg-indigo-600 text-white"
                  : "text-slate-300 hover:bg-slate-800"
              }`}

              
          >
            <span className="text-lg">{item.icon}</span>
            <span>{item.name}</span>
          </button>
          
        ))}
      </aside>

  
      <aside className="w-56 bg-slate-100 p-4 border-r">
        <h3 className="text-lg font-semibold mb-4">{activeMain}</h3>

        {subMenu[activeMain].map(sub => (
          <button
            key={sub}
            onClick={() => setActiveSub(sub)}
            className={`w-full px-3 py-2 mb-2 rounded-lg text-left transition
              ${
                activeSub === sub
                  ? "bg-indigo-600 text-white"
                  : "bg-slate-200 hover:bg-slate-300"
              }`}
          >
            {sub}
          </button>
        ))}
      </aside>

      
      <main className="flex-1 p-8 bg-white">
        <h1 className="text-3xl font-bold mb-4">
          {activeSub ?? activeMain}
        </h1>
        <p className="text-slate-600">
          This is the <strong>{activeSub ?? activeMain}</strong> page.
        </p>
      </main>
    </div>
  );
}
