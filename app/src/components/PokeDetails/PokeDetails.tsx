import { useParams } from "react-router-dom";
import { RouteParams } from "src/components/PokeDetails/PokeDetailsInterfaces.ts";
import PokeStats from "src/components/PokeDetails/PokeStats/PokeStats";
import usePokeDetails from "./usePokeDetails";

type Props = {};

function PokeDetails({}: Props) {
  const { name } = useParams() as RouteParams;
  const [pokemonDetail] = usePokeDetails(name);

  if (!pokemonDetail) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{name}</h1>
      <img
        src={pokemonDetail.sprites.other.dream_world.front_default}
        alt={name}
      />
      <PokeStats stats={pokemonDetail.stats} />
    </div>
  );
}

export default PokeDetails;
