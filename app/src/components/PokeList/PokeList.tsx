import PokeListButtons from "src/components/PokeList/PokeListButtons/PokeListButtons";
import usePokeList from "src/components/PokeList/usePokeList";
import PokeListItem from "src/components/PokeList/PokeListItem/PokeListItem";
import "src/components/PokeList/PokeList.scss";

function PokeList() {
  const {
    handleNext,
    handlePrevious,
    offset,
    setOffset,
    lastPage,
    pokemonList,
  } = usePokeList();

  if (!pokemonList[offset]) return <p>Loading...</p>;

  return (
    <div className="view">
      <div>
        <div className="pokemon-list">
          {pokemonList[offset].map((pokemon) => {
            return <PokeListItem {...pokemon} key={pokemon.name} />;
          })}
        </div>
        <PokeListButtons
          {...{ offset, setOffset, lastPage, handleNext, handlePrevious }}
        />
      </div>
    </div>
  );
}

export default PokeList;
