import React, { ReactNode } from "react";
import Confeti from "../ui/conffeti";
type LayoutProps = {
  children: ReactNode;
};

function Layout({ children }: LayoutProps) {
  return (
    <section className="bg-gray-800 text-white min-h-screen h-full grid content-center lg:px-0  px-4 ">
      <div className="grid content-center rounded-xl h-full">
        <main className=" grid justify-center content-center  ">
          {children}
        </main>
      </div>
    </section>
  );
}

export default Layout;
