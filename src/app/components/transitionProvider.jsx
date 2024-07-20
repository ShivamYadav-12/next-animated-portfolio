"use client"

import { AnimatePresence, easeOut } from "framer-motion";
import Navbar from "./navbar";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

const TransitionProvider = ({ children }) => {
    const pathName = usePathname();
    return (

        <AnimatePresence mode="wait">

            <div key={pathName} className="h-screen w-screen  bg-gradient-to-b  from-blue-50 to-blue-500">
                <motion.div className="w-screen h-screen fixed bg-black rounded-b-[100px] z-40"
                    animate={{ height: "0vh" }}
                    exit={{ height: "140vh" }}
                    transition={{ duration: 0.5, ease: easeOut }}
                
                />
                <motion.div className="fixed m-auto left-0 right-0 bottom-0 top-0 text-8xl text-white z-50 w-fit h-fit"
                    initial={{opacity: 1}}
                    animate={{ opacity:0,}}
                    exit={{opacity:0}}
                    transition={{ duration: 0.8, ease: easeOut }}>
                        {pathName.substring(1)}
                    </motion.div>
                 <motion.div className="w-screen h-screen fixed bg-red-black  rounded-t-[100px] z-30"
                    initialt={{ height: "140vh" }}
                    animate={{ height: "0vh" ,transition :{delay : 0.5}}}
                    
                  
                />
                <div className="h-24">
                    <Navbar />
                </div>
                <div className="h-[calc(100vh-6rem)]">
                    {children}
                </div>
            </div>

        </AnimatePresence>


    )
}
export default TransitionProvider;