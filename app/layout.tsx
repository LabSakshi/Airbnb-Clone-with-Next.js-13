import {Nunito} from 'next/font/google'
import Navbar from './components/navbar/Navbar';
import RegisterModal from './components/modals/RegisterModal';
import "./globals.css";

export const metadata = {
  title: "Airbnb",
  description: "Airbnb clone",
};

const font = Nunito({
  subsets: ["latin"]
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <RegisterModal/>
        <Navbar/>
        {children}</body>
    </html>
  );
}
