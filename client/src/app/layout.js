import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar"
import Footer from "@/components/footer/Footer"
import { ThemeContextProvider } from "@/context/ThemeContext";
import ThemeProvider from "@/providers/ThemeProvider";
import { AuthContextProvider } from "@/context/AuthContext";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Blog Nest",
  description: "BlogNest: Where bloggers find their cozy online home, nestling ideas, stories, and insights",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link rel='manifest' href='/favicon.ico' />
      </head>
      <body className={inter.className}>
        <AuthContextProvider>
        <ThemeContextProvider>
            <ThemeProvider>
              <div className="container">
                <div className="wrapper">
                  <Navbar />
                  {children}
                  <Footer />
                </div>
              </div>
            </ThemeProvider>
          </ThemeContextProvider>
        </AuthContextProvider>
      </body>
    </html>
  );
}
