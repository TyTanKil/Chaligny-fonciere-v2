"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

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
};

export function TeamCarousel({ data, autoplayDelay = 5000 }: Props) {
  const [index, setIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const next = () => setIndex((prev) => (prev + 1) % data.length);
  const prev = () => setIndex((prev) => (prev - 1 + data.length) % data.length);

  // Autoplay
  useEffect(() => {
    const interval = setInterval(next, autoplayDelay);
    return () => clearInterval(interval);
  }, [index, autoplayDelay]);

  const member = data[index];

  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-12 sm:gap-16 px-4 sm:px-0">
      {/* TEXTE */}
      <div className="relative max-w-md sm:max-w-lg text-center sm:text-left flex flex-col items-center sm:items-start">
        {/* Flèches desktop */}
        <button
          onClick={prev}
          className="hidden sm:block absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 text-2xl sm:text-3xl z-20"
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
            <h3 className="text-lg sm:text-xl text-darkblue font-[Montserrat] font-bold uppercase">
              {member.name}
            </h3>
            <p className="text-md sm:text-lg text-lightgreen font-[Montserrat] font-medium mt-1">
              {member.role}
            </p>
            <p className="mt-4 sm:mt-6 text-darkblue font-[Montserrat] text-sm sm:text-base">
              {member.description}
            </p>
          </motion.div>
        </AnimatePresence>

        <button
          onClick={next}
          className="hidden sm:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 text-2xl sm:text-3xl z-20"
        >
          <FaChevronRight />
        </button>
      </div>

      {/* IMAGE */}
      <div
        ref={containerRef}
        className="relative w-60 sm:w-[300px] h-60 sm:h-[350px] flex-shrink-0 overflow-hidden rounded-lg cursor-grab"
      >
        <motion.div
          className="w-full h-full"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.2}
          onDragEnd={(e, info) => {
            if (info.offset.x < -50) next();
            else if (info.offset.x > 50) prev();
          }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={member.image}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.6 }}
              className="w-full h-full relative"
            >
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover object-center rounded-lg"
              />
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}
