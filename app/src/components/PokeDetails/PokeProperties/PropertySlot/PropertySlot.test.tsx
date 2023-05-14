import { render, waitFor } from "@testing-library/react";
import PropertySlot from "src/components/PokeDetails/PokeProperties/PropertySlot/PropertySlot";
import "@testing-library/jest-dom/extend-expect";

describe("<PropertySlot />", () => {
  beforeEach(() => {
    jest.spyOn(global, "fetch").mockImplementation(async (url) => {
      if (typeof url === "string" && url.includes("overgrow")) {
        return {
          json: async () => ({
            flavor_text_entries: [
              {
                language: { name: "en" },
                flavor_text: "Mock flavor text",
              },
            ],
          }),
        } as Response;
      } else {
        throw new Error("Invalid URL");
      }
    });
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("renders the property name and detail", async () => {
    const mockProperty = {
      name: "overgrow",
      url: "https://example.com/property/overgrow",
    };

    const { getByText } = render(<PropertySlot {...mockProperty} />);

    await waitFor(() => {
      const propertyName = getByText("Overgrow");
      const propertyDetail = getByText("Mock flavor text");

      expect(propertyName).toBeInTheDocument();
      expect(propertyDetail).toBeInTheDocument();
    });
  });
});
