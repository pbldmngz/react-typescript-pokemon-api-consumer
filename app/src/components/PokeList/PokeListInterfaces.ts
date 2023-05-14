export interface PokemonContextType {
  pokemonList: PokemonListObject;
  imageCache: { [url: string]: HTMLImageElement };
  setPokemonList: React.Dispatch<React.SetStateAction<PokemonListObject>>;
  setImageCache: React.Dispatch<
    React.SetStateAction<{ [url: string]: HTMLImageElement }>
  >;
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
