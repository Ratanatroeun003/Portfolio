import React from 'react';
import profile from '@/public/images/meme.jpg';
import { FaTelegramPlane, FaGithub, FaPhone, FaFacebook } from 'react-icons/fa';
import Image from 'next/image';

const ProfileSection = () => {
  return (
    <section className="w-full px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-4xl rounded-3xl border border-border/50 bg-card/40 p-6 backdrop-blur-md sm:p-10 shadow-lg">
        <div className="flex flex-col items-center justify-center gap-6 sm:flex-row sm:justify-start sm:gap-8">
          {/* Profile Image with Ring & Glow */}
          <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-full border-2 border-primary/20 p-1 shadow-md sm:h-32 sm:w-32">
            <div className="relative h-full w-full overflow-hidden rounded-full">
              <Image
                src={profile}
                priority
                alt="Ratana's profile picture"
                fill
                sizes="(max-width: 640px) 112px, 128px"
                className="object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>

          {/* Bio & Information */}
          <div className="flex flex-col items-center text-center sm:items-start sm:text-left">
            <h1 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
              Hello, I&apos;m <span className="text-primary">Ratana</span>
            </h1>

            <p className="mt-1 text-sm font-semibold text-muted-foreground sm:text-base">
              Full-Stack Web & Mobile Developer
            </p>

            <p className="mt-2 max-w-md text-xs leading-relaxed text-muted-foreground/90 sm:text-sm">
              Focused on high performance, clean UI, scalable code, and modern
              web & mobile technologies.
            </p>

            {/* Social Links */}
            <div className="mt-4 flex items-center gap-3">
              <a
                href="https://t.me/@TroeunRatana"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Telegram"
                className="rounded-full border border-border/60 bg-muted/50 p-2.5 text-muted-foreground transition-all duration-200 hover:border-primary/50 hover:bg-primary hover:text-primary-foreground hover:scale-110"
              >
                <FaTelegramPlane className="h-4 w-4" />
              </a>

              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="rounded-full border border-border/60 bg-muted/50 p-2.5 text-muted-foreground transition-all duration-200 hover:border-primary/50 hover:bg-primary hover:text-primary-foreground hover:scale-110"
              >
                <FaGithub className="h-4 w-4" />
              </a>

              <a
                href="https://facebook.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="rounded-full border border-border/60 bg-muted/50 p-2.5 text-muted-foreground transition-all duration-200 hover:border-primary/50 hover:bg-primary hover:text-primary-foreground hover:scale-110"
              >
                <FaFacebook className="h-4 w-4" />
              </a>

              <a
                href="tel:+855714407205"
                aria-label="Phone"
                className="rounded-full border border-border/60 bg-muted/50 p-2.5 text-muted-foreground transition-all duration-200 hover:border-primary/50 hover:bg-primary hover:text-primary-foreground hover:scale-110"
              >
                <FaPhone className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;
