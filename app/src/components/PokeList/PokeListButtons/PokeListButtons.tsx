import "src/components/PokeList/PokeListButtons/PokeListButtons.scss";
import { PokeListButtonsProps } from "src/components/PokeList/PokeListInterfaces";
import usePokeListButtons from "src/components/PokeList/PokeListButtons/usePokeListButtons";

function PokeListButtons(props: PokeListButtonsProps) {
  const { offset, lastPage, handleNext, handlePrevious } = props;
  const { inputValue, handleInputChange, handleInputKeyPress } =
    usePokeListButtons(props);

  return (
    <div className="pokelist-buttons">
      <button onClick={handlePrevious} disabled={offset === 0}>
        Previous
      </button>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleInputKeyPress}
      />
      <button onClick={handleNext} disabled={offset === lastPage}>
        Next
      </button>
    </div>
  );
}

export default PokeListButtons;
