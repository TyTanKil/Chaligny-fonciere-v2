"use client";

import Link from "next/link";
import CountUp from "react-countup";
import { motion } from "framer-motion";

export default function Vision() {
  return (
    <section
      data-section
      className="h-screen snap-start overflow-y-auto bg-lightgreen flex justify-center items-center"
    >
      <div className="flex flex-col h-full w-full p-15 space-y-4">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
          className="flex items-start gap-10 mt-10"
        >
          <svg
            className="flex-none"
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

          <h1 className="2xl:text-7xl xl:text-5xl text-darkblue">
            Notre <span className="text-beige italic">Vision</span>
            <span className="block 2xl:text-3xl xl:text-2xl text-beige font-bold font-[Montserrat] mt-2">
              Une expertise immobilière intégrée au service de la performance
              durable
            </span>
          </h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
          className="flex justify-center"
        >
          <p className="font-[Montserrat] text-center text-darkblue 2xl:text-3xl xl:text-2xl">
            Foncière Chaligny s’appuie sur une expertise immobilière intégrée
            couvrant l’ensemble du cycle d’investissement : acquisition,
            gestion, structuration financière et valorisation.
          </p>
        </motion.div>
        <div className="relative w-full py-8">
          {/* Ligne horizontale */}
          <div
            className="absolute top-1/2 left-0 h-1 bg-darkblue -translate-y-1/2 -ml-20"
            style={{ width: "calc(100% + 200px)" }}
          />

          {/* Étapes */}
          <div className="relative flex justify-center gap-10 z-10 font-[Montserrat]">
            <motion.div
              className="w-72 h-32 p-4 text-center bg-darkblue text-beige flex items-center justify-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
            >
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-lightgreen text-4xl break-words"
              >
                +{" "}
                <span>
                  <CountUp
                    end={20}
                    duration={6}
                    enableScrollSpy
                    scrollSpyOnce
                  />{" "}
                  ans
                </span>
                <br />
                <span className="text-beige text-base">
                  d'expertise immobilières sur le marché parisien
                </span>
              </motion.p>
            </motion.div>
            <motion.div
              className="w-72 h-32 p-4 text-center bg-darkblue text-beige flex items-center justify-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
            >
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-lightgreen text-4xl break-words"
              >
                +{" "}
                <span>
                  <CountUp
                    end={300}
                    duration={6}
                    enableScrollSpy
                    scrollSpyOnce
                  />{" "}
                  M€
                </span>
                <br />
                <span className="text-beige text-base">
                  de financements intermédiés
                </span>
              </motion.p>
            </motion.div>
            <motion.div
              className="w-72 h-32 p-4 text-center bg-darkblue text-beige flex items-center justify-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
            >
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-lightgreen text-4xl break-words"
              >
                <span>
                  <CountUp
                    end={150}
                    duration={6}
                    enableScrollSpy
                    scrollSpyOnce
                  />{" "}
                  M€
                </span>
                <br />
                <span className="text-beige text-base">
                  d'actifs intermédiés
                </span>
              </motion.p>
            </motion.div>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center text-beige text-4xl font-bold font-[Montserrat]"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
          >
            TRANSACTION
          </motion.span>
          <br />
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-darkblue text-2xl font-normal"
          >
            Identification et acquisition d’actifs immobiliers à fort potentiel
            sur le marché parisien et francilien.
          </motion.span>

          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            viewport={{ once: true }}
            className="mt-10"
          >
            GESTION
          </motion.span>
          <br />
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            viewport={{ once: true }}
            className="text-darkblue text-2xl font-normal"
          >
            Pilotage locatif, suivi opérationnel et valorisation des actifs dans
            la durée.
          </motion.span>

          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            viewport={{ once: true }}
            className="mt-10"
          >
            STRUCTURATION FINANCIÈRE
          </motion.span>
          <br />
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            viewport={{ once: true }}
            className="text-darkblue text-2xl font-normal"
          >
            Montage des opérations, levées de fonds et optimisation des
            rendements pour les investisseurs.
          </motion.span>
          {/* Bouton */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
            className="flex items-center justify-center font-[Faustina] py-6"
          >
            <Link href="/vision">
              <button className="inline-block bg-beige text-2xl text-darkblue underline p-2 hover:bg-darkblue hover:text-beige transition">
                Notre Vision
              </button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
