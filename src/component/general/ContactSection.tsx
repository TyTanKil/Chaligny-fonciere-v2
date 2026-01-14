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
    <section className="relative flex justify-center overflow-hidden px-4 sm:px-6 mt-5">
      <div className="relative flex w-full max-w-7xl flex-col lg:flex-row gap-10">
        {/* FORMULAIRE */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="relative z-10 w-full lg:w-[55%] bg-white p-6 sm:p-10 lg:p-16 flex flex-col text-darkblue font-[Montserrat] rounded-lg shadow-md"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lightgreen font-[Faustina] text-xl sm:text-2xl mb-2"
          >
            {eyebrow}
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-4 sm:mb-6 text-lg sm:text-xl lg:text-2xl font-semibold"
          >
            {title}
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 font-[Faustina]"
          >
            <input
              placeholder="Nom"
              className="p-2 border border-darkblue rounded"
            />
            <input
              placeholder="Prénom"
              className="p-2 border border-darkblue rounded"
            />
            <input
              placeholder="Mail"
              className="p-2 border border-darkblue rounded"
            />
            <input
              placeholder="Téléphone"
              className="p-2 border border-darkblue rounded"
            />
          </motion.div>

          <motion.textarea
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            placeholder="Message"
            className="font-[Faustina] border border-darkblue p-2 w-full mt-4 col-span-2 rounded"
          />

          {/* Coordonnées */}
          <div className="mt-6 space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex items-center gap-4"
            >
              <img
                src="/phone.png"
                alt="Phone"
                className="w-6 h-6 sm:w-8 sm:h-8"
              />
              <a
                href={`tel:${phone}`}
                className="text-darkblue text-sm sm:text-base hover:underline"
              >
                {phone}
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="flex items-center gap-4"
            >
              <img
                src="/email.png"
                alt="Email"
                className="w-6 h-6 sm:w-8 sm:h-8"
              />
              <a
                href={`mailto:${email}`}
                className="text-darkblue text-sm sm:text-base hover:underline"
              >
                {email}
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="flex items-center gap-4"
            >
              <img
                src="/location.png"
                alt="Location"
                className="w-6 h-6 sm:w-8 sm:h-8"
              />
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                  address
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-darkblue text-sm sm:text-base hover:underline"
              >
                {address}
              </a>
            </motion.div>
          </div>
        </motion.div>

        {/* IMAGE OU ILLUSTRATION */}
        {srcImage && (
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: true, amount: 0.3 }}
            className="relative w-full lg:w-[45%] mt-6 lg:mt-0 flex justify-center"
          >
            <div className="overflow-hidden rounded-lg lg:rounded-tr-[120px] lg:rounded-br-[120px] p-4 sm:p-6 lg:p-10">
              <img
                src={srcImage}
                alt={altImage}
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
