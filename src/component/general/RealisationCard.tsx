type ProjectCardProps = {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string[];
  backgroundColor: string;
  titleColor: string;
  descriptionColor: string;
};

export default function ProjectCard({
  imageSrc,
  imageAlt,
  title,
  description,
  backgroundColor,
  titleColor,
  descriptionColor,
}: ProjectCardProps) {
  return (
    <article
      className={`
        w-full max-w-xs sm:max-w-sm md:max-w-md
        flex flex-col font-[Montserrat] 
        ${backgroundColor} p-3 sm:p-4 md:p-5 shadow-md
        transition-transform hover:scale-105
      `}
    >
      {/* Image */}
      <div className="w-full h-40 sm:h-48 md:h-56 overflow-hidden rounded-md">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="h-full w-full object-cover"
        />
      </div>

      {/* Contenu */}
      <div className="flex flex-col gap-2 sm:gap-3 md:gap-4 mt-2 sm:mt-3 md:mt-4">
        <h3
          className={`text-sm sm:text-base md:text-lg font-semibold uppercase tracking-wide ${titleColor}`}
        >
          {title}
        </h3>

        <div
          className={`space-y-1 sm:space-y-2 md:space-y-3 text-xs sm:text-sm md:text-base leading-snug sm:leading-relaxed md:leading-relaxed ${descriptionColor}`}
        >
          {description.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    </article>
  );
}
