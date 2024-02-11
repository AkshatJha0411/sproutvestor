import Footer from "@/Components/Footer";
import "./globals.css";
import Header from "@/Components/Header";

export const metadata = {
  title: "SproutVestor",
  description: "--",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
