const columns = [
  {
    blocks: [
      {
        heading: "AI under control",
        points: [
          "Natural language interface",
          "Search enhancement and context summarisation",
          "Assisted reporting",
          "Cross-validated against statistical methods",
          "Client data never used to train external models",
        ],
      },
      {
        heading: "Prepared for the unexpected",
        points: [
          "Real-time threat detection and behavioural analysis",
          "Automated alerting and network monitoring",
          "Immediate containment and threat eradication",
          "Recovery procedures with defined RTO and RPO",
          "Structured post-incident analysis",
        ],
      },
    ],
  },
  {
    blocks: [
      {
        heading: "Security reinforced by people",
        points: [
          "Role-based access control",
          "Multi-factor authentication",
          "Structured access reviews",
          "Secure device management",
          "Mandatory security training",
        ],
      },
      {
        heading: "Aligned with your security environment",
        points: [
          "SSO integration",
          "API-based authentication",
          "SIEM integration",
          "Custom retention policies",
          "Client-specific access controls",
        ],
      },
    ],
  },
  {
    blocks: [
      {
        heading: "Security evolves with technology",
        points: [
          "Expanded zero-trust implementation",
          "Enhanced AI monitoring and anomaly detection",
          "Advanced encryption capabilities",
          "Privacy-enhancing technologies",
          "Continuous regulatory adaptation",
        ],
      },
    ],
  },
];

const SecurityOperationalBlock = () => {
  return (
    <section className="py-[140px] px-8 md:px-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-16 max-w-[680px]">
          Operational resilience
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-20">
          {columns.map((col, ci) => (
            <div key={ci} className="flex flex-col gap-16">
              {col.blocks.map((block, bi) => (
                <div key={bi}>
                  <h3 className="text-lg md:text-xl font-serif text-foreground mb-6">
                    {block.heading}
                  </h3>
                  <ul className="text-muted-foreground text-sm md:text-base leading-relaxed space-y-3 list-none">
                    {block.points.map((pt, pi) => (
                      <li key={pi}>• {pt}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SecurityOperationalBlock;
