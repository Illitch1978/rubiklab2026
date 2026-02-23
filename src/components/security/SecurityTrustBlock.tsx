import { Separator } from "@/components/ui/separator";

const SecurityTrustBlock = () => {
  return (
    <section className="pb-14 md:pb-[56px] px-8 md:px-16">
      <div className="max-w-3xl mx-auto">
        {/* Divider before Trust */}
        <Separator className="mb-16 bg-border/60" />

        <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-4">
          Trust and assurance
        </h2>

        {/* Sub-block 1: Independent validation */}
        <div className="mb-10">
          <h3 className="text-xl md:text-2xl font-serif text-foreground mb-4">
            Independent validation
          </h3>
          <p className="text-muted-foreground text-base md:text-lg leading-[1.5] mb-3">
            Security claims are only meaningful when validated. Rubiklab maintains a programme of independent certification and testing.
          </p>
          <ul className="text-muted-foreground text-base md:text-lg space-y-[8px] list-none mt-3 mb-4 leading-[1.45]">
            <li>• ISO 27001 certification</li>
            <li>• Grade A penetration testing certification</li>
            <li>• Regular third-party security audits</li>
            <li>• Continuous compliance monitoring</li>
          </ul>
          <p className="text-foreground text-base md:text-lg font-medium leading-[1.5]">
            Controls are tested, reviewed and strengthened continuously.
          </p>
        </div>

        {/* Sub-block 2: Data protection */}
        <Separator className="mb-16 mt-6 bg-border/60" />
        <div className="mb-10">
          <h3 className="text-xl md:text-2xl font-serif text-foreground mb-4">
            Data protection by design
          </h3>
          <p className="text-muted-foreground text-base md:text-lg leading-[1.5] mb-3">
            Privacy is embedded into our development lifecycle, not added afterwards. We maintain compliance with applicable data protection frameworks.
          </p>
          <ul className="text-muted-foreground text-base md:text-lg space-y-[8px] list-none mt-3 mb-4 leading-[1.45]">
            <li>• GDPR</li>
            <li>• UK Data Protection Act 2018</li>
            <li>• CCPA</li>
            <li>• Industry-specific regulatory requirements</li>
          </ul>
          <p className="text-muted-foreground text-base md:text-lg leading-[1.5] mb-3">
            International transfers follow recognised legal safeguards including Standard Contractual Clauses.
          </p>
          <p className="text-foreground text-base md:text-lg font-medium leading-[1.5]">
            Clients retain clarity over where data is stored and processed.
          </p>
        </div>

        {/* Sub-block 3: Client isolation */}
        <Separator className="mb-16 mt-6 bg-border/60" />
        <div>
          <h3 className="text-xl md:text-2xl font-serif text-foreground mb-4">
            Client environments are segregated
          </h3>
          <p className="text-muted-foreground text-base md:text-lg leading-[1.5] mb-3">
            Client data is logically and operationally segregated. Each environment operates with distinct processing boundaries, preventing cross-client exposure.
          </p>
          <ul className="text-muted-foreground text-base md:text-lg space-y-[8px] list-none mt-3 mb-4 leading-[1.45]">
            <li>• Granular client-level permissions</li>
            <li>• Internal least-privilege enforcement</li>
            <li>• Comprehensive audit logging</li>
          </ul>
          <p className="text-foreground text-base md:text-lg font-medium leading-[1.5]">
            Every access event is traceable.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SecurityTrustBlock;
