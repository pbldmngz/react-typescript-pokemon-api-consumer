import PokeListButtons from "src/components/PokeList/PokeListButtons/PokeListButtons";
import usePokeList from "src/components/PokeList/usePokeList";
import PokeListItem from "./PokeListItem/PokeListItem";

function PokeList() {
  const { handleNext, handlePrevious, offset, lastPage, pokemonList } =
    usePokeList();
  console.log("displaying offset", offset, pokemonList[offset]);

  if (!pokemonList[offset]) return <p>Loading...</p>;

  return (
    <div className="view">
      <div className="pokemon-list-container">
        <div className="pokemon-list">
          {pokemonList[offset].map((pokemon) => {
            return <PokeListItem {...pokemon} key={pokemon.name} />;
          })}
        </div>
        <PokeListButtons
          {...{ offset, lastPage, handleNext, handlePrevious }}
        />
      </div>
    </div>
  );
}

export default PokeList;
