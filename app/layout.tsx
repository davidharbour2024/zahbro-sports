import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  applicationName: "Zahbro Sports",
  title: {
    default: "Zahbro Sports | Combat Sports Equipment",
    template: "%s | Zahbro Sports",
  },
  description:
    "Premium equipment and apparel for MMA, boxing, Muay Thai, and combat sports athletes.",
  keywords: [
    "Zahbro Sports",
    "combat sports equipment",
    "MMA gear",
    "boxing equipment",
    "Muay Thai gear",
  ],
  authors: [{ name: "Zahbro Sports" }],
  creator: "Zahbro Sports",
  publisher: "Zahbro Sports",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Zahbro Sports",
    title: "Zahbro Sports | Combat Sports Equipment",
    description:
      "Premium equipment and apparel for MMA, boxing, Muay Thai, and combat sports athletes.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zahbro Sports | Combat Sports Equipment",
    description:
      "Premium equipment and apparel for MMA, boxing, Muay Thai, and combat sports athletes.",
  },
  robots: {
    index: true,
    follow: true,
  },
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
