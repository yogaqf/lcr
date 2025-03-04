import { Bebas_Neue, Poppins } from "next/font/google";

export const bebasNeue = Bebas_Neue({
      subsets: ["latin"],
      weight: ["400"],
      variable: "--font-bebas-neue",
});

export const poppins = Poppins({
      subsets: ["latin"],
      weight: ["600"],
      variable: "--font-poppins",
});