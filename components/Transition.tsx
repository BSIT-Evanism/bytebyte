import { AnimatePresence, motion } from "framer-motion"
import Navbar from "./Navbar"

export default function Transition({ children }: { children: React.ReactNode }) {
    return (
        <>
            <motion.div initial={{ x: 0 }} animate={{ x: "100vw" }} exit={{ x: 0 }} transition={{ duration: 2, type: 'tween', ease: 'anticipate' }} className="w-full h-full absolute bg-red-300 top-0">
                Transition
            </motion.div>
            <Navbar />
            {children}
        </>
    )
}