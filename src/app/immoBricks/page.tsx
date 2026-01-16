"use client";

import Navbar from "@/component/general/NavBar";
import ImmoBricksMobile from "./ImmoBricksMobile";
import ImmoBricksDesktop from "./ImmoBricksDesktop";

export default function ImmoBricks() {
  return (
    <div className="w-full flex flex-col items-center">
      <Navbar />

      {/* Mobile */}
      <div className="block lg:hidden w-full">
        <ImmoBricksMobile />
      </div>

      {/* Desktop */}
      <div className="hidden lg:block w-full">
        <ImmoBricksDesktop />
      </div>
    </div>
  );
}