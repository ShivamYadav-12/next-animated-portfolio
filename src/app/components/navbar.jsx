"use client"
import Image from "next/image";
import Link from "next/link"
import { useState } from "react";
import Navlink from "./navlink";
import { motion } from "framer-motion";


const links = [
    {url : "/", title:"Home"},
    {url : "/about", title:"About"},
    {url : "/portfolio", title:"PortFolio"},
    {url : "/contact", title:"Contact"},
];

const Navbar =  ()=>{
    const [open,setOpen] = useState(false);
    const topVariant ={
        
            closed :{
                rotate: 0,
            },
            opened :{
                rotate: 45,
                backgroundColor: "rgb(255,255,255)"
            }
         }
     const centerVariant ={
        
            closed :{
                opacity: 1,
            },
            opened:{
                rotate: 0,
               
            }
         }
    const bottomVariant ={
        
            closed :{
                rotate: 0,
            },
            opened :{
                rotate: -45,
                backgroundColor: "rgb(255,255,255)"
            }
         }
    const listVariant ={
        closed:{
            x:"1oovh",
        },
        opened:{
            x:0,
            transition:{
                when:"beforeChildren",
                staggerChildren:0.2,
            }
        }
    }
    const listItems = {
        closed:{
            x:-10,
            opacity:0,
        },
        opened:{
            x:0,
            opacity:1,
        }
    }
    
 
    
    return <div  className=" h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl">
        <div className="hidden md:flex gap-4 w-1/3" >
            {links.map((link)=>(
                <Navlink link={link} key={link.title}/>
            ))}
        </div>
        <div className="md:hidden lg:flex xl:w-1/3 xl:justify-center" >
            <Link href="/" className="rounded-md bg-black font-semibold items-center flex justify-center">
            <span className="text-white mr-1   ">Shivam</span>
            <span className="bg-white rounded-md text-black w-12 h-8 flex items-center justify-center ">.dev</span>
            </Link>
            </div> 
            <div className="hidden md:flex gap-4 w-1/3 ">
             
            <Link href= "https://github.com/ShivamYadav-12">
            <Image src="/github.png" alt="githubimage" width={24} height={24}/>
            </Link>
           
            
            <Link href= "https://www.linkedin.com/in/shivam-yadav-72abaa266/">
            <Image src="/linkedin.png" alt="linkedinimage" width={24} height={24}/>
            </Link>

            <Link href= "#">
            <Image src="/pinterest.png" alt="pinterestimage" width={24} height={24}/>
            </Link>

            <Link href= "#">
            <Image src="/dribbble.png" alt="dribbleimage" width={24} height={24}/>
            </Link>

            <Link href= "#">
            <Image src="/instagram.png" alt="instagramimage" width={24} height={24}/>
            </Link>

            </div>
        <div className="md:hidden">
            <button className="h-8 w-10 flex flex-col justify-between z-50 relative" onClick={()=>setOpen(!open)}>
                <motion.div variants={topVariant} animate={open ? "opened": "closed"} className="h-1 w-10 bg-black origin-left"></motion.div>
                <motion.div variants={centerVariant} animate={open ? "opened": "closed"}className="h-1 w-10 bg-black"></motion.div>
                <motion.div variants={bottomVariant}animate={open ? "opened": "closed"} className="h-1 w-10 bg-black origin-left"></motion.div>
            </button>
      { open && <motion.div variants={listVariant} initial="closed" animate="opened" className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl z-40"> 
           {links.map((link)=>(
            <motion.div variants={listItems} key={link.title}>
                   <Link href ={link.url} >{link.title}</Link>
                   </motion.div>
               ))  }
           
       </motion.div>}
        </div>
        
    </div>

}
export default Navbar;