const blocks = [
  {
    title: "AI under control",
    body: "AI capabilities are introduced within defined boundaries. Natural language search, summarisation and assisted reporting operate on prepared and validated data. Outputs are cross-checked against statistical methods, and client data is never used to train external models.",
  },
  {
    title: "People enforce protection",
    body: "Security is reinforced by clear roles and disciplined access management. Role-based permissions, multi-factor authentication, structured access reviews and secure device policies ensure accountability at every level. Security training is mandatory, not optional.",
  },
  {
    title: "Aligned with your environment",
    body: "Rubiklab integrates into existing security ecosystems rather than replacing them. SSO, API-based authentication, SIEM integration, custom retention policies and client-specific access controls allow alignment with your internal standards.",
  },
  {
    title: "Prepared for the unexpected",
    body: "Operational monitoring is continuous. Real-time threat detection, behavioural analysis, automated alerting and defined incident response procedures support rapid containment and recovery. RTO and RPO objectives are documented and tested.",
  },
  {
    title: "Evolving with technology",
    body: "Security controls are reviewed as technology and regulation evolve. Zero-trust principles, enhanced anomaly detection, advanced encryption and privacy-enhancing techniques are extended as new risks emerge.",
  },
  {
    title: "Resilience by design",
    body: "Operational resilience is embedded across infrastructure, processes and oversight. Security is not an add-on. It is integrated into how data is stored, accessed, processed and governed across the platform.",
  },
];

const SecurityOperationalBlock = () => {
  return (
    <section className="py-[140px] px-8 md:px-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-16 max-w-[680px]">
          Operational resilience
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-14">
          {blocks.map((block, i) => (
            <div key={i}>
              <h3 className="text-lg md:text-xl font-serif text-foreground mb-4">
                {block.title}
              </h3>
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                {block.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SecurityOperationalBlock;
