import securityHeroVideo from "@/assets/security-hero.mp4";

const SecurityHero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden flex flex-col">
      {/* Background video */}
      <video
        src={securityHeroVideo}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="relative z-10 flex-1 flex items-center">
        <div className="px-8 md:px-16 max-w-3xl pt-24">
          <h1 className="text-5xl md:text-7xl lg:text-[6.5rem] font-serif font-medium text-white leading-[0.95] mb-8 tracking-tight">
            Protection built<br />for critical work
          </h1>
          <p className="text-white/70 text-base md:text-lg max-w-md leading-relaxed">
            Sensitive information demands oversight, traceability and restraint.<br />Rubiklab is designed to meet that standard.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SecurityHero;
