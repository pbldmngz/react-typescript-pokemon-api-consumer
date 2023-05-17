import { useEffect, useState } from "react";
import { toTitleCase } from "src/functions/TextOperations";
import { FlavorTextEntry } from "src/interfaces/PokeDetailsInterfaces";
import "src/components/PokeDetails/PokeProperties/PokeProperties.scss";

type Props = { name: string; url: string };

function PropertySlot({ name, url }: Props) {
  const [propertyDetail, setPropertyDetail] = useState("");

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (data.flavor_text_entries) {
          setPropertyDetail(
            data.flavor_text_entries.find(
              (entry: FlavorTextEntry) => entry.language.name === "en"
            ).flavor_text
          );
        } else if (data.effect_entries) {
          setPropertyDetail(
            data.effect_entries.find(
              (entry: FlavorTextEntry) => entry.language.name === "en"
            ).effect
          );
        }
      });
  }, [name]);

  return (
    <div className="property-slot">
      <p className="property-name">{toTitleCase(name)}</p>
      <p className="property-detail">{propertyDetail}</p>
    </div>
  );
}

export default PropertySlot;
