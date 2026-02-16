const useIn = ["Word", "Outlook", "iManage", "Web Browsers", "Email", "Mobile App"];
const pullFrom = [
  "LexisNexis®", "Rettsdata", "iManage", "NetDocuments",
  "SharePoint", "Google Drive", "Aderant", "Ironclad", "APIs",
  "400+ Regional Sources",
];

const Integrations = () => {
  return (
    <section className="py-24 md:py-32 px-8 md:px-16 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif text-foreground text-center mb-16">
          Works with tools your team is already using
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Use Harvey in */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-6 tracking-wide uppercase">
              Use Harvey in:
            </h4>
            <div className="grid grid-cols-2 gap-3">
              {useIn.map((tool, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 p-4 rounded-lg border border-border hover:border-foreground/20 transition-colors"
                >
                  <div className="w-8 h-8 rounded bg-secondary flex items-center justify-center flex-shrink-0">
                    <span className="text-xs font-medium text-muted-foreground">
                      {tool.charAt(0)}
                    </span>
                  </div>
                  <span className="text-sm text-foreground">{tool}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Pull context from */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-6 tracking-wide uppercase">
              Pull context from:
            </h4>
            <div className="grid grid-cols-2 gap-3">
              {pullFrom.map((source, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 p-4 rounded-lg border border-border hover:border-foreground/20 transition-colors"
                >
                  <div className="w-8 h-8 rounded bg-secondary flex items-center justify-center flex-shrink-0">
                    <span className="text-xs font-medium text-muted-foreground">
                      {source.charAt(0)}
                    </span>
                  </div>
                  <span className="text-sm text-foreground">{source}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Integrations;
