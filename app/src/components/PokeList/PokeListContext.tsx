import { ReactNode, createContext, useState } from "react";
import {
  PokemonContextType,
  PokemonListObject,
} from "src/components/PokeList/PokeListInterfaces";

export const PokemonContext = createContext<PokemonContextType>({
  pokemonList: [],
  setPokemonList: () => {},
  setImageCache: () => {},
  offset: 0,
  setOffset: () => {},
  imageCache: {},
});

export function PokemonProvider({ children }: { children: ReactNode }) {
  const [pokemonList, setPokemonList] = useState<PokemonListObject>({});
  const [imageCache, setImageCache] = useState<{
    [url: string]: HTMLImageElement;
  }>({});
  const [offset, setOffset] = useState<number>(0);

  return (
    <PokemonContext.Provider
      value={{
        pokemonList,
        setPokemonList,
        setImageCache,
        imageCache,
        offset,
        setOffset,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
}
