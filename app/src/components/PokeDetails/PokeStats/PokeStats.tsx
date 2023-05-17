import { Stat } from "src/interfaces/PokeDetailsInterfaces";
import "src/components/PokeDetails/PokeStats/PokeStats.scss";
import { toTitleCase } from "src/functions/TextOperations";

type Props = { stats: Stat[] };

function PokeStats({ stats }: Props) {
  return (
    <div className="poke-stats">
      {stats.map((stat) => {
        return (
          <p key={stat.stat.name} data-testid="poke-stat">
            <span data-testid="poke-stat-name">
              {toTitleCase(stat.stat.name)}
            </span>
            : <span data-testid="poke-stat-value">{stat.base_stat}</span>
          </p>
        );
      })}
    </div>
  );
}

export default PokeStats;
