import { ReactTyped } from "react-typed";
function Banner() {
  return (
    <div className="bg-[#2699fb] w-full py-[50px]">
        <div className="max-w-[1240px] p-[100px] text-center font-bold mx-auto">
            <div className="text-l md:text-3xl  md:p-[13px]">
            Learn with us
            </div>
            <div className="text-3xl md:text-6xl  md:p-[13px] text-white">
            Grow with us
            </div>
            <div className="text-l md:text-4xl  md:p-[13px] text-white">
                Learn
            <ReactTyped
            className="pl-3"
      strings={[
        "Web Development",
        "Digital Marketing",
        "Ethical Hacking",
      ]}
      typeSpeed={100}
      backSpeed={50}
      loop={true}
    /> 
            </div>
            <button className="p-2 bg-black text-white mt-2 w-[180px] rounded">Get Started</button>
        </div>
    </div>
  )
}

export default Banner