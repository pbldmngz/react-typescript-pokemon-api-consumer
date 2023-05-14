import { Link, useParams } from "react-router-dom";
import { RouteParams } from "src/interfaces/PokeDetailsInterfaces";
import PokeStats from "src/components/PokeDetails/PokeStats/PokeStats";
import usePokeDetails from "src/hooks/usePokeDetails";
import "src/components/PokeDetails/PokeDetails.scss";
import PokeProperties from "src/components/PokeDetails/PokeProperties/PokeProperties";

type Props = {};

function PokeDetails({}: Props) {
  const { name } = useParams() as RouteParams;
  const [pokemonDetail] = usePokeDetails(name);

  if (!pokemonDetail) {
    return (
      <div className="loading" data-testid="loading-element">
        <div className="lds-dual-ring" />
      </div>
    );
  }

  return (
    <div className="view">
      <div className="poke-details-container">
        <h1>{pokemonDetail.name}</h1>
        <div className="poke-details-content">
          <img
            className="poke-image"
            src={pokemonDetail.sprites.other["official-artwork"].front_default}
            alt={name}
          />
          <PokeStats stats={pokemonDetail.stats} />
          <PokeProperties
            properties={pokemonDetail.abilities}
            propertyName="ability"
          />
          <PokeProperties
            properties={pokemonDetail.moves}
            propertyName="move"
          />
        </div>
        <Link to="/home" className="poke-footer">
          Go back to the list
        </Link>
      </div>
    </div>
  );
}

export default PokeDetails;
