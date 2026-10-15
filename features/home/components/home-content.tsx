'use client';

import React from 'react';
import { motion, useScroll } from 'framer-motion';
import Profile from './profile-section';
import ProjectSection from './project-section';
import { Project } from '@prisma/client';
import TechStackSection from './tech-stack-section';
import ExperienceSection from './experience-section';
import CtaSection from './cta-section';
import ContactSection from './contact-section';
interface HomeContentProps {
  projects: Project[];
}

const HomeContent = ({ projects }: HomeContentProps) => {
  const { scrollYProgress } = useScroll();
  return (
    <div className="relative min-h-screen space-y-2">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 origin-left bg-sky-400 dark:bg-rose-700 z-50"
        style={{ scaleX: scrollYProgress, originX: 0 }}
      />
      <Profile />
      <ProjectSection projects={projects} />
      <TechStackSection />
      <ExperienceSection />
      <CtaSection />
      <ContactSection />
    </div>
  );
};

export default HomeContent;
