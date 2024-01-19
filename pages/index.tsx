import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Preloader from "@/components/Preloader";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="w-full h-screen">
      <Preloader />
      <Navbar />
      Hello World
    </div>
  );
}
