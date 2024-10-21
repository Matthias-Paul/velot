import logo from "../assets/Frame 64.jpg"
import icon1 from "../assets/icon1.svg"
import icon2 from "../assets/icon2.svg"
import icon3 from "../assets/icon3.svg"
import icon4 from "../assets/icon4.svg"


export default function Footer() {
  return (
    <> 
    
      <div className=" grid pb-[5rem]  sm:p-[4rem] xl:p-[6rem] justify-around md:grid-cols-3 w-full h-full  p-[2rem] font-[poppins] text-[#FFFFFF] bg-[#232323]  " >
        <div className="    "> 
            <img className=" bg-cover bg-white w-[125px] h-[40px] lg:w-[175] lg:h-[40px]  " src={logo} />
            <p className="text-[0.9rem] lg:text-[1.2rem] mt-[4rem] font-[300]  " > The economic impact of machinery 
            manufacturing  permeates the entire
            economy. These industries are
            crucial and highly significant. </p>
        </div>
          
        
        <div className=" md:ml-[2rem]   lg:flex justify-center mt-[3rem] "> 
        <ul>
                <li className=" text-[1.4rem] mb-[1rem] font-[500] lg:text-[1.7rem] lg:font-[600] " >Services</li>
                <li className=" lg:text-[1.1rem] text-[0.9rem] mb-[0.4rem] font-[300] " >Maintenance and repair</li>
                <li className="lg:text-[1.1rem] text-[0.9rem] mb-[0.4rem] font-[300] " > Welding and fabrication </li>
                <li className=" lg:text-[1.1rem] text-[0.9rem] mb-[0.4rem] font-[300] "> Gear manufacturing  </li>
                <li className=" text-[0.9rem] mb-[0.4rem] font-[300] lg:text-[1.1rem] ">Vehicle construction</li>
            </ul>
        </div>

        <div className="  lg:flex justify-center   ">
        <ul>
                <li className=" text-[1.4rem] mt-[3rem] mb-[1rem] lg:text-[1.7rem] lg:font-[600] font-[500] ">Contact Us</li>
                <li  className=" lg:text-[1.1rem] text-[0.9rem] mb-[0.4rem] font-[300] inline "> <img className=" cursor-pointer  bg-[#232323] h-[1.3rem] w-[1.3rem] inline mr-[0.4rem] " src={icon1}  /> 5 opera, avenue road LV </li>
                <li className=" text-[0.9rem] mt-[0.6rem] mb-[0.4rem] lg:text-[1.1rem] font-[300] "> <img className=" cursor-pointer bg-[#232323] h-[1.3rem] w-[1.3rem] inline mr-[0.4rem] " src={icon2}  />  +9081234447 </li>
                <li className=" text-[1.2rem] mb-[0.4rem] lg:text-[1.7rem] lg:font-[600] mt-[1.5rem] font-[500] "> Follow Us On:  </li>
                <li className=" text-[1rem] mb-[0.4rem] font-[400] "> <img className=" cursor-pointer bg-[#232323] h-[1.3rem] w-[1.3rem] inline mr-[0.4rem]" src={icon3}  /> <img className=" cursor-pointer bg-[#232323] h-[1.3rem] w-[1.3rem] inline mr-[0.4rem]" src={icon4}  />   </li>
            </ul> 
         </div>
       

      </div>
    </>
  )
}
