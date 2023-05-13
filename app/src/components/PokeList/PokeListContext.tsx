import { ReactNode, createContext, useState } from "react";

// TODO: Fix this interface to avoid ugly any type
interface PokemonContextType {
  pokemonList: PokemonListObject;
  setPokemonList: React.Dispatch<React.SetStateAction<PokemonListObject>>;
  offset: number;
  setOffset: React.Dispatch<React.SetStateAction<number>>;
}

interface PokemonListObject {
  [key: number]: any[];
}

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
