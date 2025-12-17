"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Toggle } from "@/component/general/Toggle";

export default function TogglePage() {
  const [activePage, setActivePage] = useState(false);

  return (
    <AnimatePresence mode="wait">
      {!activePage && (
        <motion.main
          key="pageA"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 60 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="w-full bg-beige flex flex-col items-center gap-6 p-6"
        >
          {/* HEADER */}
          <div className="flex items-center gap-10">
            <svg width="90" height="103" viewBox="0 0 406 465" fill="none">
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

          {/* TOGGLE */}
          <Toggle
            active={activePage}
            onToggle={(value) => setActivePage(value)}
            leftLabel={
              <>
                Foncière{" "}
                <span className="text-lightgreen italic">Chaligny</span>
              </>
            }
            rightLabel={
              <>
                Notre <span className="text-lightgreen italic">équipe</span>
              </>
            }
          />

          {/* CONTENT */}
          <section className="h-lvh relative ">
            <div className="ml-15 mt-10 flex flex-col justify-around bg-white/60 h-3/4 w-3/5 p-10 font-[Montserrat] text-2xl">
              <span>Notre histoire commence sur le terrain</span>

              <span>
                Foncière Chaligny est une foncière indépendante qui s’appuie sur
                une conviction simple : la performance durable naît de la
                complémentarité, de la confiance et d’une vision long terme.
              </span>

              <span className="w-2/3">
                Portée par trois fondateurs aux profils différents mais
                parfaitement alignés, Foncière Chaligny développe et gère des
                actifs immobiliers avec une approche responsable, agile et
                ancrée dans la réalité du terrain.
              </span>

              <span className="w-2/3">
                Notre promesse : offrir une gestion transparente, exigeante et
                tournée vers la création de valeur durable pour nos
                investisseurs.
              </span>
            </div>
            <div>
              <img
                src="/6.png"
                alt="Photo histoire foncière Chaligny"
                className="absolute -bottom-40 h-3/4 right-100 object-cover"
              />
            </div>
            <div
              className="
  absolute
  -left-10
  bg-[#2F3A3D]
  text-white
  px-14
  py-10
  flex
  items-center
  justify-between
  gap-12
  w-[65%]
  z-10
"
            >
              <p className="text-lg font-medium max-w-md">
                Nos experts sont à votre écoute pour vous accompagner dans votre
                opération.
              </p>

              <button
                className="
    border border-white
    px-8 py-3
    uppercase text-sm tracking-widest
    hover:bg-white hover:text-[#2F3A3D]
    transition
  "
              >
                Nous contacter
              </button>
            </div>
          </section>
        </motion.main>
      )}

      {activePage && (
        <motion.main
          key="pageB"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -60 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="min-h-screen w-full bg-lightgreen flex flex-col items-center gap-6 p-6 text-white"
        >
          {/* HEADER */}
          <div className="flex items-center gap-10">
            <h1 className="text-7xl">
              Notre <span className="italic text-lightgreen">Équipe</span>
            </h1>
          </div>

          {/* TOGGLE */}
          <Toggle
            active={activePage}
            onToggle={(value) => setActivePage(value)}
            leftLabel={
              <>
                <span className="text-darkblue">
                  Foncière <span className=" italic">Chaligny</span>
                </span>
              </>
            }
            rightLabel={
              <>
                <span className="text-darkblue">
                  Notre <span className="italic">équipe</span>
                </span>
              </>
            }
          />

          {/* CONTENT */}
          <div className="max-w-lg rounded-xl border p-6 bg-slate-900">
            <h2 className="text-xl font-semibold mb-2">Page B</h2>
            <p>Contenu de la deuxième page</p>
          </div>
        </motion.main>
      )}
    </AnimatePresence>
  );
}
