import Image from "next/image";

export default function Histoire() {
  return (
    <section className="h-screen snap-start flex justify-center items-center">
      <div className="grid grid-cols-2 h-full w-full p-15">
        <div>
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

            <h1 className="text-7xl text-darkblue">
              Notre <span className="text-lightgreen italic">Histoire</span>
            </h1>
          </div>
          <div className="flex flex-col text-4xl  gap-8 mt-10 p-10">
            <span className="text-lightgreen font-bold">
              Notre histoire commence sur le terrain
            </span>
            <span className="text-darkblue">
              De la transaction immobilière à la structuration financière, notre
              histoire est celle d’une rencontre entre terrain et stratégie.
            </span>
            <span className="text-darkblue">
              Trois fondateurs, une vision partagée :{" "}
            </span>
            <span className="text-lightgreen font-bold">
              créer un acteur immobilier agile, réactif et transparent.
            </span>
            <div>
              <a className="inline-block bg-beige text-darkblue underline mt-20 p-2" href="/histoire">
                Notre histoire
              </a>
            </div>
          </div>
        </div>
        <div className="relative">
          <Image
            src="/Bordeaux.png"
            alt="Page d'accueil"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
        </div>
      </div>
    </section>
  );
}
