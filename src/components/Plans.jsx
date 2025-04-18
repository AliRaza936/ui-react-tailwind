
import { FaRegCircleUser } from "react-icons/fa6";
function Plans() {
  return (
    <div className="py-[150px]">
        <div className="max-w-[1240px] mx-auto gap-10 md:grid grid-cols-3">
            <div className="col-span-1  shadow-2xl mx-3 mb-5 flex  items-center flex-col  hover:scale-105 duration-500 h-[500px]">
                <div>
                <FaRegCircleUser className="text-[100px] mt-3 " />
                </div>
                <h1 className="text-2xl font-bold mt-4">Web Development</h1>
                <h1 className="text-3xl font-bold mt-4">$149</h1>
                <p className="mt-4 font-semibold">Lorem ipsum dolor sit amet.</p>
                <p className="mt-4 font-semibold text-center w-64">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus, deserunt.</p>
                <p className="mt-4 font-semibold">Lorem ipsum dolor sit amet.</p>
                <button className="p-3 bg-green-400 w-32 font-semibold hover:bg-black hover:text-white rounded mt-6">Start Trail</button>
            </div>
            <div className="col-span-1 shadow-2xl mx-3 mb-5 flex  items-center flex-col  hover:scale-105 duration-500 bg-gray-100   h-[500px]">
            <div>
                <FaRegCircleUser className="text-[100px] mt-3 " />
                </div>
                <h1 className="text-2xl font-bold mt-4">Digital Marketing</h1>
                <h1 className="text-3xl font-bold mt-4">$149</h1>
                <p className="mt-4 font-semibold">Lorem ipsum dolor sit amet.</p>
                <p className="mt-4 font-semibold text-center w-64">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus, deserunt.</p>
                <p className="mt-4 font-semibold">Lorem ipsum dolor sit amet.</p>
                <button className="p-3 bg-green-400 w-32 font-semibold hover:bg-black hover:text-white rounded mt-6">Start Trail</button>
            </div>
            <div className="col-span-1 flex  items-center flex-col shadow-2xl mx-3 mb-5 hover:scale-105 duration-500 h-[500px]">
            <div>
                <FaRegCircleUser className="text-[100px] mt-3 " />
                </div>
                <h1 className="text-2xl font-bold mt-4">App Development</h1>
                <h1 className="text-3xl font-bold mt-4">$149</h1>
                <p className="mt-4 font-semibold">Lorem ipsum dolor sit amet.</p>
                <p className="mt-4 font-semibold text-center w-64">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus, deserunt.</p>
                <p className="mt-4 font-semibold">Lorem ipsum dolor sit amet.</p>
                <button className="p-3 bg-green-400 w-32 font-semibold hover:bg-black hover:text-white rounded mt-6">Start Trail</button>
            </div>
        </div>
    </div>
  )
}

export default Plans