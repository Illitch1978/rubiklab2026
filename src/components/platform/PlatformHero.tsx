import platformHero from "@/assets/platform-hero.jpg";

const PlatformHero = () => {
  return (
    <section className="pt-32 pb-16 px-8 md:px-16">
      <div className="max-w-6xl mx-auto">
        <p className="text-sm font-medium text-foreground mb-6 tracking-wide">
          Platform Overview
        </p>
        <h1 className="text-6xl md:text-8xl lg:text-[9rem] font-serif font-medium leading-[0.9] mb-12 text-foreground tracking-tight">
          Engineered for<br />Every Task
        </h1>
        <p className="text-lg text-muted-foreground max-w-md mb-16 leading-relaxed">
          More than 100,000 legal professionals around the world use Rubiklab to cut through complexity and navigate complex legal work.
        </p>

        <div className="relative rounded-lg overflow-hidden">
          <img
            src={platformHero}
            alt="Rubiklab platform interface"
            className="w-full h-auto object-cover rounded-lg"
          />
          <button className="absolute inset-0 flex items-center justify-center bg-foreground/10 hover:bg-foreground/20 transition-colors group">
            <div className="w-16 h-16 rounded-full bg-foreground/80 flex items-center justify-center">
              <svg className="w-6 h-6 text-background ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
            <span className="absolute bottom-6 left-6 text-sm font-medium text-background">
              Watch Video
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default PlatformHero;
