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
        w-full max-w-sm sm:max-w-md md:max-w-lg
        h-200 sm:h-140 md:h-150 
        flex flex-col font-[Montserrat] 
        ${backgroundColor} p-4 sm:p-5 md:p-6  shadow-md
        transition-transform hover:scale-105
      `}
    >
      {/* Image */}
      <div className="w-full h-48 sm:h-56 md:h-64 overflow-hidden ">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="h-full w-full object-cover"
        />
      </div>

      {/* Contenu */}
      <div className="flex flex-col gap-4 p-3 sm:p-5">
        <h3
          className={`text-base sm:text-lg md:text-xl font-semibold uppercase tracking-wide ${titleColor}`}
        >
          {title}
        </h3>

        <div
          className={`space-y-2 sm:space-y-3 text-sm sm:text-base md:text-lg leading-relaxed ${descriptionColor}`}
        >
          {description.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    </article>
  );
}
