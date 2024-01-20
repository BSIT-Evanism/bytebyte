import Link from "next/link";
import Preloader from "./Preloader";


export default function Navbar() {
    return (
        <>
            <div className="w-full h-10vh p-5 px-10 flex justify-between items-center font-semibold uppercase border-b-1 border-black">
                <h1>Logo</h1>
                <ul className="flex gap-5">
                    <Link href="/">Home</Link>
                    <Link href="/contact">Contact</Link>
                    <Link href="/about">About</Link>
                </ul>
            </div>
        </>
    )
}

