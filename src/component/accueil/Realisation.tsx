import ProjectCard from "../general/RealisationCard";

export default function Realisation() {
  return (
    <section className="h-screen snap-start flex flex-col">
      <div className="flex gap-10 pt-15 pl-15 pr-15">
        <div className="flex items-center gap-10">
          <svg
            width="90"
            height="103"
            viewBox="0 0 406 465"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M404.775 92.021V177.189L209.44 128.347L82.3547 177.189L0 147.681V69.2955L184.73 0L404.775 92.021Z"
              fill="#98AA9D"
            />
            <path
              d="M404.775 207.502V289.279L259.245 280.189L148.645 301.411L0 279.42V237.045L211.4 177.189L404.775 207.502Z"
              fill="#98AA9D"
            />
            <path
              d="M0 313.508V375.601L198.87 464.196L404.775 382.419L401.24 358.959L272.615 321.829L158.83 349.869L0 313.508Z"
              fill="#98AA9D"
            />
          </svg>

          <h1 className="text-7xl text-lightgreen italic">
            Nous <span className="text-darkblue not-italic">réalisons</span>
          </h1>
        </div>
      </div>
      <div className="flex flex-col gap-10">
        <div className="flex justify-center">
          <a className="inline-block text-4xl bg-beige text-darkblue p-2">
            <span className="underline">S</span>avoir faire
          </a>
        </div>
        <div className="flex justify-center gap-15 pl-10 pr-10">
          <ProjectCard
            imageSrc="/10.png"
            imageAlt="Immeuble résidentiel à Paris"
            title="RÉNOVATION D’UN IMMEUBLE RÉSIDENTIEL À PARIS 1ᵉ"
            description={[
              "Transformation d’un immeuble ancien en appartements modernes et optimisés pour la location.",
              "Valorisation du patrimoine et création de revenus locatifs stables pour les investisseurs.",
            ]}
            backgroundColor="bg-lightgreen"
            titleColor="text-darkblue"
            descriptionColor="text-beige"
          />
          <ProjectCard
            imageSrc="/10.png"
            imageAlt="Immeuble résidentiel à Paris"
            title="RÉNOVATION D’UN IMMEUBLE RÉSIDENTIEL À PARIS 1ᵉ"
            description={[
              "Transformation d’un immeuble ancien en appartements modernes et optimisés pour la location.",
              "Valorisation du patrimoine et création de revenus locatifs stables pour les investisseurs.",
            ]}
            backgroundColor="bg-beige"
            titleColor="text-lightgreen"
            descriptionColor="text-darkblue"
          />
          <ProjectCard
            imageSrc="/10.png"
            imageAlt="Immeuble résidentiel à Paris"
            title="RÉNOVATION D’UN IMMEUBLE RÉSIDENTIEL À PARIS 1ᵉ"
            description={[
              "Transformation d’un immeuble ancien en appartements modernes et optimisés pour la location.",
              "Valorisation du patrimoine et création de revenus locatifs stables pour les investisseurs.",
            ]}
            backgroundColor="bg-darkblue"
            titleColor="text-beige"
            descriptionColor="text-lightgreen"
          />
        </div>
        <div className="flex justify-center">
          <a className="inline-block text-4xl bg-beige text-darkblue p-2 font-[Faustina]">
            Découvrir toutes nos projets
          </a>
        </div>
      </div>
    </section>
  );
}
