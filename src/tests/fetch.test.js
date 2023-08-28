import axios from "axios";
import mockAxios from "axios";
import { Fetchcountry } from "../hooks/FetchCountryData";
import { toast } from "react-hot-toast";

jest.mock("axios");
jest.mock("react-hot-toast");

const url = "https://countriesnow.space/api/v0.1/countries/capital";

const setLoading = jest.fn();
const setError = jest.fn();
const contextFunctions = {
  setOptions: jest.fn(),
  setCapital: jest.fn(),
  setCountryName: jest.fn(),
  setCountryiso: jest.fn(),
  setLoading: jest.fn(),
  setSelectedOption: jest.fn(),
  setAnswerFeedback: jest.fn(),
};

describe("Fetchcountry function", () => {
  afterEach(jest.clearAllMocks);
  it("fetches and stores country data in localStorage", async () => {
    const mockData = {
      error: false,
      msg: "countries and capitals retrieved",
      data: [
        {
          name: "Country1",
          capital: "Capital1",
          iso2: "ISO1",
          iso3: "ISO3",
        },
        {
          name: "Country2",
          capital: "Capital2",
          iso2: "ISO2",
          iso3: "ISO4",
        },
      ],
    };

    localStorage.clear();
    mockAxios.get.mockResolvedValueOnce({ data: mockData });

    const mockCancelTokenSource = {
      token: "mock-token",
      cancel: jest.fn(),
    };
    axios.CancelToken.source.mockReturnValue(mockCancelTokenSource);

    await Fetchcountry(setLoading, setError, contextFunctions, url);

    const storedDataJSON = localStorage.getItem("randomCountryData");
    const storedData = JSON.parse(storedDataJSON);

    expect(mockAxios.get).toHaveBeenCalledTimes(1);
    expect(storedData.data.data).toEqual(mockData.data);
    expect(setLoading).toHaveBeenCalledWith(true);
    expect(setLoading).toHaveBeenCalledWith(false);
    expect(setError).not.toHaveBeenCalled();
    expect(toast.error).not.toHaveBeenCalled();
  });

  it("displays an error toast on data fetch error", async () => {
    const errorMsg = "An unexpected error occurred. Please try again later.";
    const errorResponse = {
      error: true,
      msg: errorMsg,
      data: [""],
    };
    localStorage.clear();
    axios.get.mockResolvedValueOnce({ data: errorResponse });

    await Fetchcountry(setLoading, setError, contextFunctions, url);

    expect(toast.error).toHaveBeenCalledTimes(1);
    expect(toast.error).toHaveBeenCalledWith(errorMsg);
    expect(setError).toHaveBeenCalledTimes(1);
  });
});
