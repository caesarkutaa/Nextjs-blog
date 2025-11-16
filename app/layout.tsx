import "./globals.css";
import ConditionalNavbar from "../components/ConditionalNavbar";
import Footer from "../components/Footer";
import CookieNotice from "../components/CookieNotice";

export const metadata = {
  title: {
    default: "krevv — Guide Designed for Digital & Remote workers.",
    template: "%s | krevv",
  },
  description:
    "A guide built for remote professionals and creatives who want to thrive in a digital world.",
  keywords: [
    "blog",
    "stories",
    "inspiration",
    "tech",
    "tutorials",
    "creative writing",
    "lifestyle",
  ],
  metadataBase: new URL("https://krevv.com"), // ✅ replace with your real domain
  authors: [{ name: "Krevv Team", url: "https://krevv.com" }],
  creator: "Krevv",
  publisher: "Krevv",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "krevv — Guide Designed for Digital & Remote workers",
    description:
      "A guide built for remote professionals and creatives who want to thrive in a digital world.",
    url: "https://krevv.com",
    siteName: "krevv",
    images: [
      {
        url: "https://krevv.com/krevv.png",
        width: 1200,
        height: 630,
        alt: "My Blog preview image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "krevv — Guide Designed for Digital & Remote workers.",
    description:
      "A guide built for remote professionals and creatives who want to thrive in a digital world..",
    creator: "@yourhandle", // replace with your Twitter handle
    images: ["https://krevv.com/krevv.png"],
  },
  alternates: {
    canonical: "https://krevv.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-cream text-gray-800 flex flex-col min-h-screen">
        <ConditionalNavbar />
        <main className="flex-1">
          {children}
          <CookieNotice />
        </main>
        <Footer />
      </body>
    </html>
  );
}
