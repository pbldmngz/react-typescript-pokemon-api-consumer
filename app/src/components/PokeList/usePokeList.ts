import { useContext, useEffect, useState } from "react";
import { PokemonContext } from "src/components/PokeList/PokeListContext";

function usePokeList() {
  const { pokemonList, setPokemonList, offset, setOffset } =
    useContext(PokemonContext);

  const [lastPage, setLastPage] = useState(false);

  const LIMIT = 21;

  useEffect(() => {
    if (!pokemonList[offset]) {
      fetch(
        `https://pokeapi.co/api/v2/pokemon?offset=${
          offset * LIMIT
        }&limit=${LIMIT}`
      )
        .then((response) => response.json())
        .then((data) => {
          if (data.next === null) {
            setLastPage(true);
          }
          setPokemonList({ ...pokemonList, [offset]: data.results });
        });
    }
  }, [offset]);

  console.log(pokemonList);

  const handleNext = () => {
    setOffset((prevOffset) => prevOffset + 1);
  };

  const handlePrevious = () => {
    if (offset >= 1) {
      setOffset((prevOffset) => prevOffset - 1);
    }
  };

  return { handleNext, handlePrevious, offset, lastPage, pokemonList };
}

export default usePokeList;
