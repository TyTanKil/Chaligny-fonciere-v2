// TeamCarousel.tsx
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";

type Member = {
  id: number;
  name: string;
  role: string;
  description: string;
  image: string;
};

type Props = {
  data: Member[];
  autoplayDelay?: number;
  overflowImage?: boolean;
  alignBottom?: boolean;
  children?: React.ReactNode;
};

export function TeamCarousel({
  data,
  autoplayDelay = 200000,
  overflowImage = false,
  alignBottom = false,
  children,
}: Props) {
  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prev) => (prev + 1) % data.length);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + data.length) % data.length);
  };

  // 🔁 Autoplay
  useEffect(() => {
    const interval = setInterval(next, autoplayDelay);
    return () => clearInterval(interval);
  }, [index]);

  const member = data[index];

  return (
    <div
      className={`
    flex justify-around
    ${alignBottom ? "items-end" : "items-center"}
  `}
    >
      {/* TEXTE */}
      <div className="relative max-w-lg text-center">
        <button
          onClick={prev}
          className="absolute -left-14 top-1/2 -translate-y-1/2 text-3xl"
        >
          <FaChevronLeft />
        </button>

        <AnimatePresence mode="wait">
          <motion.div
            key={member.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl text-darkblue font-[Montserrat] font-bold uppercase">
              {member.name}
            </h3>

            <p className="text-lg text-lightgreen font-[Montserrat] font-medium mt-1">
              {member.role}
            </p>

            <p className="mt-6 text-darkblue font-[Montserrat]">
              {member.description}
            </p>
          </motion.div>
        </AnimatePresence>

        <button
          onClick={next}
          className="absolute -right-14 top-1/2 -translate-y-1/2 text-3xl"
        >
          <FaChevronRight />
        </button>
        {children}
      </div>

      {/* IMAGE */}
      <div
        className={`
    relative
    w-[420px] h-[430px]
    translate-x-20
    ${overflowImage ? "-translate-y-20" : ""}
  `}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={member.image}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0"
          >
            <Image
              src={member.image}
              alt={member.name}
              fill
              className="object-cover"
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
