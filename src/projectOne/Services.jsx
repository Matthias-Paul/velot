

import icon1 from "../assets/solding.jpg"
import icon2 from "../assets/spanal.jpg"
import background from "../assets/velot-Background.png"
export default function Services() {
  return (
    <>
      <div id="services"   className="font-[poppins] mt-[5rem]"> 
        <h1 className=" lg:text-[2.8rem] xl:font-[600]  font-[500] text-center text-[#000000] text-[2rem] m-auto  ">Our Services </h1>
        <p className="md:font-[400] md:px-[3rem] lg:max-w-[800px] lg:text-[1.4rem] xl:font-[500] font-[300] text-[#232323B8] pb-[4rem] px-[1.3rem] text-[1rem] pt-[2rem] text-center  m-auto "> Discover our top-tier services designed for you. We specialize in operational
            change management and optimizing workflows. </p>
        
        <div style={{backgroundImage:`url(${background})`}}  
        className="grid md:w-[770px] xl:w-[1150px]  md:grid-cols-2  m-auto  xl:grid-cols-3 ">

        <div           className=" rounded-[0.1rem] p-[2rem]  m-auto mb-[2rem] h=[22rem] w-[22rem] shadow-lg border border-[0.5] ">
           <img className=" w-[2rem] h-[2rem] inline " src={icon2} />  <h1 className="inline ml-[0.3rem] text-[1.2rem] font-[600]  text-[#232323]  ">Maintenance And Repair </h1>
           <p className=" text-[0.9rem] mt-[1.3rem] font-[600]  text-[#000000]  "  >Keep your equipment running smoothly with our expert maintenance and
            repair services. Quick fixes, minimal downtime!
           </p>
           <div className="text-[#000000] cursor-pointer underline underline-offset-4  mt-[2.5rem] font-[600]   text=[1rem] " >Read more &#8594;</div>
        </div>

        <div className=" rounded-[0.1rem] pt-[2.2rem] p-[1.8rem] m-auto mb-[2rem] h=[22rem] w-[22rem] shadow-lg border border-[0.5] ">
           <img className=" w-[2rem] h-[2rem] inline " src={icon1} />  <h1 className="inline ml-[0.3rem]  text-[1.1rem] font-[600]  text-[#232323]  ">Welding And Fabrication </h1>
           <p className=" text-[0.9rem] mt-[1.3rem] font-[600]  text-[#000000]  "  >Expert welding and fabrication services for precise and 
            durable metal structures. Custom solutions crafted to meet your specific needs.
           </p>
           <div className="text-[#000000] cursor-pointer underline underline-offset-4  mt-[2.5rem] font-[600]   text=[1rem] " >Read more &#8594;</div>
        </div>

        <div className=" rounded-[0.1rem]  p-[2rem]  m-auto mb-[2rem] h=[22rem] w-[22rem] shadow-lg border border-[0.5] ">
           <img className=" w-[2rem] h-[2rem] inline " src={icon2} />  <h1 className="inline ml-[0.3rem] text-[1.2rem] font-[600]  text-[#232323]  "> Gear Manufacturing </h1>
           <p className=" text-[0.9rem] mt-[1.3rem] font-[600]  text-[#000000]  "  >Keep your equipment running smoothly with our expert maintenance and
            repair services. Quick fixes, minimal downtime!
           </p>
           <div className="text-[#000000] cursor-pointer underline underline-offset-4 mt-[2.5rem] font-[600]   text=[1rem] " >Read more &#8594;</div>
        </div>

        <div className=" rounded-[0.1rem] p-[2rem] m-auto mb-[2rem] h=[22rem] w-[22rem] shadow-lg border border-[0.5] ">
           <img className=" w-[2rem] h-[2rem] inline " src={icon2} />  <h1 className="inline ml-[0.3rem] text-[1.2rem] font-[600]  text-[#232323]  ">Industrial Construction </h1>
           <p className=" text-[0.9rem] mt-[1.3rem] font-[600]  text-[#000000]  "  >Keep your equipment running smoothly with our expert maintenance and
            repair services. Quick fixes, minimal downtime!
           </p>
           <div className="text-[#000000] cursor-pointer underline underline-offset-4  mt-[2.5rem] font-[600]   text=[1rem] " >Read more &#8594;</div>
        </div>

        <div className=" rounded-[0.1rem] p-[2rem] m-auto mb-[2rem] h=[22rem] w-[22rem] shadow-lg border border-[0.5] ">
           <img className=" w-[2rem] h-[2rem] inline " src={icon1} />  <h1 className="inline ml-[0.3rem] text-[1.2rem] font-[600]  text-[#232323]  ">Maintenance And Repair </h1>
           <p className=" text-[0.9rem] mt-[1.3rem] font-[600]  text-[#000000]  "  >Keep your equipment running smoothly with our expert maintenance and
            repair services. Quick fixes, minimal downtime!
           </p>
           <div className="text-[#000000] cursor-pointer underline underline-offset-4 mt-[2.5rem] font-[600]   text=[1rem] " >Read more &#8594;</div>
        </div>

        <div className=" rounded-[0.1rem] p-[2rem] m-auto mb-[2rem] h=[22rem] w-[22rem] shadow-lg border border-[0.5] ">
           <img className=" w-[2rem] h-[2rem] inline " src={icon1} />  <h1 className="inline ml-[0.3rem] text-[1.2rem] font-[600]  text-[#232323]  ">Welding And fabrication </h1>
           <p className=" text-[0.9rem] mt-[1.3rem] font-[600]  text-[#000000]  "  >Keep your equipment running smoothly with our expert maintenance and
            repair services. Quick fixes, minimal downtime!
           </p>
           <div className="text-[#000000] cursor-pointer underline underline-offset-4  mt-[2.5rem] font-[600]   text=[1rem] " >Read more &#8594;</div>
        </div>





    
        </div>
        <div className="flex justify-center "> 
            <button className="text-white lg:w-[9rem] lg:text-[1.1rem] p-[0.4rem] rounded-[0.2rem] text-center  w-[7rem] my-[1rem]  bg-[#232323] text-[1rem] font-[500]  "> View All > </button>
            </div>
           
      </div>
    </>
  )
}
