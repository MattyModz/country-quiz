import axios from "axios";
import toast from "react-hot-toast";
import { Country, ContextProps } from "../types/typings.d";
import QuizLogic from "./quizlogic";

export async function Fetchcountry(
  setLoading: (loading: boolean) => void,
  setError: (error: Error | null) => void,
  contextFunctions: ContextProps,
  url: string
) {
  setLoading(true);

  const cancelTokenSource = axios.CancelToken.source();

  try {
    let response;

    const cachedData = localStorage.getItem("randomCountryData");

    if (cachedData) {
      response = JSON.parse(cachedData);
    } else {
      response = await axios.get<{
        error: boolean;
        msg: string;
        data: Country[];
      }>(url, {
        cancelToken: cancelTokenSource.token,
      });

      if (response.data.error) {
        toast.error(
          response.data.msg || "An error occurred. Please try again."
        );
        setError(new Error(response.data.msg));
        setLoading(false);
        cancelTokenSource.cancel();
        return;
      }

      if (!response.data.data || response.data.data.length === 0) {
        toast.error("No data available.");
        setError(new Error("No data available."));
        setLoading(false);
        cancelTokenSource.cancel();
        return;
      }

      localStorage.setItem("randomCountryData", JSON.stringify(response));
    }

    QuizLogic(response, contextFunctions);
  } catch (error) {
    if (axios.isCancel(error)) {
    } else if (error instanceof axios.AxiosError) {
      toast.error("Failed to fetch country data. Please try again later.");
      setError(error as Error);
    } else {
      toast.error("An unexpected error occurred. Please try again later.");
      setError(error as Error);
    }
  } finally {
    setLoading(false);
  }
}
