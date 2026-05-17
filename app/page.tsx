'use client';

import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { useState } from 'react';
import Link from 'next/link';

export default function Home() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [focused, setFocused] = useState<string | null>(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [result, setResult] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const skills = ['PHP', 'Laravel', 'MySQL', 'JavaScript', 'Tailwind CSS', 'REST API', 'JWT', 'OAuth 2.0', 'Git', 'Docker', 'Linux', 'React'];

  const recentProjects = [
    {
      title: 'SSO & API Gateway Module',
      description: 'Centralized identity layer serving authentication and inter-module API access.',
      tags: ['JWT', 'OAuth 2.0', 'Laravel'],
      status: 'In Progress',
    },
    {
      title: 'LVCC Public Website',
      description: 'Official public-facing website of La Verdad Christian College built from scratch.',
      tags: ['HTML', 'CSS'],
      status: 'UAT',
    },
  ];

  const experience = [
    { period: 'July 2023 – Present', role: 'Full Stack Web Developer', company: 'La Verdad Christian College Inc.' },
    { period: 'November 2025 - December 2025', role: 'Freelance Project', company: 'Kori Walk In Cold Storage, Refrigeration & Aircon Services' },
    { period: 'March 2023 - June 2023', role: 'Frontend Developer Intern', company: 'La Verdad Christian College Inc.' },
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setResult('');

    const submitData = new FormData(e.currentTarget);
    submitData.append('access_key', '9255d606-d65e-45c3-bd9d-494765788e07');

    const object = Object.fromEntries(submitData);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(object),
      });

      const data = await response.json();

      if (data.success) {
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
        e.currentTarget.reset();
        setTimeout(() => setSubmitted(false), 4000);
      } else {
        setResult(data.message || 'Something went wrong. Please try again.');
      }
    } catch {
      setResult('Error submitting the form.');
    } finally {
      setIsSubmitting(false);
    }
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-auto md:auto-rows-[minmax(280px,_auto)]">

            {/* About Card - Large, spans 2 cols × 2 rows */}
            <div className="bento-card md:col-span-2 md:row-span-2 bg-gradient-to-br from-primary via-primary/90 to-primary/70 rounded-3xl p-8 text-primary-foreground flex flex-col justify-between group overflow-hidden relative min-h-[220px] md:min-h-[576px] h-full">
              {/* Ambient glow orb */}
              <div className="orb absolute -top-10 -right-10 w-48 h-48 bg-white/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />
              <div className="orb absolute -bottom-16 -left-8 w-40 h-40 bg-white/5 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-700 delay-100" />

              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/15 rounded-full text-xs font-medium mb-4 backdrop-blur-sm">
                  <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                  Open for opportunities
                </div>
                <h1 className="text-4xl font-bold mb-3 leading-tight">
                  About
                </h1>
                <div className="space-y-3.5 text-xs md:text-sm opacity-90 leading-relaxed max-w-xl mt-4">
                  <p>
                    A Full Stack Web Developer with 2+ years of professional experience building enterprise web systems for a school covering basic to higher education.
                    {!isExpanded && (
                      <button
                        onClick={() => setIsExpanded(true)}
                        className="ml-1.5 font-semibold underline decoration-white/40 hover:decoration-white transition-all text-white inline-block focus:outline-none cursor-pointer"
                      >
                        Read more...
                      </button>
                    )}
                  </p>
                  {isExpanded && (
                    <>
                      <p className="animate-fadeIn">
                        I&apos;ve worked end-to-end on real production systems — student enrollment, scholarship management, finance automation processing 2,000+ transactions per cycle, and currently architecting a centralized SSO and API Gateway. I take full ownership of everything I build, from development and testing to deployment and production support.
                      </p>
                      <p className="animate-fadeIn">
                        I love learning and I&apos;m always open to exploring new technologies, roles, and challenges. I&apos;m enthusiastically working to master advanced Laravel, and actively exploring cloud, system design, and AI — areas I&apos;m genuinely excited to grow into.
                      </p>
                      <p className="animate-fadeIn">
                        Currently open to full stack, backend, or web developer opportunities where I can contribute, grow, and build things that matter.
                        <button
                          onClick={() => setIsExpanded(false)}
                          className="ml-1.5 font-semibold underline decoration-white/40 hover:decoration-white transition-all text-white inline-block focus:outline-none cursor-pointer"
                        >
                          Read less
                        </button>
                      </p>
                    </>
                  )}
                </div>
              </div>

              <div className="relative z-10 flex items-end justify-between mt-8">
                <div className="flex flex-wrap gap-3">
                  <a
                    href="#contact"
                    className="px-4 py-2 bg-white text-primary rounded-xl text-xs font-semibold hover:bg-white/90 transition-all hover:shadow-lg hover:-translate-y-0.5"
                  >
                    Get in touch →
                  </a>
                  <a
                    href="https://github.com/danjay718-ai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-white/15 text-primary-foreground rounded-xl text-xs font-semibold hover:bg-white/25 transition-all backdrop-blur-sm hover:-translate-y-0.5"
                  >
                    View GitHub
                  </a>
                  <a
                    href="/Dannver_Lagramada_Resume.pdf"
                    download
                    className="px-4 py-2 bg-white/15 text-primary-foreground rounded-xl text-xs font-semibold hover:bg-white/25 transition-all backdrop-blur-sm hover:-translate-y-0.5"
                  >
                    Download resume
                  </a>
                </div>
              </div>
            </div>

            {/* Experience Card */}
            <div className="bento-card bg-card border border-border rounded-2xl p-6 hover:border-primary/40 hover:shadow-md transition-all duration-300 flex flex-col group min-h-[200px] md:min-h-0">
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
                    className="flex-1 flex flex-col justify-center px-4 py-3.5 rounded-xl bg-primary/5 hover:bg-primary/10 transition-colors duration-200 group/proj border border-transparent hover:border-primary/10"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <p className="text-sm font-semibold text-foreground group-hover/proj:text-primary transition-colors truncate">
                        {project.title}
                      </p>
                      {project.status && (
                        <span className={`px-2 py-0.5 rounded-full text-[9px] font-semibold uppercase tracking-wider shrink-0 ${
                          project.status === 'In Progress'
                            ? 'bg-amber-500/10 text-amber-500 border border-amber-500/20'
                            : 'bg-emerald-500/10 text-emerald-500 border border-emerald-500/20'
                        }`}>
                          {project.status}
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-muted-foreground mt-1 leading-relaxed line-clamp-1">{project.description}</p>
                  </a>
                ))}
              </div>
            </div>

            {/* Skills Card */}
            <div className="bento-card bg-card border border-border rounded-2xl p-6 hover:border-primary/40 hover:shadow-md transition-all duration-300 group">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2 text-sm">
                  <span className="w-2 h-2 bg-primary rounded-full" />
                  Tech Stack
                </h3>
                <Link
                  href="/skills"
                  className="text-xs text-primary hover:underline underline-offset-2 transition-all"
                >
                  View all →
                </Link>
              </div>
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
                  <p className="font-semibold text-foreground">B.S. Information Systems</p>
                  <p className="text-xs text-muted-foreground mt-1">La Verdad Christian College Inc. · July 2023</p>
                </div>
              </div>
            </div>

            {/* Connect Card — beside Education */}
            <div className="bento-card bg-card border border-border rounded-2xl p-6 hover:border-primary/40 hover:shadow-md transition-all duration-300 flex flex-col group">
              <h3 className="font-semibold text-foreground mb-4 text-sm flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full" />
                Connect
              </h3>
              <div className="space-y-1">
                {[
                  { label: 'GitHub', href: 'https://github.com/danjay718-ai', icon: '⌥' },
                  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/dannver-jay-lagramada', icon: '◈' },
                  { label: 'Twitter / X', href: 'https://x.com/deymv3rs', icon: '✦' },
                  { label: 'Email', href: 'mailto:dannverjay.lagramada718@gmail.com', icon: '✉' },
                ].map(({ label, href, icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between px-3 py-2 rounded-xl text-xs text-muted-foreground hover:text-primary hover:bg-primary/5 transition-all duration-200 group/link"
                  >
                    <span className="flex items-center gap-2">
                      <span className="text-primary/50 group-hover/link:text-primary transition-colors">{icon}</span>
                      {label}
                    </span>
                    <span className="opacity-0 group-hover/link:opacity-100 transition-opacity">→</span>
                  </a>
                ))}
                <div className="flex items-center justify-between px-3 py-2 rounded-xl text-xs text-muted-foreground">
                  <span className="flex items-center gap-2">
                    <span className="text-primary/50">☎</span>
                    Phone
                  </span>
                  <span>+63 976 637 9761</span>
                </div>
              </div>
            </div>

            {/* Contact / Get in Touch — half width */}
            <div id="contact" className="bento-card md:col-span-2 bg-card border border-border rounded-2xl p-6 hover:border-primary/40 hover:shadow-md transition-all duration-300">
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
                <form onSubmit={handleSubmit} className="space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input
                      type="text"
                      id="contact-name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={() => setFocused('name')}
                      onBlur={() => setFocused(null)}
                      required
                      className={`px-4 py-2.5 bg-background border rounded-xl text-sm text-foreground placeholder-muted-foreground focus:outline-none transition-all duration-200 ${focused === 'name' ? 'border-primary ring-2 ring-primary/20' : 'border-border'
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
                      className={`px-4 py-2.5 bg-background border rounded-xl text-sm text-foreground placeholder-muted-foreground focus:outline-none transition-all duration-200 ${focused === 'email' ? 'border-primary ring-2 ring-primary/20' : 'border-border'
                        }`}
                      placeholder="your@email.com"
                    />
                  </div>
                  <textarea
                    id="contact-message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setFocused('message')}
                    onBlur={() => setFocused(null)}
                    required
                    rows={2}
                    className={`w-full px-4 py-2.5 bg-background border rounded-xl text-sm text-foreground placeholder-muted-foreground focus:outline-none transition-all duration-200 resize-none ${focused === 'message' ? 'border-primary ring-2 ring-primary/20' : 'border-border'
                      }`}
                    placeholder="What would you like to talk about?"
                  />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-4 py-2.5 bg-primary text-primary-foreground rounded-xl font-semibold hover:bg-primary/90 hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 transition-all text-sm disabled:opacity-70 disabled:hover:translate-y-0"
                  >
                    {isSubmitting ? "Sending..." : "Send Message →"}
                  </button>
                  {result && (
                    <p
                      className={`text-xs font-medium ${
                        result.toLowerCase().includes('error') || result.toLowerCase().includes('wrong')
                          ? 'text-red-500'
                          : 'text-primary'
                      }`}
                    >
                      {result}
                    </p>
                  )}
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



