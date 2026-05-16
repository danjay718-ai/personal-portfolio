'use client';

import Link from 'next/link';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex flex-col items-center md:items-start gap-1">
          <Link href="/" className="text-sm font-semibold text-foreground hover:text-primary transition-colors">
            Your Name
          </Link>
          <p className="text-xs text-muted-foreground">© {currentYear} · Built with Next.js &amp; Tailwind CSS</p>
        </div>

        <div className="flex items-center gap-6">
          <Link href="/projects" className="text-xs text-muted-foreground hover:text-primary transition-colors">
            Projects
          </Link>
          <a href="/#contact" className="text-xs text-muted-foreground hover:text-primary transition-colors">
            Contact
          </a>
          <a href="#" className="text-xs text-muted-foreground hover:text-primary transition-colors">
            GitHub
          </a>
          <a href="#" className="text-xs text-muted-foreground hover:text-primary transition-colors">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
