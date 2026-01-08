"use client";

import { useEffect, useState, useRef } from "react";
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
  overflowImage?: boolean;
  alignBottom?: boolean;
  children?: React.ReactNode;
  initialId?: number;
};

export function TeamCarousel({
  data,
  autoplayDelay = 5000,
  overflowImage = false,
  alignBottom = false,
  children,
  initialId,
}: Props) {
  const initialIndex = initialId
    ? data.findIndex((member) => member.id === initialId)
    : 0;

  const [index, setIndex] = useState(initialIndex >= 0 ? initialIndex : 0);
  const containerRef = useRef<HTMLDivElement>(null);

  const next = () => setIndex((prev) => (prev + 1) % data.length);
  const prev = () => setIndex((prev) => (prev - 1 + data.length) % data.length);

  // Auto-play
  useEffect(() => {
    const interval = setInterval(next, autoplayDelay);
    return () => clearInterval(interval);
  }, [index, autoplayDelay]);

  const member = data[index];
  const prevMember = data[(index - 1 + data.length) % data.length];
  const nextMember = data[(index + 1) % data.length];

  return (
    <div className="flex flex-col sm:flex-row justify-center items-center gap-8 sm:gap-10 w-full">
      {/* TEXTE */}
      <div className="relative max-w-md sm:max-w-lg text-center sm:text-left min-h-[260px] flex flex-col items-center sm:items-start">
        {/* Flèches desktop */}
        <button
          onClick={prev}
          className="hidden sm:block absolute left-0 top-1/2 -translate-y-1/2 -translate-x-14 text-2xl sm:text-3xl z-20"
        >
          <FaChevronLeft />
        </button>

        <div className="w-full">
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
        </div>

        <button
          onClick={next}
          className="hidden sm:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-14 text-2xl sm:text-3xl z-20"
        >
          <FaChevronRight />
        </button>
      </div>

      {children}

      {/* IMAGE carousel mobile Instagram-style */}
      <div
        ref={containerRef}
        className={`relative w-full max-w-xs sm:w-[420px] sm:h-[430px] overflow-hidden`}
      >
        <motion.div
          className="flex gap-4 sm:gap-0 cursor-grab"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.2}
          onDragEnd={(event, info) => {
            if (info.offset.x < -50) next();
            else if (info.offset.x > 50) prev();
          }}
        >
          {/* Previous member preview */}
          <motion.div className="w-2/5 sm:hidden shrink-0 opacity-50 scale-90">
            <Image
              src={prevMember.image}
              alt={prevMember.name}
              width={160}
              height={160}
              className="object-cover rounded-lg"
            />
          </motion.div>

          {/* Current member */}
          <motion.div
            key={member.image}
            className="w-11/12 sm:w-full shrink-0 relative"
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
                  className="object-cover rounded-lg"
                />
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Next member preview */}
          <motion.div className="w-2/5 sm:hidden shrink-0 opacity-50 scale-90">
            <Image
              src={nextMember.image}
              alt={nextMember.name}
              width={160}
              height={160}
              className="object-cover rounded-lg"
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
