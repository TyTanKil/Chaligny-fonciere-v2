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

export default function Home() {
  return (
    <div className="scroll-container no-scrollbar h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth relative">
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
