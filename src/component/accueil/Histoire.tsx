"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Histoire() {
  return (
    <section className="h-screen snap-start flex justify-center items-center">
      <div className="grid grid-cols-2 h-full w-full p-15">
        <div>
          {/* Titre avec SVG */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
            className="flex items-center gap-10"
          >
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
          </motion.div>

          {/* Textes animés */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
            className="flex flex-col text-4xl gap-8 mt-10 p-10"
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-lightgreen font-bold"
            >
              Notre histoire commence sur le terrain
            </motion.span>

            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-darkblue"
            >
              De la transaction immobilière à la structuration financière, notre
              histoire est celle d'une rencontre entre terrain et stratégie.
            </motion.span>

            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              className="text-darkblue"
            >
              Trois fondateurs, une vision partagée :{" "}
            </motion.span>

            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
              className="text-lightgreen font-bold"
            >
              créer un acteur immobilier agile, réactif et transparent.
            </motion.span>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              viewport={{ once: true }}
            >
              <Link href="/histoire">
                <button className="inline-block bg-beige text-darkblue underline mt-20 p-2 hover:bg-darkblue hover:text-beige transition">
                  Notre histoire
                </button>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Image animée */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true, amount: 0.3 }}
          className="relative"
        >
          <Image
            src="/Bordeaux.png"
            alt="Page d'accueil"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}
