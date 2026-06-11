import type { Metadata, Viewport } from "next";
import { META_GUEST } from "@/content/landing";
import Analytics from "@/components/Analytics";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://playdate.world"),
  title: META_GUEST.title,
  description: META_GUEST.description,
  openGraph: {
    title: META_GUEST.title,
    description: META_GUEST.description,
    siteName: "플레이데이트",
    images: [{ url: META_GUEST.ogImage, width: 1200, height: 630, alt: META_GUEST.title }],
    type: "website",
    locale: "ko_KR",
  },
  twitter: {
    card: "summary_large_image",
    title: META_GUEST.title,
    description: META_GUEST.description,
    images: [META_GUEST.ogImage],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#F4EFE6",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
