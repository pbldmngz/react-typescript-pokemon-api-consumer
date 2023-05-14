import React, { useEffect, useState } from "react";
import { PokeListButtonsProps } from "src/interfaces/PokeListInterfaces";

function usePokeListButtons({ offset, setOffset }: PokeListButtonsProps) {
  const [inputValue, setInputValue] = useState(offset.toString());

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleInputKeyPress = (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key === "Enter") {
      const newOffset = Number(inputValue);
      if (!isNaN(newOffset) && newOffset >= 0) {
        setOffset(newOffset);
      }
    }
  };

  useEffect(() => {
    setInputValue(offset.toString());
  }, [offset]);

  return { inputValue, handleInputChange, handleInputKeyPress };
}

export default usePokeListButtons;
