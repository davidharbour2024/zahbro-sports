import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Zahbro Sports",
  description: "Premium MMA, Boxing & Muay Thai Equipment",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
