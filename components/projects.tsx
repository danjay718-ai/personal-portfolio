'use client';

export interface ProjectItem {
  id: number;
  title: string;
  description: string;
  tags: string[];
  year?: string;
  link?: string;
  status?: 'In Progress' | 'Live' | 'Planned' | 'Side Project' | 'Coming Soon' | 'UAT' | 'Prototype';
  note?: string;
}

export const projectsData: ProjectItem[] = [
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
      status: 'In Progress',
      year: '2026',
    },
    {
      id: 3,
      title: 'Scholarship & Admission Module',
      description: 'Role-based application and approval system handling 2,000+ applicants per admissions cycle, with automated email notifications (Gmail SMTP) and Google SSO integration.',
      tags: ['Laravel', 'Spatie', 'Google SSO', 'Gmail SMTP'],
      year: '2023',
    },
    {
      id: 4,
      title: 'LVCC Public Website',
      description: 'Built the official public-facing website of La Verdad Christian College from scratch per management specifications.',
      link: 'https://web.uat.laverdad.edu.ph/',
      note: 'Some changes are still under QA and not yet reflected on the UAT link.',
      tags: ['HTML', 'CSS'],
      status: 'UAT',
      year: '2026',
    },
    {
      id: 5,
      title: 'Capstone Projects Library',
      description: 'Centralized landing page linking all student capstone projects at La Verdad, with search, filtering, and per-project descriptions — designed to serve as a permanent institutional dev portfolio.',
      tags: ['Laravel', 'HTML', 'CSS'],
      status: 'Planned',
      note: 'Pending',
      year: '2026',
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
      status: 'Side Project',
      year: '2026',
    },
    {
      id: 8,
      title: 'Kori Systems Website',
      description: 'Company website for Kori Systems, a startup. Built with React.',
      link: 'https://korisystems.com/',
      tags: ['React', 'JavaScript'],
      status: 'Live',
      year: '2025',
    },
    {
      id: 10,
      title: 'Kmertz Travel & Tours Website',
      description: 'Landing page built for a prospective client offering travel, tours, and itinerary promos. Developed as a prototype and deployed on Vercel.',
      link: 'https://kmertz-website.vercel.app/',
      tags: ['React', 'JavaScript', 'Vercel'],
      status: 'Prototype',
      note: 'Client did not proceed.',
      year: '2026',
    },
    {
      id: 9,
      title: 'Blog App',
      description: 'A personal blog application currently in the planning stage.',
      tags: ['Laravel (planned)'],
      status: 'Coming Soon',
      year: '2026',
    },
  ];

export function Projects() {
  const projects = projectsData;

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
      case 'Prototype':
        return 'bg-slate-500/10 text-slate-500 border border-slate-500/25';
      default:
        return 'bg-primary/10 text-primary border border-primary/15';
    }
  };

  return (
    <section id="projects" className="border-b border-border py-16 px-6">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold text-foreground mb-8">Projects</h2>

        <div className="space-y-8">
          {projects.map((project) => {
            const CardWrapper = project.link ? 'a' : 'div';
            const extraProps = project.link
              ? {
                  href: project.link,
                  target: '_blank',
                  rel: 'noopener noreferrer',
                  className: 'group block p-6 border border-border rounded-2xl hover:border-primary/50 hover:bg-muted/10 transition-all duration-300 hover:shadow-sm cursor-pointer',
                }
              : {
                  className: 'group block p-6 border border-border rounded-2xl hover:border-primary/20 hover:bg-muted/5 transition-all duration-300',
                };

            return (
              <CardWrapper key={project.id} {...extraProps}>
                <div className="flex items-center justify-between gap-3 mb-2">
                  <span className="text-xs text-muted-foreground font-medium">{project.year}</span>
                  {project.status && (
                    <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wider ${getStatusStyle(project.status)}`}>
                      {project.status}
                    </span>
                  )}
                </div>
                <div className="flex flex-wrap items-start justify-between gap-3 mb-2">
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors text-base">
                    {project.title}
                  </h3>
                </div>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                {project.note && (
                  <p className="text-xs text-amber-500/90 font-medium mb-4 italic">
                    Note: {project.note}
                  </p>
                )}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs bg-primary/5 text-primary rounded-xl border border-primary/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardWrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
}
