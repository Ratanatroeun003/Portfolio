import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, Mail, Sparkles } from 'lucide-react';

const CtaSection = () => {
  return (
    <section id="contact-cta" className="w-full px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-5xl">
        <Card className="relative overflow-hidden rounded-3xl border border-primary/20 bg-card/40 p-8 sm:p-12 backdrop-blur-xl shadow-2xl">
          {/* Background Ambient Glow */}
          <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-primary/20 blur-3xl pointer-events-none" />
          <div className="absolute -right-20 -bottom-20 h-64 w-64 rounded-full bg-primary/10 blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary backdrop-blur-md mb-6">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Available for Opportunities</span>
            </div>

            {/* Main Headline */}
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-5xl max-w-2xl bg-linear-to-r from-foreground via-foreground/90 to-foreground/70 bg-clip-text text-transparent">
              Interested in working together?
            </h2>

            {/* Description */}
            <p className="mt-4 max-w-xl text-sm sm:text-base text-muted-foreground leading-relaxed">
              I am currently open to full-stack web and mobile development
              roles, freelance projects, or innovative tech collaborations.
              Let&apos;s build something exceptional.
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
              {/* Hire Me / Contact Button */}
              <Button
                asChild
                size="lg"
                className="w-full sm:w-auto rounded-full font-semibold px-8 shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all duration-300"
              >
                <a href="mailto:troeunratana@gmail.com">
                  <Mail className="mr-2 h-4 w-4" />
                  Hire Me
                </a>
              </Button>

              {/* Download Resume Button */}
              <Button
                asChild
                variant="outline"
                size="lg"
                className="w-full sm:w-auto rounded-full border-border/80 bg-background/50 backdrop-blur-md font-semibold px-8 hover:bg-secondary transition-all duration-300"
              >
                <a href="/resume.pdf" download="Ratana_Resume.pdf">
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume (PDF)
                </a>
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default CtaSection;
