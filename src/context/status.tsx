import { ContextProps } from "../types/typings.d";
import React, { createContext, useContext, useState } from "react";

const GlobalStatusContext = createContext<ContextProps>({
  openinfo: false,
  setOpeninfo: () => {},
  capital: "",
  setCapital: () => {},
  countryName: "",
  setCountryName: () => {},
  countryiso: "",
  setCountryiso: () => {},
  loading: true,
  setLoading: () => {},
  error: null,
  setError: () => {},
  options: [],
  setOptions: () => {},
  selectedOption: null,
  setSelectedOption: () => {},
  answerFeedback: null,
  setAnswerFeedback: () => {},
  correctAnswer: 0,
  setCorrectAnswer: () => {},
  streak: 0,
  setStreak: () => {},
  questioncount: 1,
  setQuestionCount: () => {},
  maxStreak: 0,
  setMaxStreak: () => {},
  Name: "",
  setName: () => {},
});

interface GlobalStatusContextProviderProps {
  children: React.ReactNode;
}

export const GlobalStatusContextProvider: React.FC<
  GlobalStatusContextProviderProps
> = ({ children }) => {
  const [openinfo, setOpeninfo] = useState(false);
  const [capital, setCapital] = useState("");
  const [countryName, setCountryName] = useState("");
  const [countryiso, setCountryiso] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [options, setOptions] = useState<string[]>([]);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [answerFeedback, setAnswerFeedback] = useState<boolean | null>(null);
  const [correctAnswer, setCorrectAnswer] = useState(0);
  const [streak, setStreak] = useState(0);
  const [questioncount, setQuestionCount] = useState(1);
  const [maxStreak, setMaxStreak] = useState(0);
  const [Name, setName] = useState("");

  return (
    <GlobalStatusContext.Provider
      value={{
        openinfo,
        setOpeninfo,
        capital,
        setCapital,
        countryName,
        setCountryName,
        countryiso,
        setCountryiso,
        loading,
        setLoading,
        error,
        setError,
        options,
        setOptions,
        selectedOption,
        setSelectedOption,
        answerFeedback,
        setAnswerFeedback,
        correctAnswer,
        setCorrectAnswer,
        streak,
        setStreak,
        questioncount,
        setQuestionCount,
        maxStreak,
        setMaxStreak,
        Name,
        setName,
      }}
    >
      {children}
    </GlobalStatusContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalStatusContext);
