'use client';

import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { useState } from 'react';

export default function Home() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [focused, setFocused] = useState<string | null>(null);

  const skills = ['React', 'Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Tailwind CSS'];

  const recentProjects = [
    { title: 'E-Commerce Platform', description: 'Full-stack marketplace with payment processing', tags: ['Next.js', 'Stripe'] },
    { title: 'Analytics Dashboard', description: 'Business metrics & data visualization', tags: ['React', 'D3.js'] },
  ];

  const experience = [
    { period: '2022 – Present', role: 'Senior Developer', company: 'Company Name' },
    { period: '2020 – 2022', role: 'Frontend Developer', company: 'Agency Inc.' },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setSubmitted(false), 4000);
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

            {/* About Card - Large, spans 2 cols × 2 rows */}
            <div className="bento-card md:col-span-2 md:row-span-2 bg-gradient-to-br from-primary via-primary/90 to-primary/70 rounded-3xl p-8 text-primary-foreground flex flex-col justify-between group overflow-hidden relative">
              {/* Ambient glow orb */}
              <div className="orb absolute -top-10 -right-10 w-48 h-48 bg-white/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />
              <div className="orb absolute -bottom-16 -left-8 w-40 h-40 bg-white/5 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-700 delay-100" />

              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/15 rounded-full text-xs font-medium mb-4 backdrop-blur-sm">
                  <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                  Open for opportunities
                </div>
                <h1 className="text-4xl font-bold mb-3 leading-tight">
                  Full-Stack<br />Developer
                </h1>
                <p className="text-sm opacity-85 leading-relaxed max-w-sm">
                  I build elegant, scalable web experiences with React, Next.js, and Node.js.
                  Passionate about clean code, great UX, and shipping fast.
                </p>
              </div>

              <div className="relative z-10 flex items-end justify-between">
                <div className="flex gap-3">
                  <a
                    href="#contact"
                    className="px-4 py-2 bg-white text-primary rounded-xl text-xs font-semibold hover:bg-white/90 transition-all hover:shadow-lg hover:-translate-y-0.5"
                  >
                    Get in touch →
                  </a>
                  <a
                    href="#"
                    className="px-4 py-2 bg-white/15 text-primary-foreground rounded-xl text-xs font-semibold hover:bg-white/25 transition-all backdrop-blur-sm hover:-translate-y-0.5"
                  >
                    View GitHub
                  </a>
                </div>
              </div>
            </div>

            {/* Experience Card */}
            <div className="bento-card bg-card border border-border rounded-2xl p-6 hover:border-primary/40 hover:shadow-md transition-all duration-300 flex flex-col group">
              <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2 text-sm">
                <span className="w-2 h-2 bg-primary rounded-full" />
                Experience
              </h3>
              <div className="space-y-3 flex-1">
                {experience.map((job, i) => (
                  <div
                    key={i}
                    className="relative pl-4 border-l-2 border-border group-hover:border-primary/30 transition-colors duration-300"
                  >
                    <p className="text-xs text-muted-foreground">{job.period}</p>
                    <p className="text-sm font-semibold text-foreground mt-0.5">{job.role}</p>
                    <p className="text-xs text-muted-foreground">{job.company}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Projects Card */}
            <div className="bento-card bg-card border border-border rounded-2xl p-6 hover:border-primary/40 hover:shadow-md transition-all duration-300 flex flex-col group">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold text-foreground flex items-center gap-2 text-sm">
                  <span className="w-2 h-2 bg-primary rounded-full" />
                  Recent Projects
                </h3>
                <a
                  href="/projects"
                  className="text-xs text-primary hover:underline underline-offset-2 transition-all"
                >
                  View all →
                </a>
              </div>
              <div className="flex flex-col justify-between flex-1 gap-2">
                {recentProjects.map((project, i) => (
                  <a
                    key={i}
                    href="/projects"
                    className="flex-1 flex flex-col justify-center p-3 rounded-xl bg-primary/5 hover:bg-primary/10 transition-colors duration-200 group/proj"
                  >
                    <p className="text-sm font-semibold text-foreground group-hover/proj:text-primary transition-colors">
                      {project.title}
                    </p>
                    <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">{project.description}</p>
                    <div className="flex gap-1.5 mt-1.5 flex-wrap">
                      {project.tags.map(tag => (
                        <span key={tag} className="px-2 py-0.5 bg-primary/10 text-primary rounded-md text-xs font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Skills Card */}
            <div className="bento-card bg-card border border-border rounded-2xl p-6 hover:border-primary/40 hover:shadow-md transition-all duration-300 group">
              <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2 text-sm">
                <span className="w-2 h-2 bg-primary rounded-full" />
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, i) => (
                  <span
                    key={skill}
                    style={{ animationDelay: `${i * 60}ms` }}
                    className="skill-tag px-3 py-1.5 bg-primary/10 text-primary rounded-xl text-xs font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-200 cursor-default hover:scale-105 hover:shadow-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Education Card */}
            <div className="bento-card bg-card border border-border rounded-2xl p-6 hover:border-primary/40 hover:shadow-md transition-all duration-300 group cursor-default">
              <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2 text-sm">
                <span className="w-2 h-2 bg-primary rounded-full" />
                Education
              </h3>
              <div className="space-y-3 text-sm">
                <div className="p-3 rounded-xl bg-primary/5 group-hover:bg-primary/10 transition-colors">
                  <p className="font-semibold text-foreground">B.S. Computer Science</p>
                  <p className="text-xs text-muted-foreground mt-1">University Name · 2019</p>
                </div>
              </div>
            </div>

            {/* Connect Card — beside Education */}
            <div className="bento-card bg-card border border-border rounded-2xl p-6 hover:border-primary/40 hover:shadow-md transition-all duration-300 flex flex-col group">
              <h3 className="font-semibold text-foreground mb-4 text-sm flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full" />
                Connect
              </h3>
              <div className="flex flex-col justify-between flex-1">
                {[
                  { label: 'GitHub', href: '#', icon: '⌥' },
                  { label: 'LinkedIn', href: '#', icon: '◈' },
                  { label: 'Twitter / X', href: '#', icon: '✦' },
                ].map(({ label, href, icon }) => (
                  <a
                    key={label}
                    href={href}
                    className="flex items-center justify-between px-3 py-2.5 rounded-xl text-xs text-muted-foreground hover:text-primary hover:bg-primary/5 transition-all duration-200 group/link"
                  >
                    <span className="flex items-center gap-2">
                      <span className="text-primary/50 group-hover/link:text-primary transition-colors">{icon}</span>
                      {label}
                    </span>
                    <span className="opacity-0 group-hover/link:opacity-100 transition-opacity">→</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Contact / Get in Touch — full width */}
            <div id="contact" className="bento-card md:col-span-3 bg-card border border-border rounded-2xl p-8 hover:border-primary/40 hover:shadow-md transition-all duration-300">
              <h3 className="font-semibold text-foreground mb-5 flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full" />
                Get in Touch
              </h3>
              {submitted ? (
                <div className="flex items-center justify-center py-8">
                  <div className="text-center space-y-2">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-sm font-semibold text-foreground">Message sent!</p>
                    <p className="text-xs text-muted-foreground">I&apos;ll get back to you soon.</p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => setFocused('name')}
                    onBlur={() => setFocused(null)}
                    required
                    className={`px-4 py-2.5 bg-background border rounded-xl text-sm text-foreground placeholder-muted-foreground focus:outline-none transition-all duration-200 ${
                      focused === 'name' ? 'border-primary ring-2 ring-primary/20' : 'border-border'
                    }`}
                    placeholder="Your name"
                  />
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => setFocused('email')}
                    onBlur={() => setFocused(null)}
                    required
                    className={`px-4 py-2.5 bg-background border rounded-xl text-sm text-foreground placeholder-muted-foreground focus:outline-none transition-all duration-200 ${
                      focused === 'email' ? 'border-primary ring-2 ring-primary/20' : 'border-border'
                    }`}
                    placeholder="your@email.com"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2.5 bg-primary text-primary-foreground rounded-xl font-semibold hover:bg-primary/90 hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 transition-all text-sm"
                  >
                    Send Message →
                  </button>
                  <textarea
                    id="contact-message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setFocused('message')}
                    onBlur={() => setFocused(null)}
                    required
                    rows={2}
                    className={`md:col-span-3 px-4 py-2.5 bg-background border rounded-xl text-sm text-foreground placeholder-muted-foreground focus:outline-none transition-all duration-200 resize-none ${
                      focused === 'message' ? 'border-primary ring-2 ring-primary/20' : 'border-border'
                    }`}
                    placeholder="What would you like to talk about?"
                  />
                </form>
              )}
            </div>

          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
