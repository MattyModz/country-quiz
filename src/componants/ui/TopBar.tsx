import React from "react";
import { Button } from "./Button";

import Timer from "./Timer";

import { useGlobalContext } from "../../context/status";
interface TopbarProps {
  Name: string;
}

export default function Topbar({ Name }: TopbarProps) {
  const { streak } = useGlobalContext();

  return (
    <>
      <section>
        <div className="flex pb-4 justify-between">
          <img src="/Logo.svg" alt="Logo" width={50} height={0} />
          <div className="grid content-center">
            {" "}
            <Button type="submit" size={"small"} variant="option">
              Exit
            </Button>
          </div>
        </div>
        <div className="bg-gray-900 rounded-xl w-full grid items-center justify-center xxs:grid-cols-3 p-2">
          <div className="flex items-center justify-center">
            <p className="font-semibold text-xl">Streak: {streak}</p>
          </div>

          <p className="text-center font-bold text-2xl">{Name}</p>
          <div className="flex items-center justify-center">
            <Timer />
          </div>
        </div>
      </section>
    </>
  );
}
