import { motion } from "framer-motion";
import React from "react";

type ToggleProps = {
  leftLabel: React.ReactNode;
  rightLabel: React.ReactNode;
  active: boolean;
  onToggle: (value: boolean) => void;
};

export function Toggle({
  leftLabel,
  rightLabel,
  active,
  onToggle,
}: ToggleProps) {
  return (
    <div
      className="
        flex 
        items-center 
        gap-4 
        sm:gap-6 
        text-xl sm:text-2xl 
        select-none
        flex-wrap
        justify-center
      "
      role="switch"
      aria-checked={active}
    >
      {/* LEFT LABEL */}
      <motion.span
        onClick={() => onToggle(false)}
        className="cursor-pointer"
        animate={{
          opacity: active ? 0.5 : 1,
          scale: active ? 0.95 : 1,
        }}
        transition={{ duration: 0.2 }}
      >
        {leftLabel}
      </motion.span>

      {/* SWITCH */}
      <div
        onClick={() => onToggle(!active)}
        className={`
          relative
          h-5 sm:h-6
          w-12 sm:w-14
          cursor-pointer
          rounded-full
          p-[2px]
          sm:p-1
          transition-colors
          ${active ? "bg-beige" : "bg-lightgreen"}
        `}
        aria-label="Changer de page"
      >
        <motion.div
          className="h-4 w-4 sm:h-4 sm:w-4 rounded-full bg-darkblue"
          animate={{
            x: active ? 28 : 0, // ajusté pour mobile
          }}
          transition={{
            type: "spring",
            stiffness: 500,
            damping: 30,
          }}
        />
      </div>

      {/* RIGHT LABEL */}
      <motion.span
        onClick={() => onToggle(true)}
        className="cursor-pointer"
        animate={{
          opacity: active ? 1 : 0.5,
          scale: active ? 1 : 0.95,
        }}
        transition={{ duration: 0.2 }}
      >
        {rightLabel}
      </motion.span>
    </div>
  );
}
