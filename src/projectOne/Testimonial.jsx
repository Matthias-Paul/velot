

import icon1 from "../assets/Ellipse 4.jpg"
import icon2 from "../assets/paul.jpg"
import icon3 from "../assets/ayo.jpg"
import star from "../assets/Frame 55.jpg"
export default function Testimonial() {
  return (
    <>
      <div id="testimonial"   className="font-[poppins] mt-[5rem] mb-[4rem] "> 
        <h1 className=" lg:text-[2.5rem] xl:font-[600]  font-[500] text-center text-[#000000] text-[1.5rem] m-auto  ">Customer Review </h1>
        <div className="grid md:w-[704px] xl:w-[1055px] md:grid-cols-2 pt-[3rem]  m-auto  xl:grid-cols-3 ">

     

        <div className=" rounded-[0.8rem] border-[0.5px] p-[1rem] m-auto  mb-[2rem] h=[20rem] w-[20rem] ">
           <img className=" w-[5.3rem] rounded-[50%] h-[5.3rem] mt-[1rem] inline " src={icon1}  />
           <img className=" w-[7rem] mt-[2.5rem] ml-[0.5rem] h-[1.8rem] inline " src={star} />
             <h1 className="inline ml-[-7rem] text-[1.2rem] font-[600]  text-[#232323]  ">John Doe </h1>
           <p className=" text-[1.1rem] mt-[1.3rem] font-[500]  text-[#000000]  "  >
           Quick and efficient,
           with fantastic attention to detail. Very satisfied with their work👍
           </p>
           <div className="text-[#000000] float-right  mt-[1.8rem] font-[600] mr-[0.8rem]  text=[1rem] " >November 2019</div>
        </div>

        

        <div className=" rounded-[0.8rem] border-[0.5px] p-[1rem] m-auto mb-[2rem] h=[20rem] w-[20rem] ">
           <img className=" w-[5.3rem] rounded-[50%] h-[5.3rem] mt-[1rem] inline " src={icon2}  />
           <img className=" w-[7rem] mt-[2.5rem] ml-[0.5rem] h-[1.8rem] inline " src={star} />
             <h1 className="inline ml-[-7rem] text-[1.2rem] font-[600]  text-[#232323]  ">Matthias Paul </h1>
           <p className=" text-[1.2rem] mt-[1rem] font-[500]  text-[#000000]  "  >
           Reliable service, excellent quality 
           and always on time. Highly recommend!👍
           </p>
           <div className="text-[#000000] float-right  mt-[1.8rem] font-[600] mr-[0.8rem]  text=[1rem] " >November 2019</div>
        </div>



        <div className=" rounded-[0.8rem] border-[0.5px] p-[1rem] m-auto mb-[2rem] h=[20rem] w-[20rem] ">
           <img className=" w-[5.3rem] rounded-[50%] h-[5.3rem] mt-[1rem] inline " src={icon3}  />
           <img className=" w-[7rem] mt-[2.5rem] ml-[0.5rem] h-[1.8rem] inline " src={star} />
             <h1 className="inline ml-[-7rem] text-[1.2rem] font-[600]  text-[#232323]  ">John Lincoln </h1>
           <p className=" text-[1.2rem] mt-[1rem] font-[500]  text-[#000000]  "  >
           Consistent quality, fast delivery, 
            and great customer support. Highly satisfied!👍
           </p>
           <div className="text-[#000000] float-right  mt-[1.8rem] font-[600] mr-[0.8rem]  text=[1rem] " >January 2024</div>
        </div>

        
        </div>

           
      </div>
    </>
  )
}