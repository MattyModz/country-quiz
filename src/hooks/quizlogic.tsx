import { Country, ContextProps } from "../types/typings.d";

interface CountryResponse {
  data: {
    data: Country[];
  };
}

function fisherYatesShuffle<T>(array: T[]): T[] {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
}

function QuizLogic(response: CountryResponse, contextFunctions: ContextProps) {
  const {
    setCapital,
    setCountryName,
    setCountryiso,
    setLoading,
    setOptions,
    setSelectedOption,
    setAnswerFeedback,
  } = contextFunctions;

  const CountriesWithCapitals = response.data.data.filter(
    (country) => country.capital.trim() !== ""
  );

  const randomCountryIndex = Math.floor(
    Math.random() * CountriesWithCapitals.length
  );
  const randomCountry = CountriesWithCapitals[randomCountryIndex];

  const otherCountries = CountriesWithCapitals.filter(
    (country) => country.capital !== randomCountry.capital
  );

  const randomOtherCountries = fisherYatesShuffle(otherCountries).slice(0, 2);

  const answerOptions = fisherYatesShuffle([
    randomCountry.capital,
    ...randomOtherCountries.map((country) => country.capital),
  ]);

  setOptions(answerOptions);
  setCapital(randomCountry.capital);
  setCountryName(randomCountry.name);
  setCountryiso(randomCountry.iso2);
  setLoading(false);
  setSelectedOption(null);
  setAnswerFeedback(null);
}

export default QuizLogic;
