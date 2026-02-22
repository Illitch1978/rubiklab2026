const quotes = [
  {
    text: "We brought ten years of reports into Studio. For the first time, our historical work actually informs our current campaigns. We can see patterns we used to miss entirely.",
    role: "Head of Insight, Global Research Agency",
  },
  {
    text: "We used to spend most of our time consolidating material and formatting slides. Now we spend that time thinking. The structure is already there. The reasoning is visible. The work feels more deliberate.",
    role: "Strategy Director, Professional Services Firm",
  },
  {
    text: "We tracked a sentiment shift in social listening, compared it with our survey tracker and built a full campaign response inside Studio. The confidence metrics gave our leadership team the assurance to move quickly.",
    role: "Marketing Lead, Consumer Brand",
  },
  {
    text: "I expected something clever and conversational. What changed the game was being able to run multiple investigations at once, shape the narrative, and assemble everything into a structured deck without leaving the platform.",
    role: "Managing Partner, Boutique Consultancy",
  },
];

const PlatformQuotes = () => {
  return (
    <section className="py-24 md:py-32 px-8 md:px-16 border-t border-border">
      <div className="max-w-[1120px] mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-16">
          What teams tell us
        </h2>
        <div className="grid md:grid-cols-2 gap-10">
          {quotes.map((q, i) => (
            <div key={i}>
              <blockquote className="text-lg font-serif text-foreground leading-relaxed mb-4">
                "{q.text}"
              </blockquote>
              <p className="text-sm text-muted-foreground">
                {q.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlatformQuotes;
