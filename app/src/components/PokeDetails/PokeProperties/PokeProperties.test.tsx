import { render, screen, waitFor } from "@testing-library/react";
import PokeProperties from "src/components/PokeDetails/PokeProperties/PokeProperties";
import fetchMock from "jest-fetch-mock";
import { toTitleCase } from "src/functions/TextOperations";
import { act } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

describe("<PokeProperties />", () => {
  beforeEach(() => {
    jest.spyOn(window, "fetch").mockResolvedValue({
      json: async () => ({
        flavor_text_entries: [
          {
            language: { name: "en" },
            flavor_text: "Mock flavor text",
          },
        ],
      }),
    } as Response);
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("renders the correct number of property rows", async () => {
    const mockProperties = [
      { ability: { name: "overgrow", url: "https://example.com/ability/1" } },
      {
        ability: { name: "chlorophyll", url: "https://example.com/ability/2" },
      },
      {
        ability: { name: "solar-power", url: "https://example.com/ability/3" },
      },
    ];

    // Mock the API responses
    fetchMock.mockResponseOnce(
      JSON.stringify({
        flavor_text_entries: [
          { language: { name: "en" }, flavor_text: "Mock flavor text 1" },
        ],
      })
    );
    fetchMock.mockResponseOnce(
      JSON.stringify({
        flavor_text_entries: [
          { language: { name: "en" }, flavor_text: "Mock flavor text 2" },
        ],
      })
    );
    fetchMock.mockResponseOnce(
      JSON.stringify({
        flavor_text_entries: [
          { language: { name: "en" }, flavor_text: "Mock flavor text 3" },
        ],
      })
    );

    render(
      <PokeProperties properties={mockProperties} propertyName="ability" />
    );

    await waitFor(() => {
      const propertyRows = screen.getAllByTestId("property-row");
      expect(propertyRows.length).toBe(mockProperties.length);
    });
  });

  it("displays the correct property index, name, and detail", async () => {
    const mockProperties = [
      { ability: { name: "overgrow" } },
      { ability: { name: "chlorophyll" } },
      { ability: { name: "solar-power" } },
    ];

    render(
      <PokeProperties properties={mockProperties} propertyName="ability" />
    );

    await waitFor(() => {
      mockProperties.forEach((property, index) => {
        act(() => {
          const propertyIndex = screen.getByText((index + 1).toString());
          const propertyName = screen.getByText(
            toTitleCase(property.ability.name)
          );

          expect(propertyIndex).toBeInTheDocument();
          expect(propertyName).toBeInTheDocument();
        });
      });
    });
  });
});
