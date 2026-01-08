export const processSteps = [
  {
    label: "Identifier les actifs à potentiel",
    bg: "bg-lightgreen",
    text: "text-beige",
  },
  {
    label: "Acquérir au bon moment",
    bg: "bg-beige",
    text: "text-darkblue",
  },
  {
    label: "Optimiser et transformer",
    bg: "bg-darkblue",
    text: "text-lightgreen",
  },
  {
    label: "Valoriser / gérer dans la durée",
    bg: "bg-lightgreen",
    text: "text-beige",
  },
];

const ProcessTimeline = () => {
  return (
    <div className="relative w-full py-12 px-4 sm:px-10">
      {/* Ligne horizontale (desktop) */}
      <div className="hidden sm:block absolute top-1/2 left-0 right-0 h-px bg-darkblue -translate-y-1/2" />

      {/* Étapes */}
      <div className="flex flex-col sm:flex-row items-center sm:justify-around gap-6 relative z-10">
        {processSteps.map((step, index) => (
          <div
            key={index}
            className={`
              px-6 py-4 sm:px-8 sm:py-6
              text-lg sm:text-xl
              font-medium
              text-center
              ${step.bg} ${step.text}
              w-full sm:w-auto
              break-words
            `}
          >
            {step.label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProcessTimeline;
