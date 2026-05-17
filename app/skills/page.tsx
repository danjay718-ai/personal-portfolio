'use client';

import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import Link from 'next/link';
import { skillGroups } from '@/lib/skills';

export default function SkillsPage() {
  return (
    <main className="min-h-screen flex flex-col justify-between">
      <Navbar />

      <div className="pt-24 pb-20 px-6 flex-1">
        <div className="max-w-6xl mx-auto">
          {/* Header & Back Button */}
          <div className="mb-10">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors mb-6"
            >
              ← Back home
            </Link>
            <h1 className="text-4xl font-bold text-foreground mb-3">Skills & Technologies</h1>
            <p className="text-muted-foreground text-sm max-w-lg">
              A curated overview of languages, frameworks, databases, and professional tools I use to build robust web systems.
            </p>
          </div>

          {/* Grouped Skills Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {skillGroups.map((group, index) => (
              <div
                key={group.title}
                style={{ animationDelay: `${index * 80}ms` }}
                className="bento-card bg-card border border-border rounded-2xl p-6 hover:border-primary/40 hover:shadow-md transition-all duration-300 flex flex-col group relative overflow-hidden"
              >
                {/* Visual Ambient glow decoration */}
                <div className="absolute -top-10 -right-10 w-24 h-24 bg-primary/5 rounded-full blur-2xl group-hover:scale-150 transition-all duration-500" />
                
                <h2 className="text-base font-semibold text-foreground mb-5 flex items-center gap-2 relative z-10 border-b border-border pb-3">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                  {group.title}
                </h2>

                <div className="space-y-3 relative z-10 flex-1">
                  {group.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center gap-3 px-3 py-2.5 rounded-xl bg-primary/5 border border-transparent hover:border-primary/10 hover:bg-primary/10 transition-all duration-200 cursor-default"
                    >
                      <div
                        className="shrink-0"
                        dangerouslySetInnerHTML={{ __html: skill.icon }}
                      />
                      <span className="text-xs font-semibold text-foreground">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}