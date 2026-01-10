"use client";

import React from "react";

/* ---------- Car Company Data ---------- */
const carCompanies = [
  {
    id: 1,
    name: "Tesla",
    country: "USA",
    founded: 2003,
    logo: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg",
  },
  {
    id: 2,
    name: "BMW",
    country: "Germany",
    founded: 1916,
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/BMW.svg",
  },
  {
    id: 3,
    name: "Toyota",
    country: "Japan",
    founded: 1937,
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/9d/Toyota_logo.svg",
  },
  {
    id: 4,
    name: "Tata Motors",
    country: "India",
    founded: 1945,
    logo: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Tata_logo.svg",
  },
];

/* ---------- Card Component ---------- */
function CarCard({
  name,
  country,
  founded,
  logo,
}: {
  name: string;
  country: string;
  founded: number;
  logo: string;
}) {
  return (
    <div style={styles.card}>
      <img src={logo} alt={name} style={styles.logo} />
      <h2>{name}</h2>
      <p><strong>Country:</strong> {country}</p>
      <p><strong>Founded:</strong> {founded}</p>
    </div>
  );
}

/* ---------- Page Component ---------- */
export default function CarsPage() {
  return (
    <div style={styles.container}>
      <h1>🚗 Car Company Listing</h1>

      <div style={styles.grid}>
        {carCompanies.map((car) => (
          <CarCard
            key={car.id}
            name={car.name}
            country={car.country}
            founded={car.founded}
            logo={car.logo}
          />
        ))}
      </div>
    </div>
  );
}

/* ---------- Styles ---------- */
const styles = {
  container: {
    padding: "30px",
    fontFamily: "Arial, sans-serif",
  },
  grid: {
    display: "flex",
    gap: "20px",
    flexWrap: "wrap" as const,
    marginTop: "20px",
  },
  card: {
    border: "1px solid #ddd",
    borderRadius: "12px",
    padding: "16px",
    width: "220px",
    textAlign: "center" as const,
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
  },
  logo: {
    height: "60px",
    marginBottom: "10px",
  },
};
