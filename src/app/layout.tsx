// app/layout.tsx
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Lab-Grown Diamond Store",
  description: "Ethical brilliance with lab-grown diamonds",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* TODO: Add Navbar */}
        {children}
        {/* TODO: Add Footer */}
      </body>
    </html>
  );
}
