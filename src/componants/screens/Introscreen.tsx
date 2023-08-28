import React, { useEffect, useState } from "react";
import { Button } from "../ui/Button";
import { motion } from "framer-motion";

interface IntroProps {
  updateFields: (fields: Partial<typeof INITIAL_DATA>) => void;

  Name: string;
}
const INITIAL_DATA: InitialData = {
  Name: "",
};

type InitialData = {
  Name: string;
};

export default function Intro({ updateFields, Name }: IntroProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < imageNames.length - 1) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [currentIndex]);

  const currentImage = imageNames[currentIndex];

  return (
    <>
      <div className="space-y-8">
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
        <h1 className="lg:text-7xl md:text-5xl sm:text-5xl text-3xl text-center font-bold">
          Random Country Game.
        </h1>
        <motion.img
          src={`${currentImage}`}
          alt="Logo"
          className="flex justify-center rounded-xl"
          width={800}
          height={400}
          initial={{ y: 10 }}
          animate={{
            y: [-10, 10],
            transition: {
              duration: 5,
              ease: "easeInOut",
            },
          }}
        />

        <div className=" w-full  justify-center space-y-4  text-black ">
          <input
            type="text"
            id="InputName"
            placeholder="Enter your nickname"
            required
            name="firstname"
            value={Name}
            className=" w-full rounded-xl p-4 text-xl text-black  bg-white"
            onChange={(e) => updateFields({ Name: e.target.value })}
            title="Maximum 6 characters allowed"
            maxLength={6}
          />
          {Name.length >= 6 && (
            <p className="text-red-500 text-sm">
              Please enter a maximum of 6 characters
            </p>
          )}

          <Button className="w-full">Start Learning</Button>
        </div>
      </div>
    </>
  );
}

const imageNames = [
  "/flags/AR.svg",
  "/flags/AX.svg",
  "/flags/IS.svg",
  "/flags/KI.svg",
  "/flags/MZ.svg",
  "/flags/PA.svg",
  "/flags/SB.svg",
  "/flags/UA.svg",
  "/flags/US.svg",
];
