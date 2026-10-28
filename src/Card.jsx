// This is a component for rendering card elements in React.

const Card = ({ children }) => {
  return (
    <div
      style={{
        width: 200,
        alignItems: "center",
        border: "1px solid #ddd",
        borderRadius: 8,
        padding: 16,
        boxSizing: "border-box",
        backgroundColor: "white",
      }}
    >
      {children}
    </div>
  );
};

export default Card;
