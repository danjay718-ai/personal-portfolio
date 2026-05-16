'use client';

import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { useState } from 'react';

export default function Home() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ email: '', message: '' });

  const skills = ['React', 'Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Tailwind CSS'];

  const projects = [
    { id: 1, title: 'E-Commerce Platform', description: 'Full-stack marketplace with payment processing', tags: ['Next.js', 'PostgreSQL', 'Stripe'] },
    { id: 2, title: 'Task Management', description: 'Collaborative tool for teams', tags: ['React', 'Firebase'] },
    { id: 3, title: 'Analytics Dashboard', description: 'Business metrics visualization', tags: ['React', 'D3.js'] },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ email: '', message: '' });
    setTimeout(() => setSubmitted(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <main>
      <Navbar />
      
      <div className="pt-20 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[280px]">
            
            {/* About Card - Large, spanning 2 columns */}
            <div className="md:col-span-2 md:row-span-2 bg-gradient-to-br from-primary to-primary/80 rounded-3xl p-8 text-primary-foreground flex flex-col justify-between hover:shadow-lg transition-all duration-300">
              <div>
                <h2 className="text-2xl font-bold mb-2">About</h2>
                <p className="text-sm opacity-90 leading-relaxed">
                  I&apos;m a full-stack developer passionate about creating elegant, functional web experiences. I specialize in building scalable applications with React, Next.js, and Node.js. Always learning, always building.
                </p>
              </div>
              <div className="space-y-2">
                <p className="text-xs opacity-75">Currently open for opportunities</p>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="bg-card border border-border rounded-2xl p-6 hover:border-primary/50 hover:shadow-md transition-all duration-200 flex flex-col justify-between">
              <div>
                <p className="text-3xl font-bold text-primary">50+</p>
                <p className="text-sm text-muted-foreground mt-2">Projects Completed</p>
              </div>
            </div>

            <div className="bg-card border border-border rounded-2xl p-6 hover:border-primary/50 hover:shadow-md transition-all duration-200 flex flex-col justify-between">
              <div>
                <p className="text-3xl font-bold text-primary">3+</p>
                <p className="text-sm text-muted-foreground mt-2">Years Experience</p>
              </div>
            </div>

            {/* Skills Card */}
            <div className="bg-card border border-border rounded-2xl p-6 hover:border-primary/50 hover:shadow-md transition-all duration-200">
              <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.slice(0, 5).map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium hover:bg-primary/20 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Experience Card */}
            <div className="bg-card border border-border rounded-2xl p-6 hover:border-primary/50 hover:shadow-md transition-all duration-200">
              <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                Experience
              </h3>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="text-xs text-muted-foreground">2022 – Present</p>
                  <p className="font-medium text-foreground">Senior Developer</p>
                </div>
              </div>
            </div>

            {/* Education Card */}
            <div className="bg-card border border-border rounded-2xl p-6 hover:border-primary/50 hover:shadow-md transition-all duration-200">
              <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                Education
              </h3>
              <div className="space-y-2 text-sm">
                <p className="font-medium text-foreground">B.S. Computer Science</p>
                <p className="text-xs text-muted-foreground">University Name, 2019</p>
              </div>
            </div>

            {/* Contact Form - Spanning 2 columns */}
            <form onSubmit={handleSubmit} className="md:col-span-2 bg-card border border-border rounded-2xl p-6 hover:border-primary/50 hover:shadow-md transition-all duration-200">
              <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                Get in Touch
              </h3>
              <div className="space-y-3">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-border rounded-lg text-sm text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                  placeholder="your@email.com"
                />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={2}
                  className="w-full px-3 py-2 border border-border rounded-lg text-sm text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                  placeholder="Your message..."
                />
                <button
                  type="submit"
                  className="w-full px-4 py-2 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 hover:shadow-md transition-all text-sm"
                >
                  Send
                </button>
                {submitted && (
                  <p className="text-primary text-xs font-medium">✓ Message received!</p>
                )}
              </div>
            </form>

            {/* Social Links Card */}
            <div className="bg-card border border-border rounded-2xl p-6 hover:border-primary/50 hover:shadow-md transition-all duration-200 flex flex-col justify-between">
              <h3 className="font-semibold text-foreground mb-4 text-sm">Social</h3>
              <div className="space-y-2">
                <a href="#" className="block text-xs text-muted-foreground hover:text-primary transition-colors">GitHub →</a>
                <a href="#" className="block text-xs text-muted-foreground hover:text-primary transition-colors">LinkedIn →</a>
                <a href="#" className="block text-xs text-muted-foreground hover:text-primary transition-colors">Twitter →</a>
              </div>
            </div>
          </div>

          {/* Projects Section */}
          <div id="projects" className="mt-12 pt-12 border-t border-border">
            <h2 className="text-3xl font-bold text-foreground mb-8">Projects</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {projects.map((project) => (
                <a
                  key={project.id}
                  href="#"
                  className="group p-6 border border-border rounded-2xl hover:border-primary/50 hover:bg-primary/5 hover:shadow-md transition-all duration-200"
                >
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-2 py-1 bg-primary/10 text-primary rounded text-xs font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
