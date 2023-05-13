import { ReactNode, createContext, useState } from "react";

// TODO: Fix this interface to avoid ugly any type
interface PokemonContextType {
  pokemonList: any[];
  setPokemonList: (pokemonList: any[]) => void;
}

export const PokemonContext = createContext<PokemonContextType>({
  pokemonList: [],
  setPokemonList: () => {},
});

export function PokemonProvider({ children }: { children: ReactNode }) {
  const [pokemonList, setPokemonList] = useState<any[]>([]);

  return (
    <PokemonContext.Provider value={{ pokemonList, setPokemonList }}>
      {children}
    </PokemonContext.Provider>
  );
}
