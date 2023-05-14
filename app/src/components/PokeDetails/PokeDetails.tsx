import { Link, useParams } from "react-router-dom";
import { RouteParams } from "src/interfaces/PokeDetailsInterfaces";
import PokeStats from "src/components/PokeDetails/PokeStats/PokeStats";
import usePokeDetails from "src/hooks/usePokeDetails";
import "src/components/PokeDetails/PokeDetails.scss";
import PokeProperties from "src/components/PokeDetails/PokeProperties/PokeProperties";
import PokeTypes from "./PokeTypes/PokeTypes";

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
    <div className="view background-pattern">
      <div className="poke-details-container background-pattern">
        <h1>{pokemonDetail.name}</h1>
        <div className="poke-details-content">
          <img
            className="poke-image background-pattern2"
            src={pokemonDetail.sprites.other["official-artwork"].front_default}
            alt={name}
          />
          <PokeStats stats={pokemonDetail.stats} />
          <div className="quarter-size vertical-divider">
            <div className="vertical-divider-top">
              <PokeProperties
                properties={pokemonDetail.abilities}
                propertyName="ability"
              />
            </div>
            <div className="vertical-divider-bottom">
              <PokeTypes activeTypes={pokemonDetail.types} />
            </div>
          </div>
          <div className="quarter-size">
            <PokeProperties
              properties={pokemonDetail.moves}
              propertyName="move"
            />
          </div>
        </div>
        <Link to="/home" className="poke-footer">
          Go back to the list
        </Link>
      </div>
    </div>
  );
}

export default PokeDetails;
