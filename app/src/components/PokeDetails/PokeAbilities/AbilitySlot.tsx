import React, { useEffect, useState } from "react";
import { toTitleCase } from "src/functions/TextOperations";
import { FlavorTextEntries } from "src/components/PokeDetails/PokeDetailsInterfaces.ts";

type Props = { name: string; url: string };

function AbilitySlot({ name, url }: Props) {
  const [abilityEffect, setAbilityEffect] = useState("");

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) =>
        setAbilityEffect(
          data.flavor_text_entries.find(
            (entry: FlavorTextEntries) => entry.language.name === "en"
          ).flavor_text
        )
      );
  }, [name]);

  return (
    <div className="ability-slot">
      <p className="ability-name">{toTitleCase(name)}</p>
      <p className="ability-effect">{abilityEffect}</p>
    </div>
  );
}

export default AbilitySlot;
