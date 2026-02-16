import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How does Harvey define customer data?",
    answer: "Customer data refers to documents uploaded into the application. Customer content refers to queries and corresponding responses. While these are separate terms, in most cases they are discussed together and both are protected under stringent security policies.",
  },
  {
    question: "How does Harvey keep my data private and secure?",
    answer: "All data is encrypted at rest and in transit with strong access controls. Customer data is never used for model training by default. Annual SOC 2 Type II and ISO 27001 audits validate these controls, and strict access controls follow the principle of least privilege.",
  },
  {
    question: "Where is my data hosted and processed?",
    answer: "The cloud environment is hosted in Microsoft Azure. For customers with data localization requirements, processing is available in the EU and Switzerland, Australia, or the US.",
  },
  {
    question: "How do you respect access controls for client data?",
    answer: "Strict role-based access controls and logical workspace separation ensure only authorized users access specific data. Customers determine what data to upload, retention periods, and sharing permissions.",
  },
  {
    question: "How does Harvey ensure no one is training on my data?",
    answer: "Model providers are contractually prohibited from training on customer data. Data is only used for processing requests, not model improvement, with Zero Data Retention (ZDR) required from providers.",
  },
  {
    question: "Can my firm use our client data for model training?",
    answer: "Only if explicitly requested. In that case, a bespoke model is created exclusively for that firm, and the data is never used to train models for other customers.",
  },
  {
    question: "How often do you perform security audits and vulnerability assessments?",
    answer: "Automated vulnerability scans, annual third-party penetration tests, and continuous security monitoring are maintained as standard practice.",
  },
];

const SecurityFAQ = () => {
  return (
    <section className="py-24 px-8 md:px-16 border-t border-border">
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
