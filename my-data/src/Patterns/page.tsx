"use client"
export default function ShadowBoxes() {
  const boxes = [
    { heading: "Box One", content: "This is the content inside Box One." },
    { heading: "Box Two", content: "This is the content inside Box Two." },
    { heading: "Box Three", content: "This is the content inside Box Three." },
    { heading: "Box Four", content: "This is the content inside Box Four." },
  ];

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "25px",
        marginTop: "40px",
        flexWrap: "wrap",
      }}
    >
      {boxes.map((box, index) => (
        <div
          key={index}
          style={{
            width: "220px",
            padding: "25px",
            borderRadius: "12px",
            textAlign: "center",
            background: "white",
            boxShadow: "0 4px 15px rgba(0,0,0,0.15)",
            transition: "all 0.3s ease",
            cursor: "pointer",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,0,0,0.25)";
            e.currentTarget.style.transform = "scale(1.05)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = "0 4px 15px rgba(0,0,0,0.15)";
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          <h3 style={{ marginBottom: "10px", fontWeight: "700" }}>
            {box.heading}
          </h3>
          <p style={{ fontSize: "15px", color: "#555" }}>{box.content}</p>
        </div>
      ))}
    </div>
  );
}
