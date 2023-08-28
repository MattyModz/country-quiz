import QuizLogic from "../hooks/quizlogic";

describe("QuizLogic", () => {
  const contextFunctions = {
    setOptions: jest.fn(),
    setCapital: jest.fn(),
    setCountryName: jest.fn(),
    setCountryiso: jest.fn(),
    setLoading: jest.fn(),
    setSelectedOption: jest.fn(),
    setAnswerFeedback: jest.fn(),
  };

  it("correctly updates states", () => {
    const response = {
      data: {
        data: [
          { name: "Country1", capital: "Capital1", iso2: "ISO1" },
          { name: "Country2", capital: "Capital2", iso2: "ISO2" },
        ],
      },
    };

    QuizLogic(response, contextFunctions);

    expect(contextFunctions.setOptions).toHaveBeenCalledTimes(1);
    expect(contextFunctions.setCapital).toHaveBeenCalledTimes(1);
    expect(contextFunctions.setCountryName).toHaveBeenCalledTimes(1);
    expect(contextFunctions.setCountryiso).toHaveBeenCalledTimes(1);

    expect(contextFunctions.setSelectedOption).toHaveBeenCalledTimes(1);
    expect(contextFunctions.setAnswerFeedback).toHaveBeenCalledTimes(1);
  });

  it("should not have empty strings in options", () => {
    const response = {
      data: {
        data: [
          { name: "Country1", capital: "Capital1", iso2: "ISO1" },
          { name: "Country2", capital: "Capital2", iso2: "ISO2" }, // Empty capital
        ],
      },
    };

    QuizLogic(response, contextFunctions);

    const setOptionsArgs = contextFunctions.setOptions.mock.calls[0][0];

    const hasEmptyString = setOptionsArgs.some(
      (option) => option.trim() === ""
    );

    console.log(setOptionsArgs);

    expect(hasEmptyString).toBe(false);
  });

  it("should have unique options", () => {
    const response = {
      data: {
        data: [
          { name: "Country1", capital: "Capital1", iso2: "ISO1" },
          { name: "Country2", capital: "Capital2", iso2: "ISO2" },
          { name: "Country3", capital: "Capital3", iso2: "ISO3" },
        ],
      },
    };

    QuizLogic(response, contextFunctions);

    const setOptionsArgs = contextFunctions.setOptions.mock.calls[0][0];

    const optionsSet = new Set(setOptionsArgs);

    console.log(setOptionsArgs);

    expect(optionsSet.size).toBe(setOptionsArgs.length);
  });
});
