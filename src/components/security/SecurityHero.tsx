import { useEffect, useRef } from "react";
import securityHeroVideo from "@/assets/security-hero.mp4";

const SecurityHero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.7;
    }
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden flex flex-col">
      <video
        ref={videoRef}
        src={securityHeroVideo}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Dim overlay */}
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 flex-1 flex items-center">
        <div className="px-8 md:px-16 max-w-3xl pt-24">
          <h1 className="text-5xl md:text-7xl lg:text-[6.5rem] font-serif font-medium text-white leading-[0.95] mb-8 tracking-tight">
            Security for high-stakes<br />environments
          </h1>
          <p className="text-white/70 text-base md:text-lg max-w-md leading-relaxed">
            Rubiklab protects sensitive data through certified controls, isolated processing environments and disciplined AI implementation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SecurityHero;
