import { Roboto } from "next/font/google";
import "./globals.scss";
import "bulma/css/bulma.css";
import "@/styles/btn.css";
import StickyCursor from "@/components/cube/stickyCursor";
const inter = Roboto({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "cyandev ",
  description: "frontend developer",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className="h-screen
    "
    >
      <head>
        {" "}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={inter.className}>
        {" "}
        <StickyCursor /> {children}
      </body>
    </html>
  );
}
