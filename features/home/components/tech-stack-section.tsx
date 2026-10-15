import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiPrisma,
  SiDocker,
  SiGit,
  SiLaravel,
} from 'react-icons/si';

const techCategories = [
  {
    title: 'Frontend & UI',
    description: 'Building responsive, modern, and interactive interfaces.',
    skills: [
      { name: 'React', icon: SiReact, color: 'text-sky-400' },
      { name: 'Next.js', icon: SiNextdotjs, color: 'text-foreground' },
      { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-500' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-cyan-400' },
    ],
  },
  {
    title: 'Backend & APIs',
    description: 'Designing scalable server architectures and dynamic routers.',
    skills: [
      { name: 'Node.js', icon: SiNodedotjs, color: 'text-green-500' },
      { name: 'Express.js', icon: SiExpress, color: 'text-foreground' },
      { name: 'Laravel', icon: SiLaravel, color: 'text-indigo-400' },
    ],
  },
  {
    title: 'Databases & ORM',
    description: 'Structured queries, schema design, and stored triggers.',
    skills: [
      { name: 'MongoDB', icon: SiMongodb, color: 'text-emerald-500' },
      { name: 'MySQL', icon: SiMysql, color: 'text-blue-400' },
      { name: 'PosgreSQL', icon: SiPostgresql, color: 'text-blue-400' },
      { name: 'Prisma', icon: SiPrisma, color: 'text-teal-400' },
    ],
  },
  {
    title: 'Mobile & Tools',
    description: 'Cross-platform mobile interfaces and version control.',
    skills: [
      { name: 'React Native', icon: SiReact, color: 'text-sky-400' },
      { name: 'Docker', icon: SiDocker, color: 'text-purple-500' },
      { name: 'Git & GitHub', icon: SiGit, color: 'text-orange-500' },
    ],
  },
];

const TechStackSection = () => {
  return (
    <section id="skills" className="w-full px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-7xl">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-primary">
            Capabilities
          </p>
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            Tech Stack & Tools
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            The core technologies and frameworks I leverage to build robust web
            and mobile applications.
          </p>
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {techCategories.map((category) => (
            <Card
              key={category.title}
              className="
                group relative flex flex-col justify-between overflow-hidden rounded-2xl
                border border-border/60 bg-card/40 p-6 backdrop-blur-md
                transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl
              "
            >
              <div>
                <h3 className="text-lg font-bold tracking-tight text-card-foreground group-hover:text-primary transition-colors">
                  {category.title}
                </h3>
                <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed">
                  {category.description}
                </p>

                {/* Tech Pills */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {category.skills.map((skill) => {
                    const Icon = skill.icon;
                    return (
                      <Badge
                        key={skill.name}
                        variant="secondary"
                        className="
                          flex items-center gap-1.5 rounded-lg border border-border/60 
                          bg-background/60 px-3 py-1.5 text-xs font-medium 
                          transition-colors hover:border-primary/30
                        "
                      >
                        <Icon className={`h-4 w-4 ${skill.color}`} />
                        <span>{skill.name}</span>
                      </Badge>
                    );
                  })}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
