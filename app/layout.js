import { Poppins } from "next/font/google";
import "./globals.css";
import { Header, Footer } from "./components";
import SmoothScrollProvider from "./components/smoothProvider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

// Metadata config
export const metadata = {
  metadataBase: new URL("https://dostudio.ae"),
  title: "Digital Marketing Agency in United Arab Emirates",
  description: "Digital Marketing and Branding agency in Calicut United Arab Emirates",
  openGraph: {
    title: "Digital Marketing Agency in United Arab Emirates",
    description: "Digital Marketing and Branding agency in Calicut United Arab Emirates",
    url: "https://dostudio.ae",
    siteName: "Do Studio",
    images: [
      {
        url: "https://res.cloudinary.com/djswkzoth/image/upload/v1737185612/metaicon_t4u5lc.png",
        width: 1200,
        height: 630,
        alt: "Digital Marketing Agency in UAE",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: [
      {
        url: "https://res.cloudinary.com/djswkzoth/image/upload/v1737185612/metaicon_t4u5lc.png",
        sizes: "any",
      },
      {
        url: "https://res.cloudinary.com/djswkzoth/image/upload/v1737185612/metaicon_t4u5lc.png",
        type: "image/svg+xml",
      },
    ],
    apple: [
      {
        url: "https://res.cloudinary.com/djswkzoth/image/upload/v1737185612/metaicon_t4u5lc.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    shortcut: [
      {
        url: "https://res.cloudinary.com/djswkzoth/image/upload/v1737185612/metaicon_t4u5lc.png",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
       {/* <SmoothScrollProvider> */}
      <body
        className={`${poppins.className} antialiased min-h-screen flex flex-col justify-between`}
        cz-shortcut-listen="true"
      >
        <Header />
        {children}
        <Footer />
      </body>
      {/* </SmoothScrollProvider> */}
    </html>
  );
}
