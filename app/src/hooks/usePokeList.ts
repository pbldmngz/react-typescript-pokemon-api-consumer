import { useContext, useEffect, useRef, useState } from "react";
import { PokemonContext } from "src/components/PokeList/PokeListContext/PokeListContext";
import { PokemonListItem } from "src/interfaces/PokeListInterfaces";
import {
  ITEMS_PER_PAGE,
  LAST_PAGE_DEFAULT_VALUE,
  OFFSET_CHANGE,
  FIRST_PAGE,
} from "src/constants.json";

function usePokeList() {
  const {
    pokemonList,
    setPokemonList,
    offset,
    setOffset,
    imageCache,
    setImageCache,
  } = useContext(PokemonContext);

  const [lastPage, setLastPage] = useState(LAST_PAGE_DEFAULT_VALUE);
  const isFetching = useRef(false);

  const fetchData = async (pageOffset: number, isNextPage = false) => {
    if (lastPage !== LAST_PAGE_DEFAULT_VALUE && pageOffset > lastPage) return;
    if (isFetching.current) return;
    isFetching.current = true;

    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon?offset=${
          pageOffset * ITEMS_PER_PAGE
        }&limit=${ITEMS_PER_PAGE}`
      );
      const data = await response.json();
      isFetching.current = false;
      if (data.next === null) setLastPage(pageOffset);
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

    if (
      !pokemonList[offset + OFFSET_CHANGE] ||
      pokemonList[offset + OFFSET_CHANGE].length === 0
    ) {
      fetchData(offset + OFFSET_CHANGE, true);
    }
  }, [offset]);

  const handleNext = () => {
    setOffset((prevOffset) => prevOffset + OFFSET_CHANGE);
  };

  const handlePrevious = () => {
    if (offset >= FIRST_PAGE) {
      setOffset((prevOffset) => prevOffset - OFFSET_CHANGE);
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
