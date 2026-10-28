// This is the component of each pokemon card.

import Card from "./Card.jsx";
import StatBar from "./Statbar.jsx";

const PokemonCard = ({ pokemon }) => {
  return (
    <Card>
      <p>{pokemon.type}</p>
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
        alt={pokemon.name}
      />
      <p>{pokemon.name}</p>
      <StatBar label="HP" value={pokemon.hp} color="#4361ee" />
      <StatBar label="Attack" value={pokemon.attack} color="#e63946" />
    </Card>
  );
};

export default PokemonCard;
