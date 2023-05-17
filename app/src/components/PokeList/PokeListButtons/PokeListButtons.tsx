import "src/components/PokeList/PokeListButtons/PokeListButtons.scss";
import { PokeListButtonsProps } from "src/interfaces/PokeListInterfaces";
import usePokeListButtons from "src/hooks/usePokeListButtons";
import { FIRST_PAGE } from "src/constants.json";

function PokeListButtons(props: PokeListButtonsProps) {
  const { offset, lastPage, handleNext, handlePrevious } = props;
  const { inputValue, handleInputChange, handleInputKeyPress } =
    usePokeListButtons(props);

  return (
    <div className="pokelist-buttons">
      <button onClick={handlePrevious} disabled={offset < FIRST_PAGE}>
        Previous
      </button>
      <input
        type="text"
        value={Number(inputValue) + FIRST_PAGE}
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
