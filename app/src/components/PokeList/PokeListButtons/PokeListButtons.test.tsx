import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import PokeListButtons from "src/components/PokeList/PokeListButtons/PokeListButtons";
import { PokeListButtonsProps } from "src/components/PokeList/PokeListInterfaces";

describe("<PokeListButtons />", () => {
  it("renders the next button", () => {
    const mockProps: PokeListButtonsProps = {
      offset: 0,
      lastPage: false,
      handleNext: jest.fn(),
      handlePrevious: jest.fn(),
      setOffset: jest.fn(),
    };

    const { getByText } = render(<PokeListButtons {...mockProps} />);

    expect(getByText(/next/i)).toBeInTheDocument();
  });

  it("calls handleNext when next button is clicked and it;s not sitting on the last page", () => {
    const mockProps: PokeListButtonsProps = {
      offset: 0,
      lastPage: false,
      handleNext: jest.fn(),
      handlePrevious: jest.fn(),
      setOffset: jest.fn(),
    };

    const { getByText } = render(<PokeListButtons {...mockProps} />);
    fireEvent.click(getByText(/next/i));

    expect(mockProps.handleNext).toHaveBeenCalledTimes(1);
  });

  it("does not call handleNext when next button is clicked and is sitting on the last page", () => {
    const mockProps: PokeListButtonsProps = {
      offset: 0,
      lastPage: true, // Set lastPage to true
      handleNext: jest.fn(),
      handlePrevious: jest.fn(),
      setOffset: jest.fn(),
    };

    const { getByText } = render(<PokeListButtons {...mockProps} />);
    fireEvent.click(getByText(/next/i));

    expect(mockProps.handleNext).not.toHaveBeenCalled();
  });

  it("calls handlePrevious when previous button is clicked and not sitting on the first page", () => {
    const mockProps: PokeListButtonsProps = {
      offset: 10, // Replace with the desired offset value
      lastPage: false,
      handleNext: jest.fn(),
      handlePrevious: jest.fn(),
      setOffset: jest.fn(),
    };

    const { getByText } = render(<PokeListButtons {...mockProps} />);
    fireEvent.click(getByText(/previous/i));

    expect(mockProps.handlePrevious).toHaveBeenCalledTimes(1);
  });

  it("does not call handlePrevious if sitting on the first page", () => {
    const mockProps: PokeListButtonsProps = {
      offset: 0,
      lastPage: false,
      handleNext: jest.fn(),
      handlePrevious: jest.fn(),
      setOffset: jest.fn(),
    };

    const { getByText } = render(<PokeListButtons {...mockProps} />);
    fireEvent.click(getByText(/previous/i));

    expect(mockProps.handlePrevious).not.toHaveBeenCalled();
  });
});
