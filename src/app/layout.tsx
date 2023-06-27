import "./globals.css";
import { Inter, Playfair_Display } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import Navbar from "~/components/Navbar";
import { cn } from "~/lib/util";
import { Github, LinkIcon, Twitter } from "lucide-react";
// import { dark } from "@clerk/themes";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair"
});

export const metadata = {
  title: "Ikigai - ADHD Time Tracking",
  description: "Why do I need to make this app? I don't, but I'm bored...",
  themeColor: "#171717"
};

console.log(inter);

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html
        lang="en"
        className={cn(
          inter.variable,
          playfair.variable,
          "min-h-screen overflow-auto dark:bg-zinc-900 text-zinc-800 dark:text-zinc-100 p-4"
        )}
      >
        <body className={cn("pt-16 h-full w-full flex flex-col")}>
          <Navbar />
          {children}
          <footer className="w-full py-4 space-y-4">
            <p className="text-zinc-400 dark:text-zinc-600 text-center">
              made with ❤️ by{" "}
              <a href="https://devsharpe.io/" className="underline">
                devsharpe
              </a>
            </p>
            <div className="flex items-center justify-center gap-4 text-zinc-400 dark:text-zinc-600">
              <Twitter />
              <Github />
              <LinkIcon />
            </div>
          </footer>
        </body>
      </html>
    </ClerkProvider>
  );
}
