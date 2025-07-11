import { Cormorant_Garamond, 
   Share_Tech_Mono
 } from "next/font/google";
import "./globals.css";



const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600", "700"], // choose weights you need
  display: "swap",
});

const shareTechMono = Share_Tech_Mono({
  subsets: ["latin"],
  variable: "--font-sharetech",
  weight: "400", // only one weight available
  display: "swap",
});

export const metadata = {
  title: "My Business Site",
  description: "Powered by Cormorant Garamond",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={cormorant.variable}>
  <body className="font-primary antialiased">
    {children}
  </body>
  
</html>

  );
}
