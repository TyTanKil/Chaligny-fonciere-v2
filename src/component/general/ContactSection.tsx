"use client";

import { motion } from "framer-motion";

type ContactSectionProps = {
  eyebrow: string;
  title: string;
  phone?: string;
  email?: string;
  address?: string;
  srcImage?: string;
  altImage?: string;
};

export default function ContactSection({
  eyebrow,
  title,
  phone = "07 77 77 77 77",
  email = "contact@foncierechaligny.com",
  address = "10 rue des champs Elysés",
  srcImage,
  altImage,
}: ContactSectionProps) {
  return (
    <section className="relative flex justify-center overflow-hidden">
      <div className="relative flex w-full max-w-7xl flex-col lg:flex-row">
        {/* FORMULAIRE */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="relative z-10 w-full lg:w-[55%] bg-white p-10 lg:p-16 flex flex-col text-darkblue font-[Montserrat]"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lightgreen font-[Faustina] 2xl:text-3xl xl:text-2xl mb-2"
          >
            {eyebrow}
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-6 2xl:text-2xl xl:text-xl font-semibold"
          >
            {title}
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 font-[Faustina]"
          >
            <input placeholder="Nom" className="p-2 border border-darkblue" />
            <input
              placeholder="Prénom"
              className="p-2 border border-darkblue"
            />
            <input placeholder="Mail" className="p-2 border border-darkblue" />
            <input
              placeholder="Téléphone"
              className="p-2 border border-darkblue"
            />
          </motion.div>

          <motion.textarea
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            placeholder="Message"
            className="font-[Faustina] border border-darkblue p-2 w-full mt-4 col-span-2"
          />

          {/* Coordonnées */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex items-center gap-4 mt-6"
          >
            <img
              src="/phone.png"
              alt="Phone"
              className="2xl:w-12 2xl:h-12 xl:w-8 xl:h-8"
            />
            <a
              href={`tel:${phone}`}
              className="text-darkblue 2xl:text-3xl xl:text-2xl hover:underline cursor-pointer"
            >
              {phone}
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="flex items-center gap-4 mt-6"
          >
            <img
              src="/email.png"
              alt="Email"
              className="2xl:w-12 2xl:h-12 xl:w-8 xl:h-8"
            />
            <a
              href={`mailto:${email}`}
              className="text-darkblue 2xl:text-3xl xl:text-2xl hover:underline cursor-pointer"
            >
              {email}
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex items-center gap-4 mt-6"
          >
            <img
              src="/location.png"
              alt="Location"
              className="2xl:w-12 2xl:h-12 xl:w-8 xl:h-8"
            />
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                address
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-darkblue 2xl:text-3xl xl:text-2xl hover:underline cursor-pointer"
            >
              {address}
            </a>
          </motion.div>
        </motion.div>

        {/* IMAGE OU ILLUSTRATION */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: true, amount: 0.3 }}
          className="relative mt-10 lg:mt-0 lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2 w-full lg:w-[45%]"
        >
          <div className="overflow-hidden rounded-tr-[120px] rounded-br-[120px] bg-darkblue p-8 lg:p-10">
            <img
              src={srcImage}
              alt={altImage}
              className="w-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
