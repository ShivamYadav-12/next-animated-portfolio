"use client"
import {  easeInOut, motion, useInView, useScroll } from "framer-motion";
import Brain from "../components/brain";
import { useRef } from "react";
const About = () => {
  const containRef = useRef();
  const {scrollYProgress} = useScroll({container:containRef})
  const skillRef = useRef();
  const inSkillView = useInView(skillRef,{margin:"-100px"});
  const expRef = useRef();
  const inExpView = useInView(expRef,{margin:"-100px"});
     return (
        <motion.div className="h-full"
         initial={{ y: "-200vh" }}
          animate={{ y: "0%" }}
          transition={{ duration: 1 }}>
            <div className="h-full overflow-scroll lg:flex " ref={containRef}>
                <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:1/2">
                    <div className="flex flex-col gap-12 justify-center">
                        <h1 className="font-bold text-2xl">BIOGRAPHY</h1>
                        <p className="text-lg">
                         I am a detail-oriented and self-driven developer with a strong foundation in full-stack web development. 
  I enjoy turning complex problems into clean, user-centric solutions—building everything from responsive interfaces to scalable backends.
  With hands-on experience in JavaScript, Python, automation, and cloud tools like Docker and Kubernetes, 
  I aim to contribute to impactful projects that blend functionality with creativity.
                               </p>
                    <span className="italic" >
                         Constantly learning. Always building. Never settling.
                    </span>
                   
                    <div className="self-end">
                    <svg xmlns="http://www.w3.org/2000/svg" width="200" height="150" viewBox="0 0 302 132" fill="none">
                     
<path d="M134 35.3799C134 30.704 138.676 25.0872 143.778 28.1021C147.806 30.4822 150.897 43.0262 152.556 47.1577C154.617 52.2906 156.006 57.6992 158.056 62.8243C159.121 65.4868 161.818 65.5604 164 64.1577C169.735 60.4709 169.414 50.5039 169.778 44.6021C170.059 40.0333 170 35.4544 170 30.8799C170 30.122 170 26.8697 170 29.3799C170 33.2112 170.87 36.3421 171.778 40.0465C173.995 49.094 174.173 58.835 173.944 68.1021C173.639 80.4524 170.281 92.0905 168 104.158C166.608 111.519 165.434 124.036 159.444 129.547C154.099 134.464 148.592 117.551 147.833 114.824C144.446 102.655 148.029 91.3897 151.778 79.8243C157.23 63.0035 169.767 49.3083 184.778 40.0465C187.605 38.302 195.528 32.6338 192.333 33.5465C185.864 35.3949 180.044 47.625 177.556 52.7688C175.513 56.9899 175.242 71.6278 184 69.1577C192.913 66.6437 194.044 51.4821 191.444 44.6021C188.058 35.637 194.02 50.9378 195.444 53.3799C199.242 59.8904 204.991 65.7273 210.833 56.3799C214.331 50.7831 215.232 30.2253 224.056 29.5465C224.562 29.5076 230.964 30.8236 229.778 32.1577C229.236 32.7668 225.312 33.2146 224.444 33.3799C217.536 34.6958 217.756 41.1739 216 46.9354C215.491 48.6061 211.602 71.0401 216.222 69.1577C222.774 66.4885 225.626 50.9801 225.944 44.7688C226.634 31.3281 221.455 17.3143 217.5 4.65765C213.326 -8.69929 223.891 31.964 228.556 45.1577C229.402 47.5518 238.176 72.2618 240.444 67.6021C245.984 56.223 246.371 43.7856 250 31.991C250.691 29.7452 252.675 30.5367 254 31.8243C255.813 33.5856 260.8 39.2299 258.778 37.7132C247.207 29.0351 241.923 65.2913 248.222 67.1577C255.314 69.2588 254.119 44.7482 253.222 40.8243C252.717 38.6154 252.975 41.4225 253 42.1577C253.132 45.988 255.063 50.0812 257.056 53.2688C258.172 55.0559 262.061 60.0981 264.778 59.1577C267.488 58.2196 265.737 49.8976 265.5 48.0465C265.238 46.0052 265 44.045 265 41.991C265 40.0185 266.343 45.7435 267.444 47.3799C269.592 50.5702 283.861 64.1718 285.778 54.9354C287.541 46.4382 285.046 36.3205 277 31.8243C274.532 30.4452 282.824 30.0725 285.111 29.1577C290.883 26.8488 295.65 23.73 300 19.3799" stroke="black" strokeWidth="3" strokeLinecap="round"/>
<path d="M4.00001 75C10.4273 75 13.2956 60.1328 14.2222 55.7778C16.7837 43.7387 16.1355 33.5523 11.7778 22.2222C11.302 20.9851 6.76194 16.6825 5.22223 18.2222C3.95829 19.4862 3.95929 22.3416 3.22223 24C1.47668 27.9275 2.30098 37 7.50001 37C9.04072 37 11.3156 39.5913 13.6111 39.9444C18.354 40.6741 21.8976 43.8951 24.3889 48.1111C27.0711 52.6503 34.8298 77.036 24.3333 78.9444C15.4372 80.5619 -0.035699 72.375 3.05556 61.5556C4.24266 57.4007 15.2369 63.4739 16 65" stroke="black" strokeWidth="3" strokeLinecap="round"/>
<path d="M26 75C31.93 75 35.8791 64.3628 37.5 59.5C40.5005 50.4986 40.7747 35.5409 37.5 26.4444C36.1766 22.7683 34.9261 19.9262 33 16.5556C31.2926 13.5676 29.0307 19.4509 29 20.5556C28.8361 26.4555 28.0966 33.3342 29.6111 39.0556C31.1842 44.9984 33.5417 50.7347 34.7778 56.7778C35.9268 62.3952 37 68.7697 37 74.5C37 78.2327 36.7316 74.9394 37.2222 73.2222C38.469 68.8587 39.2861 64.3701 40.5 60C41.9915 54.6307 38.8307 44.0214 47.2222 52.2222C50.1262 55.0602 53.1895 58.4034 53.9444 62.5556C54.3982 65.0514 53.4935 67.7626 54.2222 70.2222C54.9506 72.6806 55.7118 77.6958 59.5556 76C62.2694 74.8027 60.7266 69.3024 61.0556 67C61.4432 64.2866 62 55.6237 62 56.5C62 61.5757 61.7847 67.3686 64.2222 72C65.9011 75.1899 72 74.4736 72 71C72 66.037 72 61.0741 72 56.1111C72 51.2829 74.4826 66.3773 78.5 69.0556C80.2177 70.2007 81.7405 72.2734 83.3889 73.5556C85.8148 75.4424 85 68.0447 85 66.4444C85 63.4574 85.5402 59.9509 87.5 57.5556C89.7266 54.8342 87.8116 54.9058 90 56" stroke="black" strokeWidth="3" strokeLinecap="round"/>
<path d="M99 57C92.3556 57 82.7722 69.3118 87 75.7778C88.623 78.26 93.3921 77.2132 95 75.4444C97.7262 72.4456 97 67.7241 97 64C97 57.5487 97.721 69.6041 98.0556 71.4444C99.2756 78.1546 100.929 73.909 102.222 71C102.979 69.2964 104.53 61.6971 105.556 61.1111C108.265 59.5628 113.879 65.7012 114 68C114.083 69.57 115 75.6338 115 74.3889C115 71.1639 114.308 66.8644 115.222 63.7778C116.16 60.6126 118.222 58.5552 120.444 63C121.193 64.4978 121.004 70.3878 121.222 70C123.309 66.2899 124.027 63.6268 124.944 59.5C125.692 56.1353 128.919 51.6692 132 55.7778C135.318 60.2024 134 67.1662 134 73" stroke="black" strokeWidth="3" strokeLinecap="round"/>
<path d="M61 45C59.6565 45 59.0884 45.4558 58 46" stroke="black" strokeWidth="3" strokeLinecap="round"/>
</svg>
                   
                    </div>
                    <motion.svg
                     initial={{opacity:0.2,y:0}}
                     animate={{opacity:1,y:"10px"}}
                     transition={{repeat:Infinity,duration:3,ease:easeInOut}}
            
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
        </div>
       
       
            <div className="flex flex-col gap-12 justify-center " ref={skillRef}>
             <motion.h1 initial={{x:"-100px"}}
              animate={inSkillView ?{x:"0"} :{}}
                duration={{delay:0.2}}
                 className="font-bold text-2xl">
                  SKILLS
                  </motion.h1>
             <motion.div initial={{x:"-100px"}} 
             animate={inSkillView ?{x:"0"} :{}}
              duration={{delay:0.2}}
               className="flex gap-4 flex-wrap">
             <div className="rounded p-2 cursor-pointer bg-black text-white hover:bg-white hover:text-black text-sm">JavaScript</div>
             <div className="rounded p-2 cursor-pointer bg-black text-white hover:bg-white hover:text-black text-sm">TypeScript</div>
             <div className="rounded p-2 cursor-pointer bg-black text-white hover:bg-white hover:text-black text-sm">React JS</div>
             <div className="rounded p-2 cursor-pointer bg-black text-white hover:bg-white hover:text-black text-sm">Next JS</div>
             <div className="rounded p-2 cursor-pointer bg-black text-white hover:bg-white hover:text-black text-sm">Mongo DB</div>
             <div className="rounded p-2 cursor-pointer bg-black text-white hover:bg-white hover:text-black text-sm">Prisma</div>
             <div className="rounded p-2 cursor-pointer bg-black text-white hover:bg-white hover:text-black text-sm">PostgreSQL</div>
             <div className="rounded p-2 cursor-pointer bg-black text-white hover:bg-white hover:text-black text-sm">GraphQL</div>
             <div className="rounded p-2 cursor-pointer bg-black text-white hover:bg-white hover:text-black text-sm">Node JS</div>
             <div className="rounded p-2 cursor-pointer bg-black text-white hover:bg-white hover:text-black text-sm">Redux</div>
             <div className="rounded p-2 cursor-pointer bg-black text-white hover:bg-white hover:text-black text-sm">Tailwind CSS</div>
             </motion.div>
             
             <motion.svg
             initial={{opacity:0.2,y:0}}
             animate={{opacity:1,y:"10px"}}
             transition={{repeat:Infinity,duration:3,ease:easeInOut}}
            
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            width={50}
            height={50}
          >
            <path
              d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
              stroke="#000000"
              strokeWidth="1"
            ></path>
            <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
            <path
              d="M15 11L12 14L9 11"
              stroke="#000000"
              strokeWidth="1"
            ></path>
          </motion.svg>
                    </div>

                    
                    {/*Experience CONtainer*/}
                    <div className="flex flex-col gap-12 justify-center pb-48 " ref={expRef}>
                        {/*Experience TITLE*/}
                    <motion.h1
                    initial={{x:"-300px"}}
                    animate={inExpView ?{x:"0"} :{}}
                      transition={{delay:0.2}}

                     className="font-bold text-2xl">
                      Academics Details
                      </motion.h1>

                    {/*Experience LIST*/}
                    <motion.div
                      initial={{x:"-300px"}}
                      animate={inExpView ?{x:"0"} :{}}
                        transition={{delay:0.2}}
                        className="">
                         {/*Experience LIST ITEM*/}
                    <div className="flex justify-between h-48">
                        {/* LEFT*/}
                    <div className="w-1/3">
                      <div className="bg-white font-semibold p-3 rounded-b-lg rounded-s-lg ">  B.Tech in Computer Science & Engineering</div>
                      <div className="p-3 text-sm italic"> Pursuing core subjects and building real-world tech skills.</div>
                      <div className="p-3 text-sm text-red-400 font-semibold">2021-2025</div>
                      <div className="p-1 rounded bg-white text-sm font-semibold w-fit">ABESEC</div>
                       </div>
                       {/*center*/}

                       <div className="w-1/6">
                        {/*LINE*/}
                        <div className="w-1 h-full bg-gray-600 rounded relative">
                          {/*LINE CIRCLE*/}
                          <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                        </div>
                       </div>
                       {/* right side*/}
                       <div className="w-1/3"></div>
                      </div>
                         {/*Experience LIST ITEM*/}
                    <div className="flex justify-between h-48">
                        {/* LEFT*/}
                    <div className="w-1/3">
                     
                       </div>
                       {/*center*/}

                       <div className="w-1/6">
                        {/*LINE*/}
                        <div className="w-1 h-full bg-gray-600 rounded relative">
                          {/*LINE CIRCLE*/}
                          <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                        </div>
                       </div>
                       {/* right side*/}
                       <div className="w-1/3">
                       <div className="bg-white font-semibold p-3 rounded-b-lg rounded-s-lg ">Class 12th – PCM</div>
                      <div className="p-3 text-sm italic"> with a strong foundation in Physics, Chemistry & Math.</div>
                      <div className="p-3 text-sm text-red-400 font-semibold">2020</div>
                      <div className="p-1 rounded bg-white text-sm font-semibold w-fit">ISC Board</div>
                       </div>
                      </div>
                       {/*Experience LIST ITEM*/}
                    <div className="flex justify-between h-48">
                        {/* LEFT*/}
                    <div className="w-1/3">
                      <div className="bg-white font-semibold p-3 rounded-b-lg rounded-s-lg">Co-authored Research paper</div>
                      <div className="p-3 text-sm italic">Presented paper on decentralised Frellancing in IEEE conference</div>
                      <div className="p-3 text-sm text-red-400 font-semibold">2025</div>
                       </div>
                       {/*center*/}

                       <div className="w-1/6">
                        {/*LINE*/}
                        <div className="w-1 h-full bg-gray-600 rounded relative">
                          {/*LINE CIRCLE*/}
                          <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                        </div>
                       </div>
                       {/* right side*/}
                       <div className="w-1/3"></div>
                      </div>
         
                      </motion.div>
                    </div>
                    </div>
                {/*SVG CONTAINER*/}
                <div className="hidden sticky  top-0 z-30 lg:block w-1/3 xl:1/2 ">
                 <Brain scrollYProgress={scrollYProgress}/>
                </div>
            </div>
        </motion.div>

    )
}
export default About;