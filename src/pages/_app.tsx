import { api } from "@/utils/api";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";
import "@/styles/globals.css";
import { Analytics } from "@/components/analytics";
import { TailwindIndicator } from "@/components/tailwind-indicator";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "next-themes";
import { Lato } from "next/font/google";

const lato = Lato({
  subsets: ["latin"],
  variable: "--font-lato",
  weight: ["100", "300", "400", "700", "900"],
});

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <main
        className={`${lato.variable} font-lato bg-theme-50 dark:bg-theme-900 text-theme-900 dark:text-theme-50 antialiased`}
      >
        <SessionProvider session={session}>
          <Component {...pageProps} />
        </SessionProvider>
        <Analytics />
        <Toaster />
        <TailwindIndicator />
      </main>
    </ThemeProvider>
  );
};

export default api.withTRPC(MyApp);
