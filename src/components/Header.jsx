import { useState } from "react";
import { IoMdMenu ,IoMdClose} from "react-icons/io";

function Header() {
    let [toggle , setToggle] = useState(false)
  return (
    <div className="bg-[#2699fb] p-4">
        <div className="max-w-[1240px] py-[5px] flex items-center justify-between  mx-auto">
            <div className="text-3xl font-bold">
                Dev Project
            </div>
            {
                toggle ? 
                <IoMdClose onClick={()=>{setToggle(!toggle)}} className="text-3xl text-white md:hidden block" />
                :
                <IoMdMenu onClick={()=>{setToggle(!toggle)}} className="text-3xl text-white md:hidden block"/>

            }
            <ul className="hidden md:flex text-white gap-10">
                <li className="cursor-pointer hover:underline">
                    Home
                </li>
                <li className="cursor-pointer hover:underline">
                    Company
                </li>
                <li className="cursor-pointer hover:underline">
                    Resources
                </li>
                <li className="cursor-pointer hover:underline">
                    About
                </li>
                <li className="cursor-pointer hover:underline">
                    Contact
                </li>
            </ul>
            {/* Responsive List */}
            <ul className={`duration-300 md:hidden h-screen fixed top-[78px] w-full bg-black  text-white gap-10  ${toggle ? 'left-[0%]':'left-[-100%]'}` }>
                <li   onClick={()=>{setToggle(false)}}  className="p-5 cursor-pointer hover:underline">
                    Home
                </li >
                <li  onClick={()=>{setToggle(false)}}  className="p-5 cursor-pointer hover:underline">
                    Company
                </li>
                <li  onClick={()=>{setToggle(false)}}  className="p-5 cursor-pointer hover:underline">
                    Resources
                </li>
                <li   onClick={()=>{setToggle(false)}} className="p-5 cursor-pointer hover:underline">
                    About
                </li>
                <li  onClick={()=>{setToggle(false)}}  className="p-5 cursor-pointer hover:underline">
                    Contact
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Header