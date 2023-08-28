import { Dispatch, SetStateAction, ReactNode } from "react";

export interface Country {
  name: string;
  capital: string;
  iso2: string;
  iso3: string;
}

export interface ContextProps {
  openinfo: boolean;
  setOpeninfo: Dispatch<SetStateAction<boolean>>;
  capital: string;
  setCapital: Dispatch<SetStateAction<string>>;
  countryName: string;
  setCountryName: Dispatch<SetStateAction<string>>;
  countryiso: string;
  setCountryiso: Dispatch<SetStateAction<string>>;
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
  error: Error | null;
  setError: Dispatch<SetStateAction<Error | null>>;
  options: string[];
  setOptions: Dispatch<SetStateAction<string[]>>;
  selectedOption: string | null;
  setSelectedOption: Dispatch<SetStateAction<string | null>>;
  answerFeedback: boolean | null;
  setAnswerFeedback: Dispatch<SetStateAction<boolean | null>>;
  correctAnswer: number;
  setCorrectAnswer: Dispatch<SetStateAction<number>>;
  streak: number;
  setStreak: Dispatch<SetStateAction<number>>;
  questioncount: number;
  setQuestionCount: Dispatch<SetStateAction<number>>;
  maxStreak: number;
  setMaxStreak: Dispatch<SetStateAction<number>>;
  Name: string;
  setName: Dispatch<SetStateAction<string>>;
}

export interface RenderProps {
  fetchRandomCountry: () => void;
}

export interface Step {
  title: string;
  content: ReactNode;
}

export interface MultistepFormHook {
  currentStepIndex: number;
  step: Step;
  steps: Step[];
  isFirstStep: boolean;
  isLastStep: boolean;
  goTo: (index: number) => void;
  next: () => void;
  back: () => void;
}
