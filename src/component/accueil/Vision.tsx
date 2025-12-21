"use client";

import Link from "next/link";
import CountUp from "react-countup";
import { motion } from "framer-motion";

export default function Vision() {
  return (
    <section className="h-screen snap-start bg-lightgreen flex justify-center items-center">
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
              Notre <span className="text-beige italic">Vision</span>
              <br />
              <span className="text-4xl text-beige font-bold font-[Montserrat]">
                Une expertise intégrée à 360°
              </span>
            </h1>
          </motion.div>

          {/* Stats animées */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
            className="h-110 flex gap-10 mt-10 ml-30"
          >
            <div className="w-5 bg-beige"></div>
            <div className="flex flex-col font-[Montserrat] gap-15">
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-beige text-5xl"
              >
                +{" "}
                <span className="text-darkblue">
                  <CountUp
                    end={20}
                    duration={6}
                    enableScrollSpy
                    scrollSpyOnce
                  />{" "}
                  ans
                </span>
                <br />
                <span className="text-darkblue text-xl">
                  d'expertise immobilières sur le marché parisien
                </span>
              </motion.p>

              <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-beige text-5xl"
              >
                +{" "}
                <span className="text-darkblue">
                  <CountUp
                    end={300}
                    duration={8}
                    enableScrollSpy
                    scrollSpyOnce
                  />
                  M€
                </span>
                <br />
                <span className="text-darkblue text-xl">
                  de financement intermédiés
                </span>
              </motion.p>

              <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
                className="text-darkblue text-5xl"
              >
                <CountUp
                  end={150}
                  duration={10}
                  enableScrollSpy
                  scrollSpyOnce
                />
                M€
                <br />
                <span className="text-xl">d'actifs intermédiés</span>
              </motion.p>
            </div>
          </motion.div>

          {/* Bouton */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
            className="ml-30"
          >
            <Link href="/vision">
              <button className="inline-block bg-beige text-4xl text-darkblue underline mt-20 p-2 hover:bg-darkblue hover:text-beige transition">
                Notre histoire
              </button>
            </Link>
          </motion.div>
        </div>

        {/* Colonne droite avec SVG et textes */}
        <div className="flex flex-col items-center mt-15 font-[Montserrat]">
          <motion.svg
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            width="150"
            height="185"
            viewBox="0 0 250 285"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M182.66 26.32V50.68L126.85 36.71L90.54 50.68L67 42.24V19.82L119.79 0L182.66 26.32Z"
              fill="white"
            />
            <path
              d="M182.66 59.3499V82.7399L141.08 80.1399L109.48 86.2099L67 79.9199V67.7999L127.41 50.6799L182.66 59.3499Z"
              fill="white"
            />
            <path
              d="M67 89.6699V107.43L123.82 132.77L182.66 109.38L181.65 102.67L144.89 92.0499L112.39 100.07L67 89.6699Z"
              fill="white"
            />
            <path
              d="M0.959961 189.7V142.93H9.76997V189.7H0.959961ZM4.17996 151.43V142.94H31.68V151.43H4.17996ZM4.17996 171.14V162.65H28.14V171.14H4.17996Z"
              fill="white"
            />
            <path
              d="M50.59 190.18C46 190.18 42.45 188.91 39.94 186.37C37.43 183.83 36.18 180.25 36.18 175.64V170.2C36.18 165.63 37.43 162.1 39.94 159.59C42.45 157.08 46 155.83 50.59 155.83C55.18 155.83 58.73 157.08 61.24 159.59C63.75 162.1 65 165.64 65 170.2V175.73C65 180.32 63.75 183.87 61.24 186.39C58.73 188.91 55.18 190.17 50.59 190.17V190.18ZM50.56 181.69C52.34 181.69 53.72 181.17 54.71 180.13C55.7 179.09 56.19 177.63 56.19 175.74V170.21C56.19 168.34 55.7 166.9 54.71 165.87C53.72 164.84 52.34 164.33 50.56 164.33C48.78 164.33 47.43 164.84 46.46 165.87C45.48 166.9 45 168.35 45 170.21V175.74C45 177.63 45.49 179.09 46.46 180.13C47.43 181.17 48.8 181.69 50.56 181.69Z"
              fill="white"
            />
            <path
              d="M73.04 189.7V156.31H81.85V189.7H73.04ZM92.34 189.7V169.47C92.34 167.82 91.87 166.55 90.94 165.66C90.01 164.77 88.68 164.33 86.97 164.33C85.26 164.33 84.08 164.79 83.19 165.7C82.3 166.61 81.86 167.89 81.86 169.54L81.19 162.14C82.15 160.12 83.33 158.57 84.71 157.48C86.09 156.39 87.89 155.84 90.1 155.84C93.62 155.84 96.34 157.03 98.27 159.39C100.2 161.75 101.16 165.11 101.16 169.44V189.7H92.35H92.34Z"
              fill="white"
            />
            <path
              d="M123.95 190.18C119.17 190.18 115.46 188.83 112.82 186.13C110.18 183.43 108.86 179.62 108.86 174.71V171.14C108.86 166.27 110.18 162.5 112.82 159.83C115.46 157.16 119.17 155.83 123.95 155.83C126.69 155.83 129.18 156.29 131.4 157.21C133.62 158.13 135.38 159.45 136.69 161.17L131 166.7C130.21 165.95 129.26 165.37 128.15 164.95C127.04 164.53 125.89 164.32 124.69 164.32C122.46 164.32 120.73 164.91 119.51 166.1C118.29 167.29 117.68 168.97 117.68 171.13V174.7C117.68 176.93 118.29 178.65 119.51 179.86C120.73 181.07 122.46 181.68 124.69 181.68C125.89 181.68 127.04 181.45 128.15 181C129.26 180.55 130.2 179.91 131 179.07L136.69 184.92C135.38 186.59 133.62 187.88 131.4 188.8C129.18 189.71 126.7 190.17 123.95 190.17V190.18Z"
              fill="white"
            />
            <path
              d="M142.16 151.75V142.94H150.97V151.75H142.16ZM142.16 189.7V156.31H150.97V189.7H142.16Z"
              fill="white"
            />
            <path
              d="M173.48 190.18C168.63 190.18 164.88 188.88 162.21 186.27C159.54 183.66 158.21 179.98 158.21 175.22V171.46C158.21 166.49 159.49 162.64 162.05 159.91C164.61 157.19 168.23 155.83 172.9 155.83C177.32 155.83 180.73 157.45 183.14 160.7C185.55 163.95 186.76 168.52 186.76 174.42V176.61H163.92V170.66H178.71L178.61 169.89C178.37 167.98 177.77 166.5 176.81 165.44C175.85 164.38 174.54 163.85 172.89 163.85C170.77 163.85 169.12 164.48 167.95 165.75C166.78 167.02 166.2 168.81 166.2 171.12V175.37C166.2 177.64 166.84 179.4 168.11 180.64C169.38 181.88 171.17 182.51 173.47 182.51C174.65 182.51 175.82 182.3 176.98 181.88C178.14 181.46 179.19 180.87 180.13 180.09L185.89 185.2C184.15 186.79 182.2 188.01 180.04 188.88C177.87 189.75 175.69 190.18 173.48 190.18ZM171.91 151.81L162.1 141L168.31 135.79L177.51 147.21L171.91 151.81Z"
              fill="white"
            />
            <path
              d="M194.49 189.7V156.31H203.95V189.7H194.49ZM213.27 165.61C212.86 165.18 212.34 164.86 211.71 164.65C211.08 164.44 210.35 164.33 209.54 164.33C207.76 164.33 206.38 164.9 205.41 166.05C204.44 167.2 203.95 168.79 203.95 170.83L203.27 162.15C204.19 160.18 205.39 158.63 206.86 157.52C208.33 156.41 209.94 155.85 211.7 155.85C213.09 155.85 214.35 156.07 215.48 156.51C216.61 156.95 217.59 157.6 218.42 158.46L213.27 165.63V165.61Z"
              fill="white"
            />
            <path
              d="M236.27 190.18C231.42 190.18 227.67 188.88 225 186.27C222.33 183.66 221 179.98 221 175.22V171.46C221 166.49 222.28 162.64 224.84 159.91C227.4 157.19 231.02 155.83 235.69 155.83C240.11 155.83 243.52 157.45 245.93 160.7C248.34 163.95 249.55 168.52 249.55 174.42V176.61H226.71V170.66H241.5L241.4 169.89C241.16 167.98 240.56 166.5 239.6 165.44C238.64 164.38 237.33 163.85 235.68 163.85C233.56 163.85 231.91 164.48 230.74 165.75C229.57 167.02 228.99 168.81 228.99 171.12V175.37C228.99 177.64 229.63 179.4 230.9 180.64C232.17 181.88 233.96 182.51 236.26 182.51C237.44 182.51 238.61 182.3 239.77 181.88C240.93 181.46 241.98 180.87 242.92 180.09L248.68 185.2C246.94 186.79 244.99 188.01 242.83 188.88C240.66 189.75 238.48 190.18 236.27 190.18Z"
              fill="white"
            />
            {/* Paths du texte... (tous les autres paths) */}
          </motion.svg>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-beige text-4xl font-bold mt-20"
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
              identification et acquisition d'actifs à fort potentiel.
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
              pilotage locatif, suivi opérationnel et valorisation.
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
              montage, levée de fonds et optimisation des rendements.
            </motion.span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}