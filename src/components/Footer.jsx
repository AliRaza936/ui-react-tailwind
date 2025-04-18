import { FaFacebook ,FaInstagramSquare,FaTwitterSquare,FaGithub} from "react-icons/fa";

function Footer() {
  return (
    <div className="md:grid grid-cols-5 gap-2   py-[100px] px-20 bg-[#2699fb]">
        <div className="col-span-2">
            <h1 className="text-2xl font-bold">Dev Project</h1>
            <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non dolorum animi explicabo molestiae ipsam accusantium!</p>
            <div className="grid grid-cols-4 mt-4">
            <FaFacebook  className="text-3xl text-white"/>
            <FaInstagramSquare  className="text-3xl text-white"/>
            <FaTwitterSquare className="text-3xl text-white" />
            <FaGithub className="text-3xl text-white" />
            </div>
        </div>
        <div className="mt-2 text-center md:mt-0" >
            <h2 className="font-bold">Solution</h2>
            <ol>
                <li className="text-white mt-1">Analysis</li>
                <li className="text-white mt-1">Marketing</li>
                <li className="text-white mt-1">Commerce</li>
                <li className="text-white mt-1">insights</li>
                
            </ol>
        </div>
       
        <div className="sm:mt-2 text-center md:mt-0">
            <h2 className="font-bold">Support</h2>
            <ol>
                <li className="text-white mt-1">Pricing</li>
                <li className="text-white mt-1">Documentation</li>
                <li className="text-white mt-1">Guides</li>
                <li className="text-white mt-1">API status</li>
                
            </ol>
        </div>
       
        <div className="sm:mt-2 text-center md:mt-0">
            <h2 className="font-bold">Company</h2>
            <ol>
                <li className="text-white mt-1">About</li>
                <li className="text-white mt-1">Blog</li>
                <li className="text-white mt-1">Jobs</li>
                <li className="text-white mt-1">Press</li>
                <li className="text-white mt-1">Career</li>
                
            </ol>
        </div>
       
        
    </div>
  )
}

export default Footer