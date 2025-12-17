import Histoire from "@/component/accueil/Histoire";
import "./globals.css";
import Logo from "@/component/accueil/Logo";
import Vision from "@/component/accueil/Vision";
import Equipe from "@/component/accueil/Equipe";
import Investir from "@/component/accueil/Investir";
import Realisation from "@/component/accueil/Realisation";
import ImmoBricks from "@/component/accueil/ImmoBricks";

export default function Home() {
  return (
    <>
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory">
      <Logo />
      <Histoire />
      <Vision />
      <Equipe />
      <Investir />
      <Realisation />
      <ImmoBricks />
    </div>
    </>
  );
}
