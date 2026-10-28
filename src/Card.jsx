// This is a component for rendering card elements in React.

const Card = ({ children }) => {
  return (
    <div
      style={{
        width: 200,
        border: "4px solid #222",
        borderRadius: 0,
        padding: 16,
        backgroundColor: "#fff",
        boxShadow: "6px 6px 0 #222",
        boxSizing: "border-box",
        fontSize: 10,
      }}
    >
      {children}
    </div>
  );
};

export default Card;
