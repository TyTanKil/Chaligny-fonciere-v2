"use client";

import { useEffect, useState } from "react";
import Histoire from "@/component/accueil/Histoire";
import Logo from "@/component/accueil/Logo";
import Vision from "@/component/accueil/Vision";
import Equipe from "@/component/accueil/Equipe";
import Investir from "@/component/accueil/Investir";
import Realisation from "@/component/accueil/Realisation";
import ImmoBricks from "@/component/accueil/ImmoBricks";
import Contact from "@/component/accueil/Contact";
import ScrollIndicator from "@/component/general/ScrollIndicator";
import Navbar from "@/component/general/NavBar";
import MaintenancePage from "@/app/maintenance/page";

export default function Home() {
  const [maintenanceMode, setMaintenanceMode] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/config.json")
      .then(res => res.json())
      .then(data => setMaintenanceMode(data.maintenance))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return null; // Ou un loader si tu veux

  if (maintenanceMode) return <MaintenancePage />;

  return (
    <div
      className="
        scroll-container 
        no-scrollbar 
        h-screen 
        overflow-y-auto 
        md:overflow-y-scroll 
        snap-none 
        md:snap-y 
        md:snap-mandatory 
        scroll-smooth 
        relative
      "
    >
      <Navbar />
      <ScrollIndicator />
      <Logo />
      <Histoire />
      <Vision />
      <Equipe />
      <Investir />
      <Realisation />
      <ImmoBricks />
      <Contact />
    </div>
  );
}
