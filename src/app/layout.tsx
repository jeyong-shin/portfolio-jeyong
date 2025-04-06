import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "신제용 포트폴리오",
  description: "강사, 개발자, LLM 및 딥러닝 전문가",
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "https://yourdomain.com",
    title: "신제용 포트폴리오",
    description: "강사, 개발자, LLM 및 딥러닝 전문가",
    siteName: "신제용 포트폴리오",
  },
  twitter: {
    card: "summary_large_image",
    title: "신제용 포트폴리오",
    description: "강사, 개발자, LLM 및 딥러닝 전문가",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col">
            <SiteHeader />
            <main className="flex-1">{children}</main>
            <SiteFooter />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
