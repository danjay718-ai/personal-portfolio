'use client';

import Link from 'next/link';

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-sm font-semibold text-foreground hover:text-primary transition-colors">
          Your Name
        </Link>

        <div className="flex items-center gap-6">
          <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Contact
          </a>
          <a
            href="#contact"
            className="px-4 py-1.5 bg-primary text-primary-foreground text-sm font-medium rounded-lg hover:bg-primary/90 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
          >
            Hire me
          </a>
        </div>
      </div>
    </nav>
  );
}
