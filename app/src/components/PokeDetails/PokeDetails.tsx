import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  RouteParams,
  PokemonDetailProps,
} from "Components/PokeDetails/PokeDetailsInterfaces.ts";

type Props = {};

function PokeDetails({}: Props) {
  const { name } = useParams() as RouteParams;
  const [pokemonDetail, setPokemonDetail] = useState<PokemonDetailProps | null>(
    null
  );

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((response) => response.json())
      .then((data) => setPokemonDetail(data));
  }, [name]);

  useEffect(() => {
    console.log(pokemonDetail);
  }, [pokemonDetail]);

  return <div>PokeDetails</div>;
}

export default PokeDetails;
