import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center">
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Legal professionals in discussion"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/40" />
      </div>

      <div className="relative z-10 px-8 md:px-16 max-w-3xl pt-24">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-medium leading-[0.95] mb-8 text-foreground">
          Practice<br />Made Perfect
        </h1>
        <p className="text-lg md:text-xl text-secondary-foreground max-w-lg mb-10 leading-relaxed">
          Today's top law firms and in-house legal teams trust Harvey to elevate their craft and navigate complexity.
        </p>
        <a
          href="#"
          className="inline-block border border-foreground/60 text-foreground px-8 py-3 text-sm tracking-wide hover:bg-foreground hover:text-primary-foreground transition-all duration-300"
        >
          Request a Demo
        </a>
      </div>
    </section>
  );
};

export default Hero;
