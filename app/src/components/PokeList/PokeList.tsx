import { useContext, useEffect, useState } from "react";
import { PokemonContext } from "src/components/PokeList/PokeListContext";

function PokeList() {
  const { pokemonList, setPokemonList, offset, setOffset } =
    useContext(PokemonContext);

  const [lastPage, setLastPage] = useState(false);

  const LIMIT = 20;

  useEffect(() => {
    if (!pokemonList[offset]) {
      fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${LIMIT}`)
        .then((response) => response.json())
        .then((data) => {
          if (data.next === null) {
            setLastPage(true);
          }
          setPokemonList([...pokemonList, data.results]);
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

  console.log("displaying offset", offset, pokemonList[offset]);

  return (
    <div>
      This is the list
      <button onClick={handlePrevious} disabled={offset === 0}>
        Previous
      </button>
      <button onClick={handleNext} disabled={lastPage}>
        Next
      </button>
    </div>
  );
}

export default PokeList;
