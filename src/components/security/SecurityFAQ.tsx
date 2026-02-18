import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How does Rubiklab define secure data handling?",
    answer: "Through defined access controls, documented processing pipelines and auditable system behaviour.",
  },
  {
    question: "How is client data kept private?",
    answer: "Client environments are isolated. Access is role-based. Data is encrypted in transit and at rest.",
  },
  {
    question: "Where is data hosted and processed?",
    answer: "Hosting can be configured according to regional and organisational requirements.",
  },
  {
    question: "How is access managed?",
    answer: "Granular permissions align with internal approval workflows and enterprise authentication systems.",
  },
  {
    question: "Is client data used to train models?",
    answer: "No. Client data is not used to train external or shared models.",
  },
  {
    question: "Can firms restrict model interactions?",
    answer: "Yes. AI components operate within defined boundaries on prepared data only.",
  },
  {
    question: "How often is testing performed?",
    answer: "Independent security testing is conducted regularly and documentation is available upon request.",
  },
];

const SecurityFAQ = () => {
  return (
    <section className="py-24 px-8 md:px-16">
      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border-border">
              <AccordionTrigger className="text-left text-base font-serif text-foreground hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default SecurityFAQ;
