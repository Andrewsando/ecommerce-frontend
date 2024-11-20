import { AuthProvider } from "@/contexts/AuthContext";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { CartProvider } from "@/contexts";
import 'semantic-ui-css/semantic.min.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GAMING - Your favorite games",
  description: "Your favorite games for Steam, PlayStation, Xbox and Switch at their best prices",
};

export default function RootLayout({
  children, ...props
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="es">
      <body className={inter.className}>
        <AuthProvider>
          <CartProvider>
            {children}
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
