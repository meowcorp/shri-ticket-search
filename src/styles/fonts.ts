import { Roboto } from "next/font/google";
import localFont from "next/font/local";

const roboto = Roboto({
  display: "swap",
  subsets: ["latin"],
  weight: ["500", "700"],
});

const SFProText = localFont({
  src: "../../public/fonts/SFProText-Regular.ttf",
});

export { roboto, SFProText };
