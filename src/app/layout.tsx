import "./globals.css";

import { Open_Sans } from "next/font/google";
import Navbar from "@/components/Navbar";
import AuthContext from "@/context/AuthContext";
import { Metadata } from "next";
import SWRConfigContext from "@/context/SWRConfigContext";

const openSans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Instargram",
    template: "Instargram | %s",
  },
  description: "Instargram Photos",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={openSans.className}>
      <body className="w-full overflow-auto bg-neutral-50">
        <AuthContext>
          <header className="sticky top-0 bg-white z-10 border-b">
            <div className="max-w-screen-xl mx-auto">
              <Navbar />
            </div>
          </header>
          <main className="w-full max-w-screen-xl mx-auto flex justify-center">
            <SWRConfigContext>{children}</SWRConfigContext>
          </main>
          <div id="portal" />
        </AuthContext>
      </body>
    </html>
  );
}
