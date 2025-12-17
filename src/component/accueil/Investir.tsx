import PillarsSection from "@/component/general/PillarsSection";

export default function Investir() {
  return (
    <section className="h-screen snap-start bg-lightgreen flex flex-col">
      <div className="flex items-start gap-10 pt-15 pl-15 pr-15">
        <svg
          width="90"
          height="103"
          viewBox="0 0 406 465"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M404.775 92.021V177.189L209.44 128.347L82.3547 177.189L0 147.681V69.2955L184.73 0L404.775 92.021Z"
            fill="#363D40"
          />
          <path
            d="M404.775 207.502V289.279L259.245 280.189L148.645 301.411L0 279.42V237.045L211.4 177.189L404.775 207.502Z"
            fill="#363D40"
          />
          <path
            d="M0 313.508V375.601L198.87 464.196L404.775 382.419L401.24 358.959L272.615 321.829L158.83 349.869L0 313.508Z"
            fill="#363D40"
          />
        </svg>

        <h1 className="text-7xl text-darkblue">
          Investir <span className="text-beige italic">avec nous</span>
          <br />
          <span className="text-4xl text-beige font-bold font-[Montserrat]">
            Chaque bien a un potentiel. Nous le révélons
          </span>
        </h1>
      </div>

      <PillarsSection />
    </section>
  );
}
