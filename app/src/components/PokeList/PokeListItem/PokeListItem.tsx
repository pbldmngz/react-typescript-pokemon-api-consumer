import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { PokemonListItem } from "src/components/PokeList/PokeListInterfaces";
import "src/components/PokeList/PokeListItem/PokeListItem.scss";
import { toTitleCase } from "src/functions/TextOperations";

function PokeListItem({ name, url }: PokemonListItem) {
  const [spriteUrl, setSpriteUrl] = useState("");

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (data?.sprites?.front_default) {
          setSpriteUrl(data.sprites.front_default);
        }
      });
  }, [url]);

  return (
    <Link to={`/pokemon/${name}`} className="poke-list-item">
      {spriteUrl ? <img src={spriteUrl} /> : <div className="dummy-image" />}
      <p>{toTitleCase(name)}</p>
    </Link>
  );
}

export default PokeListItem;
