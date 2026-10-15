// proxy.ts ( Next.js 16 / Auth.js v5 )
import NextAuth from "next-auth";
import authConfig from "./auth.config";
import { NextResponse } from "next/server";
const { auth } = NextAuth(authConfig);
export const proxy = auth(async function proxy(req) {
  const isLoggedIn = !!req.auth;
  const { pathname } = req.nextUrl;
if (pathname.startsWith("/admin")) {
  if (!isLoggedIn) {
    const signInUrl = new URL("/auth/signin", req.url);
    // signInUrl.searchParams.set("callbackUrl", pathname);
    return NextResponse.redirect(signInUrl);
  }
}
  if(pathname.startsWith('/auth')){
    if(isLoggedIn){
     return NextResponse.redirect(new URL("/", req.url));
    }
  }
  return NextResponse.next();
});

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};