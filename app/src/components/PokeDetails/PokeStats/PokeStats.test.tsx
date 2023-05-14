import { render } from "@testing-library/react";
import PokeStats from "src/components/PokeDetails/PokeStats/PokeStats";
import { toTitleCase } from "src/functions/TextOperations";
import "@testing-library/jest-dom/extend-expect";

describe("<PokeStats />", () => {
  it("renders the correct number of stat elements", () => {
    const mockStats = [
      { stat: { name: "hp" }, base_stat: 80 },
      { stat: { name: "attack" }, base_stat: 100 },
      { stat: { name: "defense" }, base_stat: 70 },
    ];

    const { getAllByTestId } = render(<PokeStats stats={mockStats} />);
    const statElements = getAllByTestId("poke-stat");

    expect(statElements.length).toBe(mockStats.length);
  });

  it("displays the correct stat name and base stat value", () => {
    const mockStats = [
      { stat: { name: "hp" }, base_stat: 80 },
      { stat: { name: "attack" }, base_stat: 100 },
      { stat: { name: "defense" }, base_stat: 70 },
    ];

    const { queryAllByTestId } = render(<PokeStats stats={mockStats} />);

    mockStats.forEach((stat, index) => {
      const statName = queryAllByTestId("poke-stat-name")[index];
      const baseStatValue = queryAllByTestId("poke-stat-value")[index];

      expect(statName).toHaveTextContent(toTitleCase(stat.stat.name));
      expect(baseStatValue).toHaveTextContent(stat.base_stat.toString());
    });
  });
});
