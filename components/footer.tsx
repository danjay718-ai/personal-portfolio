'use client';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-12 px-6">
      <div className="max-w-6xl mx-auto text-center text-sm text-muted-foreground">
        <p>© {currentYear}. Built with Next.js, React, and Tailwind CSS.</p>
      </div>
    </footer>
  );
}
