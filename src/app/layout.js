import localFont from "next/font/local";
import "./globals.css";
import Header from "./Components/Header/Header";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "CoderFlix - Watch Videos",
  description: "Youtube video player for developers. Watch progrramming tutorials and watch LWS videos without distractions.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className="bg-[#141414] text-[#e5e5e5]"
      >
        <Header/>
        {children}
      </body>
    </html>
  );
}
