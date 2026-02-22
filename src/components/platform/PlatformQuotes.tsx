const quotes = [
  {
    text: "We used to spend most of our time consolidating material and formatting slides. Now the structure is already there. We focus on interpretation. The work feels sharper and more deliberate.",
    name: "Research Director",
    company: "Global Insights Agency",
  },
  {
    text: "Bringing ten years of reports into Studio changed how we run our business. We can see patterns we never noticed before and apply them directly to new campaigns. It feels like we finally have continuity.",
    name: "Head of Strategy",
    company: "Consumer Brand Group",
  },
  {
    text: "We tracked a shift in sentiment, validated it against our survey tracker and built a full campaign narrative in the same space. The confidence metrics made it easy to defend internally. That used to take weeks.",
    name: "Marketing Lead",
    company: "International Retail Brand",
  },
  {
    text: "I expected a clever assistant. What I found was a structured environment where multiple threads of work can run at once. I can explore the data, launch deeper analysis and assemble a final deck without leaving the platform. It genuinely changed how I operate.",
    name: "Managing Partner",
    company: "Strategy Consultancy",
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
              <blockquote className="text-lg font-serif text-foreground leading-[1.7] mb-4">
                "{q.text}"
              </blockquote>
              <p className="text-sm font-medium text-foreground">{q.name}</p>
              <p className="text-xs text-muted-foreground/70 mt-0.5">{q.company}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlatformQuotes;
