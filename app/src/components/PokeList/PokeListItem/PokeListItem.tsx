import { useEffect, useState } from "react";
import { PokemonListItem } from "src/components/PokeList/PokeListInterfaces";

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
    <div>
      <p>{name}</p>
      <img src={spriteUrl} alt={name} />
    </div>
  );
}

export default PokeListItem;
