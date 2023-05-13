export interface PokemonDetailProps {
  name: string;
  sprites: {
    front_default: string;
    other: {
      dream_world: {
        front_default: string;
      };
    };
  };
  stats: Stats[];
}

export interface RouteParams {
  [key: string]: string | undefined;
  name: string;
}

export interface Stats {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  };
}
