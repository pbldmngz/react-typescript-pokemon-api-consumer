type Props = {
  offset: number;
  lastPage: boolean;
  handleNext: () => void;
  handlePrevious: () => void;
};

function PokeListButtons({
  offset,
  lastPage,
  handlePrevious,
  handleNext,
}: Props) {
  return (
    <div>
      <button onClick={handlePrevious} disabled={offset === 0}>
        Previous
      </button>
      <p>Page: {offset}</p>
      <button onClick={handleNext} disabled={lastPage}>
        Next
      </button>
    </div>
  );
}

export default PokeListButtons;
