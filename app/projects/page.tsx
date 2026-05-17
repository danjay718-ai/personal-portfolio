'use client';

import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { useState } from 'react';
import Link from 'next/link';

import { projectsData, ProjectItem } from '@/components/projects';

const allProjects: ProjectItem[] = projectsData;

// Curated primary tags for filtering to keep the filter UI clean and cohesive
const filterTags = ['All', 'Laravel', 'React', 'Google SSO', 'Automation', 'PHP', 'HTML/CSS'];

export default function ProjectsPage() {
  const [activeTag, setActiveTag] = useState('All');

  const filtered = activeTag === 'All'
    ? allProjects
    : allProjects.filter(p => {
        if (activeTag === 'HTML/CSS') {
          return p.tags.includes('HTML') || p.tags.includes('CSS');
        }
        return p.tags.includes(activeTag);
      });

  const getStatusStyle = (status: ProjectItem['status']) => {
    switch (status) {
      case 'In Progress':
        return 'bg-amber-500/10 text-amber-500 border border-amber-500/25';
      case 'Live':
      case 'UAT':
        return 'bg-emerald-500/10 text-emerald-500 border border-emerald-500/25';
      case 'Planned':
      case 'Coming Soon':
        return 'bg-blue-500/10 text-blue-500 border border-blue-500/25';
      case 'Side Project':
        return 'bg-purple-500/10 text-purple-500 border border-purple-500/25';
      default:
        return '';
    }
  };

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
              A comprehensive directory of my web applications, institutional-grade modules, and creative side projects.
            </p>
          </div>

          {/* Tag filters */}
          <div className="flex flex-wrap gap-2 mb-8">
            {filterTags.map(tag => (
              <button
                key={tag}
                onClick={() => setActiveTag(tag)}
                className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all duration-200 cursor-pointer ${
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
            {filtered.map((project, i) => {
              const CardWrapper = project.href ? 'a' : 'div';
              const extraProps = project.href
                ? {
                    href: project.href,
                    target: '_blank',
                    rel: 'noopener noreferrer',
                    className: 'bento-card group flex flex-col p-6 bg-card border border-border rounded-2xl hover:border-primary/40 hover:shadow-md transition-all duration-300 cursor-pointer',
                  }
                : {
                    className: 'bento-card group flex flex-col p-6 bg-card border border-border rounded-2xl hover:border-primary/20 hover:shadow-sm transition-all duration-300',
                  };

              return (
                <CardWrapper
                  key={project.id}
                  style={{ animationDelay: `${i * 60}ms` }}
                  {...extraProps}
                >
                  <div className="flex items-start justify-between mb-3">
                    <span className="text-xs text-muted-foreground">{project.year}</span>
                    {project.status ? (
                      <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wider ${getStatusStyle(project.status)}`}>
                        {project.status}
                      </span>
                    ) : project.href ? (
                      <span className="text-primary opacity-0 group-hover:opacity-100 transition-opacity text-xs">
                        View Live →
                      </span>
                    ) : null}
                  </div>

                  <h2 className="text-base font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                    {project.title}
                  </h2>
                  <p className="text-xs text-muted-foreground leading-relaxed flex-1 mb-3">
                    {project.description}
                  </p>

                  {project.note && (
                    <p className="text-[11px] text-amber-500 font-medium mb-3 italic">
                      Note: {project.note}
                    </p>
                  )}

                  <div className="flex flex-wrap gap-1.5 mt-auto">
                    {project.tags.map(tag => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 bg-primary/10 text-primary rounded-md text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardWrapper>
              );
            })}
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
