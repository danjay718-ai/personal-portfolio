'use client';

export function About() {
  const skills = [
    'PHP',
    'Laravel',
    'MySQL',
    'JavaScript',
    'Tailwind CSS',
    'REST API',
    'JWT',
    'OAuth 2.0',
    'Git',
    'Docker',
    'Linux',
    'React',
  ];

  return (
    <section className="border-b border-border py-16 px-6">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold text-foreground mb-8">Skills & Experience</h2>

        <div className="mb-10">
          <h3 className="text-sm font-semibold text-primary uppercase tracking-wide mb-4">
            Technologies
          </h3>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-3 py-2 bg-muted/30 text-foreground rounded border border-border text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="space-y-6 text-foreground">
          <div>
            <h3 className="font-semibold mb-2">Experience</h3>
            <p className="text-muted-foreground text-sm mb-2">Senior Developer — 2022 – Present</p>
            <p className="text-sm leading-relaxed">
              Building scalable web applications with React and Node.js. Mentoring junior developers and architecting solutions for complex problems.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Education</h3>
            <p className="text-muted-foreground text-sm">
              B.S. Computer Science — University Name, 2019
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
