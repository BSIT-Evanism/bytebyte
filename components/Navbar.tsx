import Preloader from "./Preloader";


export default function Navbar() {
    return (
        <>
            <div className="w-full h-10vh p-5 px-10 flex justify-between items-center font-semibold uppercase border-b-1 border-black">
                <h1>Logo</h1>
                <ul className="flex gap-5">
                    <li>Home</li>
                    <li>Contact</li>
                    <li>About</li>
                </ul>
            </div>
        </>
    )
}