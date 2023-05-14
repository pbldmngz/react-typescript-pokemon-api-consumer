import "src/components/PokeDetails/PokeTypes/PokeTypesItem/PokeTypesItem.scss";
import { toTitleCase } from "src/functions/TextOperations";

interface PokemonTypeSphereProps {
  type: string;
  active: boolean;
}

function PokeTypesItem({ type, active }: PokemonTypeSphereProps) {
  const classes = `sphere ${type} ${active ? "active" : "inactive"}`;

  return <div className={classes} title={toTitleCase(type)}></div>;
}

export default PokeTypesItem;
