"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaPhone } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";

export default function ImmoBricks() {
  return (
    <section className="h-screen snap-start bg-lightgreen flex flex-col">
      {/* Titre avec SVG */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.3 }}
        className="flex items-center gap-10 pt-15 pl-15 pr-15"
      >
        <motion.svg
          initial={{ opacity: 0, rotate: -10 }}
          whileInView={{ opacity: 1, rotate: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
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
        </motion.svg>

        <motion.h1
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-7xl text-beige italic"
        >
          Immo <span className="text-darkblue not-italic">Bricks</span>
        </motion.h1>
      </motion.div>

      {/* Section centrale avec texte et image */}
      <div className="flex flex-col mt-30">
        <div className="flex justify-between text-darkblue font-[Montserrat] relative">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true, amount: 0.3 }}
            className="bg-white flex flex-col justify-center items-center p-10 gap-6 w-[60%] relative z-10"
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              className="text-2xl"
            >
              Découvrez notre modèle d'investissement fractionné, fondé sur la
              blockchain.
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
              className="text-2xl font-bold"
            >
              Un accès simplifié à l'immobilier dès 2 000 €.
            </motion.span>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              viewport={{ once: true }}
              className="flex justify-center"
            >
              <Link href="/immoBricks">
                <button className="inline-block bg-beige text-4xl text-darkblue font-[Faustina] p-2 hover:bg-darkblue hover:text-beige transition">
                  Découvrir toutes nos projets
                </button>
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 100, scale: 0.9 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true, amount: 0.2 }}
            className="absolute right-0 top-[-5rem] w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:w-[800px] lg:h-[500px]"
          >
            <Image
              src="/5.png"
              alt="ImmoBricks Illustration"
              fill
              style={{ objectFit: "cover" }}
              priority
            />
          </motion.div>
        </div>
      </div>

      {/* Footer avec logo et informations de contact */}
      <div className="flex items-center justify-around mt-60">
        <motion.svg
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          width="408"
          height="144"
          viewBox="0 0 592 209"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Tous les paths du SVG */}
          <path
            d="M172.26 40.99V77.28L89.14 56.48L35.05 77.28L0 64.7V31.31L78.62 1.78998L172.26 40.99Z"
            fill="white"
          />
          <path
            d="M172.26 90.19V125.03L110.33 121.16L63.26 130.19L0 120.84V102.77L89.97 77.28L172.26 90.19Z"
            fill="white"
          />
          <path
            d="M0 135.35V161.81L84.63 199.55L172.26 164.71L170.76 154.71L116.01 138.9L67.6 150.84L0 135.35Z"
            fill="white"
          />
          {/* ... (autres paths du SVG) */}
        </motion.svg>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col text-white text-4xl font-[Montserrat] gap-4"
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            viewport={{ once: true }}
            className="flex items-center gap-10"
          >
            <FaPhone />
            <p>01 23 45 67 89</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            viewport={{ once: true }}
            className="flex items-center gap-10"
          >
            <MdOutlineEmail />
            <p>contact@foncierechaligny.com</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            viewport={{ once: true }}
            className="flex items-center gap-10"
          >
            <FaLocationDot />
            <p>123 Rue Chaligny, Paris</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
