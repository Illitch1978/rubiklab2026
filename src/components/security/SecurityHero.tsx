import securityHeroVideo from "@/assets/security-hero.mp4";

const SecurityHero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden flex items-end">
      {/* Background video */}
      <video
        src={securityHeroVideo}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/30 to-transparent" />

      <div className="relative z-10 max-w-5xl mx-auto px-8 md:px-16 pb-24 pt-32 w-full">
        <p className="text-sm font-medium text-foreground mb-6">Security</p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-foreground leading-[1.05] mb-12">
          For the Most<br />Sensitive Matters
        </h1>
        <p className="text-muted-foreground text-base md:text-lg max-w-md mb-10 leading-relaxed">
          Rubiklab keeps your client data safe with world-class security and data privacy measures.
        </p>
        <a
          href="#"
          className="inline-block bg-foreground text-background px-6 py-3 text-sm font-medium rounded hover:opacity-90 transition-opacity"
        >
          Explore Security Portal
        </a>
      </div>
    </section>
  );
};

export default SecurityHero;

