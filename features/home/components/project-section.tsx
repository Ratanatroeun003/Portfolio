import React from 'react';
import Image from 'next/image';
import { Project } from '@prisma/client';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowUpRight } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { cn } from '@/lib/utils';

interface ProjectSectionProps {
  projects: Project[];
}

const ProjectSection = ({ projects }: ProjectSectionProps) => {
  return (
    <section id="projects" className="w-full px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-7xl">
        {/* Header */}
        <div className="mb-14 text-center">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-primary">
            Featured Portfolio
          </p>
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-5xl">
            Selected Works
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 auto-rows-[340px]">
          {projects.map((project, index) => {
            const isLarge = project.featured || index === 0;
            const isWide = index === 3;
            return (
              <Card
                key={project.id}
                className={cn(
                  `group relative flex flex-col justify-between overflow-hidden rounded-3xl
                  border border-border/60 bg-card/40 p-0 backdrop-blur-md
                  transition-all duration-500 hover:-translate-y-1 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/5`,
                  isLarge && 'lg:col-span-2 lg:row-span-2 auto-rows-auto',
                  isWide && 'sm:col-span-2 lg:col-span-2',
                )}
              >
                <div className="absolute inset-0 z-0">
                  {project.imageUrl ? (
                    <Image
                      src={project.imageUrl}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 66vw, 50vw"
                    />
                  ) : (
                    <div className="h-full w-full bg-muted/20" />
                  )}

                  <div className="absolute inset-0 bg-linear-to-t from-background via-background/70 to-background/20" />
                </div>

                <div className="relative z-10 flex justify-end p-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-background/60 text-foreground backdrop-blur-md transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                    <ArrowUpRight className="h-5 w-5" />
                  </div>
                </div>

                <div className="relative z-10 flex flex-col justify-end p-6 sm:p-8">
                  <div className="mb-3 flex flex-wrap gap-1.5">
                    {project.technologies
                      ?.split(',')
                      .map((tech) => tech.trim())
                      .filter(Boolean)
                      .map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-border/60 bg-background/50 px-3 py-1 text-[11px] font-medium backdrop-blur-md"
                        >
                          {tech}
                        </span>
                      ))}
                  </div>
                  <h3
                    className={cn(
                      'font-bold tracking-tight text-card-foreground',
                      isLarge ? 'text-2xl sm:text-3xl' : 'text-xl',
                    )}
                  >
                    {project.title}
                  </h3>

                  <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">
                    {project.description}
                  </p>

                  <div className="mt-6 flex items-center gap-3">
                    {project.demoUrl && (
                      <Button
                        asChild
                        size="sm"
                        className="rounded-full px-5 font-medium"
                      >
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="mr-1.5 h-3.5 w-3.5" /> Live
                          Demo
                        </a>
                      </Button>
                    )}
                    {project.githubUrl && (
                      <Button
                        asChild
                        size="sm"
                        variant="outline"
                        className="rounded-full border-border/80 bg-background/40 px-4 backdrop-blur-md"
                      >
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaGithub className="mr-1.5 h-3.5 w-3.5" /> Code
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
