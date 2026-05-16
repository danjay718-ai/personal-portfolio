'use client';

export function Hero() {
  return (
    <section className="border-b border-border pt-20 pb-20 px-6">
      <div className="max-w-2xl mx-auto space-y-8">
        <div>
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-3 text-balance">
            Your Name
          </h1>
          <p className="text-lg text-primary font-medium">
            Full-stack developer & designer
          </p>
        </div>

        <div className="space-y-4 text-base leading-relaxed text-foreground max-w-none">
          <p>
            I&apos;m a developer passionate about building elegant, functional web experiences. Currently working on projects that combine clean design with solid engineering practices.
          </p>

          <p>
            When I&apos;m not coding, you can find me exploring new technologies, reading, or working on side projects. I believe in writing clean code, continuous learning, and creating things that matter.
          </p>

          <p>
            This is my personal corner of the internet where I share my work, thoughts, and experiments in web development.
          </p>
        </div>

        <div className="pt-4 flex gap-6">
          <a href="#projects" className="text-primary hover:underline font-medium text-sm">
            View Projects →
          </a>
          <a href="#contact" className="text-primary hover:underline font-medium text-sm">
            Get in Touch →
          </a>
        </div>
      </div>
    </section>
  );
}
