import { ReactNode, createContext, useState } from "react";

// TODO: Fix this interface to avoid ugly any type
interface PokemonContextType {
  pokemonList: any[];
  setPokemonList: React.Dispatch<React.SetStateAction<any[]>>;
  offset: number;
  setOffset: React.Dispatch<React.SetStateAction<number>>;
}

export const PokemonContext = createContext<PokemonContextType>({
  pokemonList: [],
  setPokemonList: () => {},
  offset: 0,
  setOffset: () => {},
});

export function PokemonProvider({ children }: { children: ReactNode }) {
  const [pokemonList, setPokemonList] = useState<any[]>([]);
  const [offset, setOffset] = useState<number>(0);

  return (
    <PokemonContext.Provider
      value={{ pokemonList, setPokemonList, offset, setOffset }}
    >
      {children}
    </PokemonContext.Provider>
  );
}
