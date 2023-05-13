import { useEffect, useState } from "react";
import { PokemonDetailProps } from "./PokeDetailsInterfaces";

function usePokeDetails(name: string) {
  const [pokemonDetail, setPokemonDetail] = useState<PokemonDetailProps | null>(
    null
  );

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`)
      .then((response) => response.json())
      .then((data) => setPokemonDetail(data));
  }, [name]);

  useEffect(() => {
    console.log(pokemonDetail);
  }, [pokemonDetail]);

  return [pokemonDetail];
}

export default usePokeDetails;
