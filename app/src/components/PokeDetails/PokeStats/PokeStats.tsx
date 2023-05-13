import { Stats } from "src/components/PokeDetails/PokeDetailsInterfaces";
import "src/components/PokeDetails/PokeStats/PokeStats.scss";
import { toTitleCase } from "src/functions/TextOperations";

type Props = { stats: Stats[] };

function PokeStats({ stats }: Props) {
  return (
    <div className="poke-stats">
      {stats.map((stat) => {
        return (
          <p key={stat.stat.name}>
            {toTitleCase(stat.stat.name)}: {stat.base_stat}
          </p>
        );
      })}
    </div>
  );
}

export default PokeStats;
