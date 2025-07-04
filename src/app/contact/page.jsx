"use client"
import { animate, motion } from "framer-motion";
import { useState } from "react";


const Contact=() =>{
    const [success,SetSuccess] = useState(true);
    const [error,setError] = useState(true);
    const text = "Say Hello"

    return (
        <motion.div className="h-full" initial={{ y: "-200vh" }} animate={{ y: "0%" }} transition={{ duration: 1 }}>
        <div className="h-full flex flex-col lg:flex-row x-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 ">
            {/* text container */}
            <div className="h-1/2 lg:h-full lg:w-1/2 flex items-center justify-center text-6xl">
            {text.split('').map((letter,index)=>(
                <motion.span
                key={index}
                initial={{opacity:1}}
                animate={{opacity:0}}
                transition={{duration:3,repeat:Infinity,delay:index*0.1}}
                >
              {letter}

                </motion.span>
            ))}
            😊
          </div>
          <form className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 justify-center bg-blue-200 p-24">
          <span >
            Dear Shivam,
          </span>
          <textarea rows={6} className="bg-transparent outline-none border-b-2 border-b-black resize-none"/>
          <span>
            My mail address
          </span>
          <input type="text" className="bg-transparent outline-none border-b-2 border-b-black "/>
          <span>Regards</span>
          <button className="bg-purple-400 rounded p-4 font-semibold text-gray-600">
            Send
          </button>
          {success && <span className="text-green-600 font-semibold">Your message has been sent succeessfully.</span>}
          {success && <span className="text-red-700 font-semibold">Something went wrong!</span>}
          </form>

        </div>
         </motion.div>
    
        )
}
export default Contact;