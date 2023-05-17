export interface PokemonDetailProps {
  name: string;
  sprites: {
    front_default: string;
    other: {
      "official-artwork": {
        front_default: string;
      };
    };
  };
  stats: Stat[];
  abilities: Ability[];
  moves: Move[];
  types: Type[];
}

export interface RouteParams {
  [key: string]: string | undefined;
  name: string;
}

export interface Stat {
  base_stat: number;
  effort?: number;
  stat: {
    name: string;
    url?: string;
  };
}

export interface Ability {
  ability: {
    name: string;
    url: string;
  };
  is_hidden: boolean;
  slot: number;
}

export interface FlavorTextEntry {
  flavor_text: string;
  language: {
    name: string;
    url: string;
  };
  version_group: {
    name: string;
    url: string;
  };
}

export interface Move {
  move: {
    name: string;
    url: string;
  };
  version_group_details: VersionGroupDetails[];
}

export interface VersionGroupDetails {
  level_learned_at: number;
  move_learn_method: {
    name: string;
    url: string;
  };
  version_group: {
    name: string;
    url: string;
  };
}

export interface Type {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}
