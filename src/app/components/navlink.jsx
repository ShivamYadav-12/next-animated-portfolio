"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navlink =({link}) =>{
    const pathName = usePathname();
    return <div>
    <Link href={link.url} className={`rounded p-1 ${pathName ===link.url && "bg-black text-white"}`}>{link.title}</Link>

    </div>
}
export default Navlink;