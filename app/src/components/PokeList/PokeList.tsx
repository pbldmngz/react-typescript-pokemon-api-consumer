import usePokeList from "./usePokeList";

function PokeList() {
  const { handleNext, handlePrevious, offset, lastPage, pokemonList } =
    usePokeList();
  console.log("displaying offset", offset, pokemonList[offset]);

  return (
    <div>
      This is the list
      <button onClick={handlePrevious} disabled={offset === 0}>
        Previous
      </button>
      <button onClick={handleNext} disabled={lastPage}>
        Next
      </button>
    </div>
  );
}

export default PokeList;
