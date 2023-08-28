import React from "react";

interface Countryiso {
  countryiso: string;
  height: number;
  width: number;
}

const FlagComponent: React.FC<Countryiso> = ({ countryiso, height, width }) => {
  const flagUrl = `http://purecatamphetamine.github.io/country-flag-icons/3x2/${countryiso}.svg`;

  return (
    <div className="flex justify-center">
      <img
        src={flagUrl}
        alt={`Flag of ${countryiso}`}
        height={height}
        width={width}
        className="rounded-xl "
      />
    </div>
  );
};

export default FlagComponent;
