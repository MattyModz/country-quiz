import React from "react";
import { useMultistepform } from "../../hooks/Multistep";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Layout from "../layout";

import screens from "../screens";

interface RenderProps {
  fetchRandomCountry: () => void;
}

type InitialData = {
  Name: string;
};

const INITIAL_DATA: InitialData = {
  Name: "",
};

export default function Game({ fetchRandomCountry }: RenderProps) {
  const [data, setData] = useState(INITIAL_DATA);

  function updateFields(fields: Partial<typeof INITIAL_DATA>) {
    setData((prev) => {
      return { ...prev, ...fields };
    });
  }

  const steps = [
    {
      title: "Introduction",
      content: <screens.Intro {...data} updateFields={updateFields} />,
    },
    {
      title: "Quiz",
      content: (
        <screens.Quiz
          Name={data.Name}
          fetchRandomCountry={fetchRandomCountry}
        />
      ),
    },
    {
      title: "Results",
      content: <screens.Results Name={data.Name} />,
    },
  ];

  const { currentStepIndex, step, isLastStep, next } = useMultistepform(steps);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!isLastStep) return next();
    onSubmitForm(data);
  }

  async function onSubmitForm(formData: typeof INITIAL_DATA) {}

  return (
    <>
      <Layout>
        <AnimatePresence>
          <motion.div key={currentStepIndex}>
            <form onSubmit={onSubmit}>
              <motion.div>{step.content}</motion.div>
            </form>
          </motion.div>
        </AnimatePresence>
      </Layout>
    </>
  );
}
