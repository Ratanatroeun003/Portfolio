
import type { NextAuthConfig } from 'next-auth';
export default {
  pages: {
    signIn: '/auth/signin',
    error: '/auth/signin',
  },
  providers: [],
} satisfies NextAuthConfig;