import "src/components/PokeDetails/PokeAbilities/PokeAbilities.scss";
import { Abilities } from "src/components/PokeDetails/PokeDetailsInterfaces";
import AbilitySlot from "src/components/PokeDetails/PokeAbilities/AbilitySlot";

type Props = { abilities: Abilities[] };

function PokeAbilities({ abilities }: Props) {
  return (
    <div className="ability-container">
      {abilities.map((ability) => {
        return (
          <div className="ability-row">
            <p className="slot">{ability.slot}</p>
            <AbilitySlot {...ability.ability} key={ability.ability.name} />
          </div>
        );
      })}
    </div>
  );
}

export default PokeAbilities;
