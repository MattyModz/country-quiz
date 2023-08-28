import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Country } from "../types/typings.d";
import toast from "react-hot-toast";
export const useFetch = (url: string) => {
  return useQuery({
    queryFn: async () => {
      const { data } = await axios.get(url);
      return data as Country;
    },

    onError(err) {
      const errorMessage =
        err instanceof Error
          ? err.message
          : "An error occurred. Please try again.";
      toast.error(errorMessage);
    },
  });
};
