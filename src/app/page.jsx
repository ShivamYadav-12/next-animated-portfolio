import Image from "next/image";

const Homepage = () => {
  return (
  <div className="h-full flex flex-col lg:flex-row  px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48  ">
    <div className="h-1/2 relative lg:h-full lg:w-1/2 "> 
    <Image src="/hero.png" alt="hero image" fill className="object-contain"/>
    </div>
    <div className="h-1/2 flex flex-col gap-8 justify-center items-center lg:h-full lg:w-1/2">
    <h1 className=" text-4xl md:text-6xl font-bold">Crafting Digital Expriences,Designing Tomorrow</h1>
    <p className="md:text-xl">Welcome to my digital canvas where innovation and creativity coverge. with keen eye for aesthethics and mastery of code ,my portfolio contain diverse collections of my projects rhat reflect my correctness to excellence</p>
     <div className="w-full flex gap-4">
     <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">View my Work</button>
     <button className="p-4 rounded-lg ring-1  ring-black bg-white">Contact Me</button>
     </div>
    </div>
  </div>
)
};

export default Homepage;
