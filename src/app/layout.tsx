import "../styles/globals.css";
import Navbar from "@/components/Navbar/Navbar";
import BackToTop from "../components/BackToTop/BackToTop";

export const metadata = {
  title: "Chaitra | Portfolio",
  description: "Frontend & Data Analytics Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Navbar />
        {children}
        <BackToTop />
      </body>
    </html>
  );
}
