import { Nunito } from "next/font/google";
import Navbar from "./components/navbar/Navbar";
import RegisterModal from "./components/modals/RegisterModal";
import "./globals.css";
import ToasterProvider from "./providers/ToasterProvider";
import LoginModal from "./components/modals/LoginModal";
export const metadata = {
  title: "Airbnb",
  description: "Airbnb clone",
};

const font = Nunito({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ToasterProvider />
        <RegisterModal />
        <LoginModal />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
