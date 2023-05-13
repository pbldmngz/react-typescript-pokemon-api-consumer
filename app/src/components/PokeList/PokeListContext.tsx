import { ReactNode, createContext, useState } from "react";
import {
  PokemonContextType,
  PokemonListObject,
} from "src/components/PokeList/PokeListInterfaces";

export const PokemonContext = createContext<PokemonContextType>({
  pokemonList: [],
  setPokemonList: () => {},
  offset: 0,
  setOffset: () => {},
});

export function PokemonProvider({ children }: { children: ReactNode }) {
  const [pokemonList, setPokemonList] = useState<PokemonListObject>({});
  const [offset, setOffset] = useState<number>(0);

  return (
    <PokemonContext.Provider
      value={{ pokemonList, setPokemonList, offset, setOffset }}
    >
      {children}
    </PokemonContext.Provider>
  );
}
