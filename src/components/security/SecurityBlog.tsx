const posts = [
  {
    title: "Security by Design: How Harvey Engineered Trust from Day One",
    date: "May 29, 2025",
    href: "#",
  },
  {
    title: "Building Enterprise Security at Scale",
    date: "Apr 15, 2025",
    href: "#",
  },
];

const SecurityBlog = () => {
  return (
    <section className="py-24 px-8 md:px-16">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-12">
          Secured by a World-Class Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {posts.map((post, i) => (
            <a
              key={i}
              href={post.href}
              className="group block border border-border rounded-lg overflow-hidden hover:border-foreground/30 transition-colors"
            >
              <div className="aspect-video bg-muted" />
              <div className="p-6">
                <p className="text-xs text-muted-foreground mb-2">{post.date}</p>
                <h3 className="text-base font-serif font-medium text-foreground group-hover:text-accent transition-colors">
                  {post.title}
                </h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SecurityBlog;
