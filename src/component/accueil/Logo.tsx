export default function Logo() {
  return (
    <section className="h-screen snap-start bg-lightgreen flex justify-center items-center">
      <svg
        width="572"
        height="655"
        viewBox="0 0 406 465"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Trait 1 */}
        <path
          d="M404.775 92.021V177.189L209.44 128.347L82.3547 177.189L0 147.681V69.2955L184.73 0L404.775 92.021Z"
          className="opacity-70"
          fill="white"
        />
        <text
          x="203"
          y="110"
          textAnchor="middle"
          fill="grey"
          fontSize="44"
          fontWeight="bold"
          className="fade-word fade-delay-1 transition-all duration-300 cursor-default origin-center
  hover:scale-110 hover:fill-lightgreen"
        >
          Alliance
        </text>

        {/* Trait 2 */}
        <path
          d="M404.775 207.502V289.279L259.245 280.189L148.645 301.411L0 279.42V237.045L211.4 177.189L404.775 207.502Z"
          className="opacity-70"
          fill="white"
        />
        <text
          x="203"
          y="255"
          textAnchor="middle"
          fill="grey"
          fontSize="44"
          fontWeight="bold"
          className="fade-word fade-delay-2 transition-all duration-300 cursor-default origin-center
  hover:scale-110 hover:fill-darkblue"
        >
          Confiance
        </text>

        {/* Trait 3 */}
        <path
          d="M0 313.508V375.601L198.87 464.196L404.775 382.419L401.24 358.959L272.615 321.829L158.83 349.869L0 313.508Z"
          className="opacity-70"
          fill="white"
        />
        <text
          x="203"
          y="390"
          textAnchor="middle"
          fill="grey"
          fontSize="44"
          fontWeight="bold"
          className="fade-word fade-delay-3 transition-all duration-300 cursor-default origin-center
  hover:scale-110 hover:fill-darkbeige"
        >
          Exigence
        </text>
      </svg>
    </section>
  );
}
