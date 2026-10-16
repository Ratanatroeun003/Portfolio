import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { Inter } from 'next/font/google';
import { Toaster } from 'sonner';
const inter = Inter({ subsets: ['latin'] });
export const metadata = {
  title: 'Troeun Ratana',
  description: 'Welcome to my profile',
  openGraph: {
    title: 'Troeun Ratana',
    description: 'Welcome to my profile',
    images: [
      {
        url: 'https://res.cloudinary.com/deiswm9jn/image/upload/v1792133473/myPic.jpg', // ← URL រូបអ្នក
        width: 1200,
        height: 630,
        alt: 'Troeun Ratana',
      },
    ],
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className={`flex-1 ${inter.className}`}>{children}</main>
        </ThemeProvider>
        <Toaster richColors position="top-right" />
      </body>
    </html>
  );
}
