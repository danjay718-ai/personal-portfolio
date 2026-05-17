'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { Download, Menu, X } from 'lucide-react';

export function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === '/';
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 text-sm font-semibold text-foreground hover:text-primary transition-colors">
          <Image 
            src="/danjay-icon.png" 
            alt="Dannver Jay" 
            width={28} 
            height={28} 
            className="rounded-md object-cover"
          />
          <span>Dannver Jay Lagramada</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          {/* <Link
            href="/projects"
            className={`text-sm transition-colors ${
              pathname === '/projects'
                ? 'text-primary font-medium'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            Projects
          </Link> */}
          <Link
            href="/blog"
            className={`text-sm transition-colors ${
              pathname === '/blog'
                ? 'text-primary font-medium'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            Read Blog
          </Link>
          {isHome ? (
            <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </a>
          ) : (
            <Link href="/#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </Link>
          )}
          <a
            href="/Dannver_Lagramada_Resume.pdf"
            download
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <Download className="w-3.5 h-3.5" />
            Resume
          </a>
          <a
            href="https://calendly.com/dannverjay-lagramada718/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-1.5 bg-primary text-primary-foreground text-sm font-medium rounded-lg hover:bg-primary/90 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
          >
            Let&apos;s Talk
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="flex md:hidden p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/50 focus:outline-none transition-colors"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Navigation Panel */}
      {isMenuOpen && (
        <div className="md:hidden border-b border-border bg-background/95 backdrop-blur-md transition-all duration-200">
          <div className="px-6 py-4 flex flex-col gap-4">
            {/* <Link
              href="/projects"
              onClick={() => setIsMenuOpen(false)}
              className={`text-sm font-medium py-1 transition-colors ${
                pathname === '/projects' ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Projects
            </Link> */}
            <Link
              href="/blog"
              onClick={() => setIsMenuOpen(false)}
              className={`text-sm font-medium py-1 transition-colors ${
                pathname === '/blog' ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Read Blog
            </Link>
            {isHome ? (
              <a
                href="#contact"
                onClick={() => setIsMenuOpen(false)}
                className="text-sm font-medium py-1 text-muted-foreground hover:text-foreground transition-colors"
              >
                Contact
              </a>
            ) : (
              <Link
                href="/#contact"
                onClick={() => setIsMenuOpen(false)}
                className="text-sm font-medium py-1 text-muted-foreground hover:text-foreground transition-colors"
              >
                Contact
              </Link>
            )}
            <a
              href="/Dannver_Lagramada_Resume.pdf"
              download
              onClick={() => setIsMenuOpen(false)}
              className="inline-flex items-center gap-2 text-sm font-medium py-1 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Download className="w-4 h-4" />
              Resume
            </a>
            <a
              href="https://calendly.com/dannverjay-lagramada718/30min"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMenuOpen(false)}
              className="mt-2 w-full px-4 py-2.5 bg-primary text-primary-foreground text-sm font-medium rounded-lg text-center hover:bg-primary/90 hover:shadow-md transition-all duration-200"
            >
              Let&apos;s Talk
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
