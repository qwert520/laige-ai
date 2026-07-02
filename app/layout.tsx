import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://laige-ai.com'),
  title: "来哥AI Studio | 让AI成为你的超级员工",
  description: "吴文来（来哥）- 20年全栈开发经验，AI智能体应用专家。提供AI智能体开发、企业管理系统、物联网开发、AI自动化、电商运营、企业咨询等服务。",
  keywords: "AI智能体,全栈开发,企业数字化,AI自动化,智能客服,Agent开发,吴文来,来哥AI",
  authors: [{ name: "吴文来" }],
  creator: "来哥AI Studio",
  openGraph: {
    title: "来哥AI Studio | 让AI成为你的超级员工",
    description: "20年全栈开发经验，AI智能体应用专家，帮助企业实现AI自动化办公",
    type: "website",
    locale: "zh_CN",
    images: ["/images/个人形象.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "来哥AI Studio | 让AI成为你的超级员工",
    description: "20年全栈开发经验，AI智能体应用专家",
    images: ["/images/个人形象.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="zh-CN"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <ThemeProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
