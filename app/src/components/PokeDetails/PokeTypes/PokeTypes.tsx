import PokeTypesItem from "src/components/PokeDetails/PokeTypes/PokeTypesItem/PokeTypesItem";
import "src/components/PokeDetails/PokeTypes/PokeTypes.scss";
import { Type } from "src/interfaces/PokeDetailsInterfaces";

const types = [
  "normal",
  "fire",
  "water",
  "electric",
  "grass",
  "ice",
  "rock",
  "ground",
  "poison",
  "flying",
  "psychic",
  "bug",
  "ghost",
  "dark",
  "steel",
  "dragon",
  "fairy",
  "fighting",
];

interface PokemonTypeMatrixProps {
  activeTypes: Type[];
}

function PokeTypes({ activeTypes }: PokemonTypeMatrixProps) {
  const availableTypes = activeTypes.map((type: Type) => {
    return type.type.name;
  });

  return (
    <div className="matrix">
      {types.map((type) => (
        <PokeTypesItem
          key={type}
          type={type}
          active={availableTypes.includes(type)}
        />
      ))}
    </div>
  );
}

export default PokeTypes;
