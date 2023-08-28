import "./App.css";
import React, { useEffect } from "react";
import { Fetchcountry } from "./hooks/FetchCountryData";
import { useGlobalContext } from "./context/status";

import Game from "./componants/Multistep";

function RandomCountryGame(): JSX.Element {
  const contextFunctions = useGlobalContext();

  const { setLoading } = useGlobalContext();
  const { setError } = useGlobalContext();
  const url = "https://countriesnow.space/api/v0.1/countries/capital";

  useEffect(() => {
    fetchRandomCountry();
  }, []);

  async function fetchRandomCountry() {
    await Fetchcountry(setLoading, setError, contextFunctions, url);
  }

  return (
    <>
      <Game fetchRandomCountry={fetchRandomCountry} />
    </>
  );
}

export default RandomCountryGame;
