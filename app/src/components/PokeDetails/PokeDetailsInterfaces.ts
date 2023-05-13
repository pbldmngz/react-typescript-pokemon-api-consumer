export interface PokemonDetailProps {
  name: string;
  sprites: {
    front_default: string;
  };
}

export interface RouteParams {
  [key: string]: string | undefined;
  name: string;
}
