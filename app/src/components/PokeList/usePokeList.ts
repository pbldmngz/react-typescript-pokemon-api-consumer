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
          setLastPage(data.next === null);
          setPokemonList({ ...pokemonList, [offset]: data.results });
        });
    }
  }, [offset]);

  const handleNext = () => {
    setOffset((prevOffset) => prevOffset + 1);
  };

  const handlePrevious = () => {
    if (offset >= 1) {
      setOffset((prevOffset) => prevOffset - 1);
    }
  };

  return {
    handleNext,
    handlePrevious,
    offset,
    setOffset,
    lastPage,
    pokemonList,
  };
}

export default usePokeList;
