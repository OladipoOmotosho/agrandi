import type { Metadata } from "next";
import "./globals.css";
import NavBar from "../../components/Navbar/page";
import Footer from "../../components/Footer/page";

export const metadata: Metadata = {
  title: "Agrandi Technologies Inc.",
  description: "Generated by Agrandi Technologies",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div>
          <NavBar />
        </div>
        <main>{children}</main>
        <div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
