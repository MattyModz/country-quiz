import React from "react";
import { Button } from "../../componants/ui/Button";
import FlagComponant from "../../componants/ui/FlagComponant";
import Confeti from "../../componants/ui/conffeti";
import SkeletonLoader from "../ui/Skeletonloader";
import { useGlobalContext } from "../../context/status";
import Topbar from "../ui/TopBar";

type QuizProps = {
  fetchRandomCountry: () => void;
  Name: string;
};

export default function Quiz({ fetchRandomCountry, Name }: QuizProps) {
  const {
    countryName,
    countryiso,
    options,
    selectedOption,
    setSelectedOption,
    answerFeedback,
    setAnswerFeedback,
    capital,
    correctAnswer,
    setCorrectAnswer,
    streak,
    setStreak,
    questioncount,
    setQuestionCount,
    maxStreak,
    setMaxStreak,
    loading,
  } = useGlobalContext();

  function handleOptionClick(option: string) {
    if (option === capital) {
      setAnswerFeedback(true);

      setCorrectAnswer(correctAnswer + 1);

      const newStreak = streak + 1;
      setStreak(newStreak);
      if (newStreak > maxStreak) {
        setMaxStreak(newStreak);
      }
    } else {
      setAnswerFeedback(false);
      setStreak(0);
    }
    setSelectedOption(option);
  }

  function streakskip() {
    !selectedOption && setStreak(0);
    setQuestionCount(questioncount + 1);
  }

  return (
    <>
      {answerFeedback === true ? (
        <Confeti show={answerFeedback} number={100} recycle={false} />
      ) : null}

      <Topbar Name={Name} />

      <section className=" text-white   ">
        <div className="container grid content-center rounded-xl">
          <main className="container grid justify-center content-center space-y-4">
            <p className="text-center justify-center py-4 font-semibold text-2xl flex">
              Country: {countryName}
            </p>

            <FlagComponant countryiso={countryiso} height={600} width={600} />
            {loading ? (
              <SkeletonLoader />
            ) : (
              options.map((option, index) => (
                <ul className="" key={index}>
                  <li className="grid content-center">
                    <input
                      className="sr-only peer p-8"
                      type="radio"
                      value={option}
                      name="options"
                      id={`answer_${option}`}
                      checked={selectedOption === option}
                      onChange={() => handleOptionClick(option)}
                      disabled={!!selectedOption}
                    />
                    <label
                      className={`flex justify-between text-gray-700 font-semibold p-5  border-black text-xl ${
                        selectedOption === option && answerFeedback === false
                          ? "bg-red-400 "
                          : selectedOption !== null && option === capital
                          ? "bg-green-400 "
                          : null
                      } rounded-lg cursor-pointer bg-gray-50  `}
                      htmlFor={`answer_${option}`}
                    >
                      {option}

                      {selectedOption === option && (
                        <>
                          <span>
                            {" "}
                            <FlagComponant
                              countryiso={countryiso}
                              height={35}
                              width={35}
                            />
                          </span>
                        </>
                      )}
                    </label>
                  </li>
                </ul>
              ))
            )}

            <Button
              onClick={(e) => {
                e.preventDefault(); // Prevent form submission
                fetchRandomCountry();
                streakskip();
              }}
              className="w-full p-8"
            >
              New Country
            </Button>
          </main>
        </div>
      </section>
    </>
  );
}
