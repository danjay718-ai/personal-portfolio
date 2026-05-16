'use client';

export function Projects() {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Full-stack marketplace with payment processing and real-time inventory management.',
      tags: ['Next.js', 'PostgreSQL', 'Stripe'],
      link: '#',
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Collaborative tool for teams to organize and track their work in real-time.',
      tags: ['React', 'Firebase', 'WebSockets'],
      link: '#',
    },
    {
      id: 3,
      title: 'Analytics Dashboard',
      description: 'Interactive dashboard for visualizing business metrics and tracking performance.',
      tags: ['React', 'D3.js', 'Node.js'],
      link: '#',
    },
    {
      id: 4,
      title: 'Design System',
      description: 'Comprehensive component library with documentation and Storybook integration.',
      tags: ['React', 'TypeScript', 'Storybook'],
      link: '#',
    },
  ];

  return (
    <section id="projects" className="border-b border-border py-16 px-6">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold text-foreground mb-8">Projects</h2>

        <div className="space-y-8">
          {projects.map((project) => (
            <a
              key={project.id}
              href={project.link}
              className="group block p-5 border border-border rounded hover:border-primary/50 hover:bg-muted/20 transition-all duration-200"
            >
              <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                {project.title}
              </h3>
              <p className="text-foreground text-sm mb-4 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 text-xs bg-primary/10 text-primary rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
