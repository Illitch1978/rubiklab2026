const jobs = [
  { title: "Mid Market Sales Manager, Dallas", type: "Full Time", location: "Dallas" },
  { title: "Enterprise Customer Success Manager", type: "Full Time", location: "New York" },
  { title: "Senior Software Engineer, Full Stack", type: "Full Time", location: "San Francisco" },
  { title: "Senior Software Engineer, Core Infrastructure", type: "Full Time", location: "San Francisco" },
  { title: "Senior Software Engineer, Frontend", type: "Full Time", location: "San Francisco" },
  { title: "Applied Legal Researcher", type: "Full Time", location: "San Francisco" },
];

const departments = [
  "All Careers", "Engineering", "Go to Market", "Customer Success", "Legal",
  "Product", "Design", "Marketing",
];

const AboutCareers = () => {
  return (
    <section className="py-24 md:py-32 px-8 md:px-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-serif text-foreground mb-4 max-w-2xl">
          <span className="font-semibold">Join our team.</span>{" "}
          <span className="text-muted-foreground">
            Help Rubiklab shape the future of professional services.
          </span>
        </h2>

        {/* Department filters */}
        <div className="flex flex-wrap gap-2 my-10">
          {departments.map((dept, i) => (
            <button
              key={i}
              className={`px-4 py-2 text-sm rounded-full border transition-colors ${
                i === 0
                  ? "border-foreground bg-foreground text-background"
                  : "border-border text-muted-foreground hover:border-foreground/30"
              }`}
            >
              {dept}
            </button>
          ))}
        </div>

        {/* Job listings */}
        <div className="divide-y divide-border">
          {jobs.map((job, i) => (
            <a
              key={i}
              href="#"
              className="flex flex-col md:flex-row md:items-center justify-between py-6 group hover:pl-2 transition-all"
            >
              <div>
                <p className="text-foreground font-medium group-hover:text-accent transition-colors">
                  {job.title}
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  {job.type} · {job.location}
                </p>
              </div>
              <span className="text-sm text-foreground mt-2 md:mt-0">
                Apply →
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutCareers;
