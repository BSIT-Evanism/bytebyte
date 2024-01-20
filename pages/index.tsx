import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Preloader from "@/components/Preloader";
import Transition from "@/components/Transition";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Transition>
      <div className="w-full h-screen">

        Hello World
      </div>
    </Transition>
  );
}
