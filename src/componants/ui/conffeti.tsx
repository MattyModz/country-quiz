import React, { useState, useEffect } from "react";
import Confetti from "react-confetti";

interface Show {
  show: boolean | null | undefined;
  number?: number;
  recycle?: boolean;
}

function Conffeti({ show, number, recycle }: Show) {
  const [screenSize, setScreenSize] = useState(getCurrentDimension());

  function getCurrentDimension() {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  }

  useEffect(() => {
    const updateDimension = () => {
      setScreenSize(getCurrentDimension());
    };
    window.addEventListener("resize", updateDimension);

    return () => {
      window.removeEventListener("resize", updateDimension);
    };
  }, [screenSize]);

  return (
    <>
      <Confetti
        run={show === true ? true : false}
        numberOfPieces={number}
        recycle={recycle}
        width={screenSize.width}
        height={screenSize.height}
      />
    </>
  );
}

export default Conffeti;
