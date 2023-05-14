import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { PokemonListItem } from "src/interfaces/PokeListInterfaces";
import { PokemonContext } from "src/components/PokeList/PokeListContext/PokeListContext";
import "src/components/PokeList/PokeListItem/PokeListItem.scss";
import { toTitleCase } from "src/functions/TextOperations";

function PokeListItem({ name, url }: PokemonListItem) {
  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
    url.split("/")[6]
  }.png`;

  const { imageCache, setImageCache } = useContext(PokemonContext);
  const [loadedImage, setLoadedImage] = useState<HTMLImageElement | null>(null);

  useEffect(() => {
    const cachedImage = imageCache[imageUrl];
    if (cachedImage) {
      setLoadedImage(cachedImage);
    } else {
      const img = new Image();
      img.onload = () => {
        setImageCache((prevCache) => ({ ...prevCache, [imageUrl]: img }));
        setLoadedImage(img);
      };
      img.src = imageUrl;
    }
  }, [imageCache]);

  if (!loadedImage) {
    return (
      <div className="poke-list-item">
        <div className="dummy-image"></div>
        <p>{toTitleCase(name)}</p>
      </div>
    );
  }

  return (
    <Link to={`/pokemon/${name}`} className="poke-list-item">
      <img src={loadedImage.src} />
      <p>{toTitleCase(name)}</p>
    </Link>
  );
}

export default PokeListItem;
