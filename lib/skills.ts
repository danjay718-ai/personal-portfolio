export interface Skill {
  name: string;
  icon: string;
}

export interface SkillGroup {
  title: string;
  skills: Skill[];
}

export const skillGroups: SkillGroup[] = [
  {
    title: "Backend",
    skills: [
      {
        name: "PHP",
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="w-5 h-5 text-indigo-400"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" /><path d="M12 6v12M8 10h8M8 14h8" /></svg>`,
      },
      {
        name: "Laravel",
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="w-5 h-5 text-red-500"><path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" /><path d="M12 12v10" /></svg>`,
      },
      {
        name: "Livewire",
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="w-5 h-5 text-sky-400"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /></svg>`,
      },
      {
        name: "Filament PHP",
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="w-5 h-5 text-amber-500"><path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" /><circle cx="12" cy="12" r="3" /></svg>`,
      },
      {
        name: "REST API Design & Consumption",
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="w-5 h-5 text-teal-400"><rect x="2" y="3" width="20" height="14" rx="2" ry="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></svg>`,
      },
    ],
  },
  {
    title: "Frontend",
    skills: [
      {
        name: "JavaScript",
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="w-5 h-5 text-yellow-500"><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M12 16c.5-1.5 2-2.5 3.5-2.5s2.5 1 2.5 2.5c0 2-3 2.5-3 4.5" /><path d="M15 21h.01" /></svg>`,
      },
      {
        name: "HTML5",
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="w-5 h-5 text-orange-500"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg>`,
      },
      {
        name: "CSS3",
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="w-5 h-5 text-blue-500"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg>`,
      },
      {
        name: "Tailwind CSS",
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="w-5 h-5 text-teal-400"><path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" /></svg>`,
      },
      {
        name: "React",
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="w-5 h-5 text-sky-400"><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(30 12 12)" /><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(90 12 12)" /><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(150 12 12)" /><circle cx="12" cy="12" r="1" /></svg>`,
      },
    ],
  },
  {
    title: "Database",
    skills: [
      {
        name: "MySQL",
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="w-5 h-5 text-blue-400"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" /><path d="M12 6v12M8 12h8" /></svg>`,
      },
      {
        name: "MongoDB",
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="w-5 h-5 text-emerald-500"><path d="M12 2c-4 4-6 6.5-6 10s2.5 6 6 10c3.5-4 6-6.5 6-10s-2-6-6-10z" /><path d="M12 2v20" /></svg>`,
      },
      {
        name: "Redis",
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="w-5 h-5 text-rose-500"><rect x="2" y="3" width="20" height="18" rx="2" /><path d="M6 8h12M6 12h12M6 16h12" /></svg>`,
      },
    ],
  },
  {
    title: "Authentication & Security",
    skills: [
      {
        name: "JWT",
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="w-5 h-5 text-yellow-600"><rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>`,
      },
      {
        name: "OAuth 2.0",
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="w-5 h-5 text-emerald-500"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><circle cx="12" cy="11" r="3" /></svg>`,
      },
      {
        name: "Google SSO",
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="w-5 h-5 text-red-400"><path d="M12 2c5.523 0 10 4.477 10 10S17.523 22 12 22 2 17.523 2 12 6.477 2 12 2z" /><path d="M16 12H8" /><path d="M12 8l-4 4 4 4" /></svg>`,
      },
      {
        name: "Google One Tap",
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="w-5 h-5 text-purple-400"><path d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z" /><path d="M12 6v6" /><path d="M12 12l2 2" /></svg>`,
      },
      {
        name: "Spatie Roles & Permissions",
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="w-5 h-5 text-blue-500"><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M9 12l2 2 4-4" /></svg>`,
      },
    ],
  },
  {
    title: "DevOps & Infrastructure",
    skills: [
      {
        name: "Git",
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="w-5 h-5 text-orange-600"><circle cx="18" cy="18" r="3" /><circle cx="6" cy="6" r="3" /><circle cx="6" cy="18" r="3" /><path d="M18 15V9a4 4 0 0 0-4-4H9" /><path d="M6 9v6" /></svg>`,
      },
      {
        name: "GitLab",
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="w-5 h-5 text-orange-500"><path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><circle cx="12" cy="12" r="3" /></svg>`,
      },
      {
        name: "Docker",
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="w-5 h-5 text-sky-500"><path d="M22 12.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v1z" /><path d="M16 12.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v1z" /><path d="M10 12.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v1z" /><path d="M4 12.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v1z" /><path d="M12 8.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v1z" /><path d="M6 8.5a.5.5 0 0 1-.5.5H3.5a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v1z" /><path d="M8 4.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v1z" /><path d="M2 16h20v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-2z" /></svg>`,
      },
      {
        name: "Linux",
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="w-5 h-5 text-foreground"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" /><line x1="4" y1="22" x2="4" y2="15" /></svg>`,
      },
      {
        name: "AWS",
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="w-5 h-5 text-orange-400"><path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M12 12v10" /></svg>`,
      },
      {
        name: "Cloudways",
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="w-5 h-5 text-blue-300"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" /><path d="M12 6v12M8 12h8" /></svg>`,
      },
      {
        name: "DigitalOcean VPS",
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="w-5 h-5 text-blue-500"><rect x="2" y="2" width="20" height="20" rx="4" /><rect x="6" y="6" width="4" height="4" /><rect x="14" y="6" width="4" height="4" /><rect x="6" y="14" width="4" height="4" /><rect x="14" y="14" width="4" height="4" /></svg>`,
      },
    ],
  },
  {
    title: "APIs & Integrations",
    skills: [
      {
        name: "Google API Client",
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="w-5 h-5 text-red-400"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" /><circle cx="12" cy="12" r="3" /></svg>`,
      },
      {
        name: "Gmail SMTP",
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="w-5 h-5 text-rose-500"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>`,
      },
      {
        name: "Semaphore SMS API",
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="w-5 h-5 text-emerald-400"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>`,
      },
    ],
  },
  {
    title: "Dev Tools",
    skills: [
      {
        name: "Postman",
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="w-5 h-5 text-orange-500"><path d="M4.5 16.5c-1.5 1.25-2.5 3-2.5 5.5h20c0-2.5-1-4.25-2.5-5.5" /><path d="M12 2C6.5 2 2 6.5 2 12c0 2.5 1 4.5 2.5 6h15c1.5-1.5 2.5-3.5 2.5-6 0-5.5-4.5-10-10-10z" /><circle cx="12" cy="9" r="2" /></svg>`,
      },
      {
        name: "ClickUp",
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="w-5 h-5 text-pink-500"><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z" /><path d="M12 8v8" /><path d="M8 12h8" /></svg>`,
      },
      {
        name: "VS Code",
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="w-5 h-5 text-sky-500"><path d="M22 2L2 22" /><path d="M2 2l20 20" /><rect x="6" y="6" width="12" height="12" rx="2" /></svg>`,
      },
    ],
  },
];