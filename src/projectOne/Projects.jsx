import projectOne from "../assets/Rectangle 7.jpg"
import projectTwo from "../assets/Rectangle 8.jpg"
import projectThree from "../assets/Rectangle 9.jpg"
import icon from "../assets/Frame 35.jpg"
export default function Projects() {
  return (
    <>
   
      <div className="  py-[4rem] mb-[3rem] mt-[4rem] bg-[#F8F8F3] font-[poppins]" id="projects">
        <h1 className="2xl:text-[4rem] lg:text-[3rem] lg:font-[600] text-[1.5rem] mb-[2.5rem] m-auto text-center font-[400] ">Our Recent Projects</h1>
     <div  className=" md:grid-cols-2 xl:grid-cols-3 md:max-w-[720px] xl:max-w-[1100px]  m-auto bg-[#F8F8F3] grid gap-[2rem] justify-around  place-items-center  ">
    <div className=" xl:mt-[7rem]  w-[350px] h-[460px] relative " > <p className=" p-[0.8rem] bg-[#0000008C] pl-[1rem] mt-[23.5rem] text-white text-[1.2rem] absolute underline  ">Comprehensive Vehicle Repair and 
    Maintenance </p> <img className=" w-[100%] h-[100%] rounded-[0.2rem] " src={projectOne}  /> </div> 
    <div className=" w-[350px] h-[460px] relative "> <p className=" p-[0.8rem] bg-[#0000008C] pl-[1rem] mt-[23.5rem] text-white text-[1.2rem] absolute underline  ">Comprehensive Vehicle Repair and 
    Maintenance </p> <img className=" rounded-[0.2rem] w-[100%] h-[100%]  " src={projectTwo}   /> </div> 
    <div className=" xl:mt-[7rem] w-[350px] h-[460px] relative "> <p className=" p-[0.8rem] bg-[#0000008C] pl-[1rem] mt-[23.5rem] text-white text-[1.2rem] absolute underline  ">Comprehensive Vehicle Repair and 
    Maintenance </p><img className=" rounded-[0.2rem] w-[100%] h-[100%] " src={projectThree}   /> </div> 

     </div>

     <div className="hidden xl:flex m-auto  mb-[0.5rem] mt-[5rem] w-[80px] h-[22px] justify-center "> 
            <img className=" w-[100%] h-[100%] " src={icon}  />
            </div>
      </div>
   
    </>
  )
}
