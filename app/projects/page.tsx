'use client';

import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { useState } from 'react';
import Link from 'next/link';

const allProjects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-stack marketplace with product listings, cart management, user authentication, and Stripe payment processing. Built for performance with server-side rendering.',
    tags: ['Next.js', 'PostgreSQL', 'Stripe', 'TypeScript'],
    year: '2024',
    href: '#',
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'Collaborative task management tool for distributed teams. Features real-time updates, drag-and-drop Kanban boards, role-based access, and notifications.',
    tags: ['React', 'Firebase', 'TypeScript'],
    year: '2023',
    href: '#',
  },
  {
    id: 3,
    title: 'Analytics Dashboard',
    description: 'Business metrics and data visualization platform. Supports custom dashboards, chart builders, CSV export, and scheduled report delivery.',
    tags: ['React', 'D3.js', 'Node.js'],
    year: '2023',
    href: '#',
  },
  {
    id: 4,
    title: 'Portfolio CMS',
    description: 'A headless CMS with a rich-text editor, media management, and REST API. Powers multiple client portfolio sites with a single admin interface.',
    tags: ['Next.js', 'PostgreSQL', 'Node.js'],
    year: '2022',
    href: '#',
  },
  {
    id: 5,
    title: 'Real-Time Chat App',
    description: 'Scalable chat application with rooms, direct messaging, file sharing, and read receipts. Built with WebSockets for sub-100ms message delivery.',
    tags: ['React', 'Node.js', 'TypeScript'],
    year: '2022',
    href: '#',
  },
  {
    id: 6,
    title: 'DevOps Monitoring Tool',
    description: 'Infrastructure monitoring dashboard that aggregates logs, tracks uptime, and sends alert notifications across Slack, email, and SMS.',
    tags: ['React', 'Node.js', 'PostgreSQL'],
    year: '2021',
    href: '#',
  },
];

const allTags = ['All', ...Array.from(new Set(allProjects.flatMap(p => p.tags)))];

export default function ProjectsPage() {
  const [activeTag, setActiveTag] = useState('All');

  const filtered = activeTag === 'All'
    ? allProjects
    : allProjects.filter(p => p.tags.includes(activeTag));

  return (
    <main>
      <Navbar />

      <div className="pt-24 pb-20 px-6">
        <div className="max-w-6xl mx-auto">

          {/* Header */}
          <div className="mb-10">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors mb-6"
            >
              ← Back home
            </Link>
            <h1 className="text-4xl font-bold text-foreground mb-3">Projects</h1>
            <p className="text-muted-foreground text-sm max-w-lg">
              A collection of things I&apos;ve built — from side experiments to production systems.
            </p>
          </div>

          {/* Tag filters */}
          <div className="flex flex-wrap gap-2 mb-8">
            {allTags.map(tag => (
              <button
                key={tag}
                onClick={() => setActiveTag(tag)}
                className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all duration-200 ${
                  activeTag === tag
                    ? 'bg-primary text-primary-foreground shadow-sm'
                    : 'bg-card border border-border text-muted-foreground hover:border-primary/40 hover:text-primary'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>

          {/* Project grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((project, i) => (
              <a
                key={project.id}
                href={project.href}
                style={{ animationDelay: `${i * 60}ms` }}
                className="bento-card group flex flex-col p-6 bg-card border border-border rounded-2xl hover:border-primary/40 hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-3">
                  <span className="text-xs text-muted-foreground">{project.year}</span>
                  <span className="text-primary opacity-0 group-hover:opacity-100 transition-opacity text-xs">
                    View →
                  </span>
                </div>

                <h2 className="text-base font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                  {project.title}
                </h2>
                <p className="text-xs text-muted-foreground leading-relaxed flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mt-4">
                  {project.tags.map(tag => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 bg-primary/10 text-primary rounded-md text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20 text-muted-foreground text-sm">
              No projects found for &ldquo;{activeTag}&rdquo;.
            </div>
          )}

        </div>
      </div>

      <Footer />
    </main>
  );
}
