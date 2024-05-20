import { Inter } from "next/font/google";
import "./globals.css";
import Navbars from "../components/Navbar";
import Footer from "../components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Link from "next/link";
import { Toaster } from "react-hot-toast";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Wolk Inc",
  description: "Wolk Inc",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head></head>
      <body className={inter.className}>
        <Navbars />
        <Toaster position="top-right" />
        {children}
        <Footer />
      </body>
    </html>
  );
}
