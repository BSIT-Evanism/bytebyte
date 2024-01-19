import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react"


export default function Preloader() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 3000);
    }, [])

    return (
        <AnimatePresence>
            {loading && (
                <motion.div className="fixed bg-slate-400 w-full h-screen flex justify-center items-center" exit={{ y: '100vh' }} transition={{ duration: 2 }}>ByteByte</motion.div>
            )}
        </AnimatePresence>
    )
}