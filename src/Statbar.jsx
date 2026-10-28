// This is for repetitive element of status bars in each card.

const StatBar = ({ label, value, color, min = 0, max = 160 }) => {
  const percent = ((value - min) / (max - min)) * 100;

  return (
    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
      <p style={{ width: 60, margin: 0 }}>{label}</p>
      <div
        style={{
          flex: 1,
          height: 10,
          backgroundColor: "#eee",
          borderRadius: 4,
        }}
      >
        <div
          style={{
            width: `${percent}%`,
            height: "100%",
            backgroundColor: color,
            borderRadius: 2,
          }}
        />
      </div>
    </div>
  );
};

export default StatBar;
