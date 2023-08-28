import React from "react";
import { useGlobalContext } from "../../context/status";
import { Button } from "../ui/Button";
import Confeti from "../ui/conffeti";
export default function Results({ Name }: { Name: string }) {
  const { maxStreak, correctAnswer, questioncount } = useGlobalContext();

  const handleGoToStepOne = () => {
    window.location.reload();
  };

  return (
    <>
      <Confeti show={true} recycle={true} number={100} />
      <div className=" flex justify-center">
        {" "}
        <img
          src="/Logo.svg"
          alt="Logo"
          width={100}
          height={100}
          className="flex justify-center pb-4"
        />
      </div>
      <h1 className="lg:text-7xl md:text-5xl sm:text-5xl text-3xl text-center font-bold pb-4">
        Random Country Game.
      </h1>

      <div className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white p-8 rounded-lg shadow-lg">
        <p className="text-4xl font-bold mb-6">Awesome Job, {Name}!</p>

        <ul className="text-lg">
          <li className="mb-2">
            Streak: <span className="font-semibold">{maxStreak}</span>
          </li>
          <li className="mb-2">
            Correct Answers:{" "}
            <span className="font-semibold">{correctAnswer}</span>
          </li>
          <li>
            Questions: <span className="font-semibold">{questioncount}</span>
          </li>
        </ul>
      </div>

      <div className="w-full">
        <Button
          className=" mt-5 w-full"
          type="button"
          onClick={handleGoToStepOne}
        >
          New Game
        </Button>
      </div>
    </>
  );
}
