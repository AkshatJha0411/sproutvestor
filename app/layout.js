import Footer from "@/Components/Footer";
import "./globals.css";
import Header from "@/Components/Header";

export const metadata = {
  title: "SproutVestor",
  description:
    "A tool aiding novice investors and students in making informed stock selections for optimal investment.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
