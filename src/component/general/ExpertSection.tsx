"use client";

import { motion } from "framer-motion";

type ExpertSectionProps = {
  eyebrow: string;
  title: string;
  paragraphs: React.ReactNode[];
  imageSrc: string;
  imageAlt?: string;
  imageBg?: string;
};

export default function ExpertSection({
  eyebrow,
  title,
  paragraphs,
  imageSrc,
  imageAlt = "",
  imageBg = "bg-lightgreen",
}: ExpertSectionProps) {
  return (
    <section className="relative flex justify-center py-24 bg-white overflow-hidden">
      <div className="relative flex w-full max-w-7xl flex-col lg:flex-row">
        {/* TEXTE */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="z-10 w-full lg:w-[55%] bg-beige p-10 lg:p-16"
        >
          <p className="text-lightgreen 2xl:text-2xl xl:text-xl font-[Faustina] mb-4 whitespace-pre-line">
            {eyebrow}
          </p>

          <h2 className="mb-6 2xl:text-xl xl:text-lg font-semibold font-[Montserrat] text-darkblue">
            {title}
          </h2>

          <div className="space-y-4 text-darkblue font-[Montserrat] leading-relaxed">
            {paragraphs.map((text, index) => (
              <p key={index}>{text}</p>
            ))}
          </div>
        </motion.div>

        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: true, amount: 0.3 }}
          className="relative mt-10 lg:mt-0 lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2 w-full lg:w-[45%]"
        >
          <div
            className={`overflow-hidden rounded-tr-[120px] rounded-br-[120px] ${imageBg} p-8 lg:p-10`}
          >
            <img
              src={imageSrc}
              alt={imageAlt}
              className="w-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
