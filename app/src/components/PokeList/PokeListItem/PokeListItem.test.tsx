import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import PokeListItem from "./PokeListItem";
import { PokemonListItem } from "../PokeListInterfaces";

describe("<PokeListItem />", () => {
  it("renders the pokemon name", () => {
    const mockPokemon: PokemonListItem = {
      name: "pikachu",
      url: "https://pokeapi.co/api/v2/pokemon/25/",
    };

    const { getByText } = render(<PokeListItem {...mockPokemon} />);

    expect(getByText(/pikachu/i)).toBeInTheDocument();
  });
});
