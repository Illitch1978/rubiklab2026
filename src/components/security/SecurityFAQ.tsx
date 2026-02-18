import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How does Rubiklab define customer data?",
    answer: "Customer data includes all documents, transcripts, uploads, configurations and generated outputs associated with a client workspace. Clients retain ownership of their data.",
  },
  {
    question: "How is client data kept private and secure?",
    answer: "Data is encrypted in transit and at rest. Access is controlled through role-based permissions, authentication protocols and continuous monitoring.",
  },
  {
    question: "Where is data hosted and processed?",
    answer: "Data is hosted in secure, regionally appropriate cloud environments. Clients may request geographic constraints where required.",
  },
  {
    question: "Is our data used to train AI models?",
    answer: "No. Client data is never used to train public or shared models.",
  },
  {
    question: "Can we control retention policies?",
    answer: "Yes. Retention and deletion settings are configurable. Clients determine how long data is stored.",
  },
  {
    question: "How often are security audits performed?",
    answer: "Security testing includes regular internal reviews and scheduled third-party penetration testing.",
  },
  {
    question: "How do you manage access controls?",
    answer: "Granular permissions govern user access. All access events are logged and auditable.",
  },
];

const SecurityFAQ = () => {
  return (
    <section className="py-[140px] px-8 md:px-16 bg-[hsl(20,10%,6%)]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif text-[hsl(40,30%,92%)] mb-16 max-w-[680px]">
          Frequently asked questions
        </h2>
        <div className="max-w-[680px]">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="border-b border-[hsl(20,10%,18%)]"
              >
                <AccordionTrigger className="text-left text-base font-serif text-[hsl(40,30%,92%)] hover:no-underline py-[18px]">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-base text-[hsl(30,10%,55%)] leading-relaxed pb-[18px]">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default SecurityFAQ;
