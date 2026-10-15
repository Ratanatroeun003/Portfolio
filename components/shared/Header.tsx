import React from 'react';
import Link from 'next/link';
import { UserKey } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ModeToggle } from '@/components/mode-toggle';
import { auth } from '@/lib/auth';
const Header = async () => {
  const session = await auth();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/60 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <Link
            href="/"
            className="text-lg font-extrabold tracking-tight text-foreground transition-opacity hover:opacity-80 sm:text-xl"
          >
            Ratana<span className="text-primary">.dev</span>
          </Link>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-xs font-semibold text-muted-foreground">
          <Link href="#skills" className="transition-colors hover:text-primary">
            Skills
          </Link>
          <Link
            href="#projects"
            className="transition-colors hover:text-primary"
          >
            Projects
          </Link>
          <Link
            href="#experience"
            className="transition-colors hover:text-primary"
          >
            Experience
          </Link>
          <Link
            href="#contact"
            className="transition-colors hover:text-primary"
          >
            Contact
          </Link>
        </nav>

        {/* Right: Actions (Auth Button & Theme Toggle) */}
        <div className="flex items-center gap-3">
          {session ? (
            <Button
              asChild
              size="icon"
              variant="default"
              className="rounded-full shadow-md transition-transform active:scale-95"
            >
              <Link href="/admin/dashboard" title="Admin Dashboard">
                <UserKey className="h-4 w-4" />
              </Link>
            </Button>
          ) : (
            <Button
              asChild
              variant="outline"
              size="sm"
              className="rounded-full border-border/60 bg-background/50 backdrop-blur-md text-xs font-semibold transition-all hover:border-primary/40"
            >
              <Link href="/auth/signin">Sign In</Link>
            </Button>
          )}
          <ModeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;
