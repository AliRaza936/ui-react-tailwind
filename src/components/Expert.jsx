import laptop from '../assets/images (2).jpeg'

function Expert() {
  return (
    <div className="max-w-[1240px] mt-5 mx-auto  py-10 md:h-[300px] md:grid grid-cols-2">
      
        <div className="col-span-1  width-[80%] text-center">
            <img src={laptop} alt="" className='inline'/>
        </div>
        <div className="col-span-1 p-2 text-justify ">
            <div className='text-l mb-2 font-bold text-green-600'>
                LEARN FROM EXPERTS
            </div>
            <div className='mb-2'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, dolorem! Nulla, inventore quo a eius dignissimos debitis tempora laudantium illum in tenetur facilis voluptatem fugiat non, dolore aliquam sunt magni!
            </div>
            <button className="p-2 bg-black text-white mt-2 w-[180px] rounded">Get Started</button>

            
        </div>
    </div>
  )
}

export default Expert