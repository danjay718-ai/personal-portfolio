'use client';

import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { useState } from 'react';
import Link from 'next/link';

interface ProjectItem {
  id: number;
  title: string;
  description: string;
  tags: string[];
  year: string;
  href?: string;
  status?: 'In Progress' | 'Live' | 'Planned' | 'Side Project' | 'Coming Soon' | 'UAT';
  note?: string;
}

const allProjects: ProjectItem[] = [
  {
    id: 1,
    title: 'Finance & Enrollment Automation',
    description: 'Engineered automated generation of scholarship fee breakdowns and double-entry journal records for 2,000+ students per enrollment cycle — eliminating all manual ledger entry for the finance department.',
    tags: ['Laravel', 'MySQL', 'PHP', 'Automation'],
    year: '2024',
  },
  {
    id: 2,
    title: 'SSO & API Gateway Module',
    description: 'Architecting a centralized identity layer using JWT, OAuth 2.0, Google One Tap, and API key management — serving authentication and inter-module API access for all institutional systems.',
    tags: ['JWT', 'OAuth 2.0', 'Google SSO', 'Laravel'],
    year: '2025',
    status: 'In Progress',
  },
  {
    id: 3,
    title: 'Scholarship & Admission Module',
    description: 'Role-based application and approval system handling 2,000+ applicants per admissions cycle, with automated email notifications (Gmail SMTP) and Google SSO integration.',
    tags: ['Laravel', 'Spatie', 'Google SSO', 'Gmail SMTP'],
    year: '2024',
  },
  {
    id: 4,
    title: 'LVCC Public Website',
    description: 'Built the official public-facing website of La Verdad Christian College from scratch per management specifications.',
    href: 'https://web.uat.laverdad.edu.ph/',
    note: 'Some changes are still under QA and not yet reflected on the UAT link.',
    tags: ['HTML', 'CSS'],
    year: '2024',
    status: 'UAT',
  },
  {
    id: 5,
    title: 'Capstone Projects Library',
    description: 'Centralized landing page linking all student capstone projects at La Verdad, with search, filtering, and per-project descriptions — designed to serve as a permanent institutional dev portfolio.',
    tags: ['Laravel', 'HTML', 'CSS'],
    year: '2025',
    status: 'Planned',
    note: 'Currently assigned task',
  },
  {
    id: 6,
    title: 'Personnel Document Management System (Capstone)',
    description: 'Laravel-based document system for a Philippine National Police unit with role-based access control (Spatie), authentication, and SMS notifications via Semaphore API.',
    tags: ['Laravel', 'Spatie', 'Semaphore API', 'PHP'],
    year: '2023',
  },
  {
    id: 7,
    title: 'Project Management App',
    description: 'A side project — basic project management application with role-based access control (RBAC) built with Laravel and Livewire.',
    tags: ['Laravel', 'Livewire', 'RBAC', 'PHP'],
    year: '2025',
    status: 'Side Project',
  },
  {
    id: 8,
    title: 'Kori Systems Website',
    description: 'Company website for Kori Systems, a startup. Built with React.',
    href: 'https://korisystems.com/',
    tags: ['React', 'JavaScript'],
    year: '2025',
    status: 'Live',
  },
  {
    id: 9,
    title: 'Blog App',
    description: 'A personal blog application currently in the planning stage.',
    tags: ['Laravel (planned)'],
    year: '2025',
    status: 'Coming Soon',
  },
];

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
