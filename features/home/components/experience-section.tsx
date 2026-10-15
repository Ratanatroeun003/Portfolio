import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Briefcase, GraduationCap, Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    type: 'education',
    role: 'Bachelor of Science in Information Technology (3rd Year Student)',
    institution: 'National Polytechnic Institute of Cambodia (NPIC)',
    location: 'Phnom Penh, Cambodia',
    period: '2021 - Present',
    description:
      'Currently pursuing 3rd-year studies specializing in software engineering, modern web & mobile application development, database management, and system architecture.',
    highlights: [
      'Full-Stack Web',
      'Database Normalization',
      'Mobile App Dev',
      'MERN Stack',
    ],
  },
  {
    type: 'work',
    role: 'Full-Stack Developer (Independent Projects)',
    institution: 'next-rbac-system & Personal Portfolio',
    location: 'Remote',
    period: '2023 - Present',
    description:
      'Engineered dynamic web architectures using Next.js App Router, Prisma ORM, Tailwind CSS, and MERN stack with modern UI standards.',
    highlights: ['Next.js', 'Prisma', 'REST API', 'Bento UI'],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="w-full px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-4xl">
        {/* Section Header */}
        <div className="mb-14 text-center">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-primary">
            My Journey
          </p>
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            Education & Experience
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            My academic background and hands-on professional journey in software
            development.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l border-border/70 ml-4 sm:ml-32 space-y-10">
          {experiences.map((item, index) => {
            const isEducation = item.type === 'education';

            return (
              <div key={index} className="relative pl-6 sm:pl-8 group">
                {/* Timeline Node Badge Icon */}
                <div className="absolute -left-3.5 top-1 flex h-7 w-7 items-center justify-center rounded-full border border-border/80 bg-background text-foreground shadow-md transition-colors duration-300 group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground">
                  {isEducation ? (
                    <GraduationCap className="h-3.5 w-3.5" />
                  ) : (
                    <Briefcase className="h-3.5 w-3.5" />
                  )}
                </div>

                {/* Left Date Label for Larger Screens */}
                <div className="hidden sm:block absolute -left-32 top-1.5 w-24 text-right text-xs font-semibold text-muted-foreground">
                  {item.period}
                </div>

                {/* Timeline Content Card */}
                <Card className="relative overflow-hidden rounded-2xl border border-border/60 bg-card/40 p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl">
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                    <h3 className="text-lg font-bold tracking-tight text-card-foreground group-hover:text-primary transition-colors">
                      {item.role}
                    </h3>

                    {/* Mobile Date Display */}
                    <div className="flex items-center gap-1 text-xs text-muted-foreground sm:hidden">
                      <Calendar className="h-3 w-3" />
                      <span>{item.period}</span>
                    </div>
                  </div>

                  <div className="mt-1 flex flex-wrap items-center gap-3 text-xs font-medium text-muted-foreground">
                    <span className="font-semibold text-foreground/90">
                      {item.institution}
                    </span>
                    <span className="inline-block h-1 w-1 rounded-full bg-muted-foreground/50" />
                    <div className="flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      <span>{item.location}</span>
                    </div>
                  </div>

                  <p className="mt-3 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                    {item.description}
                  </p>

                  {/* Highlight Badges */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {item.highlights.map((highlight) => (
                      <Badge
                        key={highlight}
                        variant="secondary"
                        className="rounded-md border border-border/50 bg-background/50 px-2.5 py-0.5 text-[11px] font-medium text-muted-foreground"
                      >
                        {highlight}
                      </Badge>
                    ))}
                  </div>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
