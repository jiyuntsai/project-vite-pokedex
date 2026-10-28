// This is a component for rendering card elements in React.

const Card = ({children}) => {
    return (
        <div 
        style={{
            border: "1px solid #ddd",
            borderRadius: 8,
            padding: 16,
            backgroundColor: "white",
        }}
        >
            {children}
        </div>
    );
};

export default Card;