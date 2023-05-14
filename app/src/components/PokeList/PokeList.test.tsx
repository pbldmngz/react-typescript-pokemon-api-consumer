import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import PokeList from "./PokeList";

describe("<PokeList />", () => {
  test("<PokeList /> renders the loading state", () => {
    render(<PokeList />);
    const loadingElement = screen.getByTestId("loading-element");
    expect(loadingElement).toBeInTheDocument();
  });
});
