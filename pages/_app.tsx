import Navbar from "@/components/Navbar";
import Preloader from "@/components/Preloader";
import Transition from "@/components/Transition";
import "@/styles/globals.css";
import { AnimatePresence } from "framer-motion";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <>
      <Preloader />
      <AnimatePresence mode="wait">
        <Component key={router.asPath} {...pageProps} />
      </AnimatePresence>
    </>
  );
}
