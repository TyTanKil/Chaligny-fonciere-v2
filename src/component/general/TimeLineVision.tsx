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
    <div className="relative w-full py-12">
      {/* Ligne horizontale */}
      <div className="absolute top-1/2 left-0 right-0 h-px bg-darkblue -translate-y-1/2" />

      {/* Étapes */}
      <div className="relative flex justify-around gap-6">
        {processSteps.map((step, index) => (
          <div
            key={index}
            className={`px-8 py-6 text-xl font-medium text-center whitespace-nowrap ${step.bg} ${step.text}`}
          >
            {step.label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProcessTimeline;
