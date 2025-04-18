

function LearnSkill() {
  return (
    <div className="bg-[#2699fb]  p-4">
        <div className="max-w-[1240px] md:flex mx-auto justify-between p-[50px]">
            <div>
                <h2 className="text-2xl md:text-4xl text-white  font-bold">
                    Want to learn latest I.T skills?
                </h2>
                <span className="text-white text-l">Sign up to our newsletter and stay up to date</span>
                </div> 
                <div >
                    <input className=" p-2 text-gray-500 mt-3  me-4 rounded" placeholder="Email " type="email" />
            <button className="p-2 bg-black text-white mt-2 mb-4  rounded">Get Started</button>
            <br />
            <span className="text-white ">We care about the protection of your data. Read our <br /><p className="text-blue-950"> Privacy policy</p></span>
                </div>

        </div>
    </div>
  )
}

export default LearnSkill