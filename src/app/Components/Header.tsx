import Image from "next/image";
import logo from "../../../Assets/logo.png"
import Link from "next/link";
export default function Header(){
    return(
       <div className="flex flex-col gap-2 bg-black p-2 pb-6 sm:flex-row sm:justify-evenly lg:gap-[30%]">
        <div className="flex justify-center items-center ">
                <Image src={logo} alt="logo" className="w-[80px] h-[16px] md:w-[100px] lg:w-[120px] lg:h-[20px]"/>
                </div>
                <div >
                    <ul className="flex gap-10 justify-center items-center font-medium mt-2 text-[14px] text-white lg:gap-[40%] lg:text-[16px]">
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/Shop">Shop</Link></li> 
                        <li><Link href="/About">About</Link></li>
                        <li><Link href="/Service">Service</Link></li>
                    </ul>
                </div>
       </div>
            );
          }
          