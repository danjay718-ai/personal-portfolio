'use client';

import Link from 'next/link';

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-sm font-semibold text-foreground hover:text-primary transition-colors">
          Your Name
        </Link>

        <div className="flex items-center gap-8">
          <a href="#projects" className="text-sm text-foreground hover:text-primary transition-colors">
            Projects
          </a>
          <a href="#contact" className="text-sm text-foreground hover:text-primary transition-colors">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
