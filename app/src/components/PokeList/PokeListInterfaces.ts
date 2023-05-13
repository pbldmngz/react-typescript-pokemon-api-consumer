export interface PokemonContextType {
  pokemonList: PokemonListObject;
  setPokemonList: React.Dispatch<React.SetStateAction<PokemonListObject>>;
  offset: number;
  setOffset: React.Dispatch<React.SetStateAction<number>>;
}

export interface PokemonListObject {
  [key: number]: PokemonListItem[];
}

export interface PokemonListItem {
  name: string;
  url: string;
}

export interface usePokeListReturnType {
  pokemonList: PokemonListObject;
  offset: number;
  lastPage: boolean;
  handleNext: () => void;
  handlePrevious: () => void;
}

export interface PokeListButtonsProps {
  offset: number;
  setOffset: React.Dispatch<React.SetStateAction<number>>;
  lastPage: boolean;
  handleNext: () => void;
  handlePrevious: () => void;
}
