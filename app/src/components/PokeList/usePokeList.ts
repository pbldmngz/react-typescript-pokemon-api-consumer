import { useContext, useEffect, useRef, useState } from "react";
import { PokemonContext } from "src/components/PokeList/PokeListContext";
import { PokemonListItem } from "src/components/PokeList/PokeListInterfaces";

function usePokeList() {
  const {
    pokemonList,
    setPokemonList,
    offset,
    setOffset,
    imageCache,
    setImageCache,
  } = useContext(PokemonContext);
  const [lastPage, setLastPage] = useState(false);
  const isFetching = useRef(false);
  const LIMIT = 21;

  const fetchData = async (pageOffset: number, isNextPage = false) => {
    if (isFetching.current) return;
    isFetching.current = true;

    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon?offset=${
          pageOffset * LIMIT
        }&limit=${LIMIT}`
      );
      const data = await response.json();
      isFetching.current = false;
      setLastPage(data.next === null);
      setPokemonList((prevList) => ({
        ...prevList,
        [pageOffset]: data.results,
      }));

      if (isNextPage) {
        preloadImages(data.results);
      }
    } catch (error) {
      console.error(error);
      isFetching.current = false;
    }
  };

  const preloadImages = (pokemonList: PokemonListItem[]) => {
    const newImageCache = { ...imageCache };

    pokemonList.forEach((pokemon: PokemonListItem) => {
      const url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
        pokemon.url.split("/")[6]
      }.png`;
      const img = new Image();
      img.onload = () => {
        newImageCache[url] = img;
        setImageCache({ ...newImageCache });
      };
      img.src = url;
    });
  };

  useEffect(() => {
    if (!pokemonList[offset] || pokemonList[offset].length === 0) {
      fetchData(offset);
    }

    if (!pokemonList[offset + 1] || pokemonList[offset + 1].length === 0) {
      fetchData(offset + 1, true);
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
