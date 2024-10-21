import image from "../assets/Rectangle 4.png"
import background from "../assets/Frame 18.png"
export default function Hero({isVisible}) {
  return (
    <>
      {
        isVisible?(
          <div className="pt-[6rem] block w-full">  </div>
        ):("")
      }

      <div id="home" className=" md:flex w-screen   md:gap-[1%]  mt-[4rem] font-poppins  h-full hidden flex-cols-2 justify-between 2xl:gap-[13%] 2xl:justify-center gap-[10%] ">
        <div className="ml-[4rem] "> 
        <h3 className="mt-[8rem] text-[1rem] p-[0.6rem] text-center w-[22rem] text-white font-[700] bg-[#232323] ">WELCOME TO VELOT FACTORY</h3>
        <h1 className="text-[3.25rem] lg:text-[2.5rem] md:text-[1.9rem] font-[600] text-[#232323] "> High-Performance <br/> Engineering For All Your <br/> Mechanical Needs </h1>
        <p className="md:w-[23rem] text-[1rem] text-[#000000] w-[30.1rem] font-[500] mt-[2rem] "> At Velot, we deliver top-tier engineering solutions for all your mechanical needs. Trust our expertise 
            and commitment to quality for exception results in every project.  </p>
          <button className="text-[1rem] mt-[2rem] font-[500] bg-[#232323] text-white p-[0.5rem] w-[8.5rem] "> Read More  &#62; </button>
        </div>
      

   <div className=" md:flex hidden w-[32.3rem]  h-[56rem] mr-0  ">  <img className="w-[100%] h-[100%] object-cover " src ={image}  /> </div>   

 
      </div>


      

     



<div style={{background:`url(${background})`}} className=" w-full bg-cover " >

      <div className=" m-auto  md:max-w-[750px] xl:max-w-[1250px] lg:max-w-[1100px] hidden md:grid grid-cols-2 lg:grid-cols-3   justify-around pb-[3rem] pt-[1rem]  " > 

<div className="text-white pt-[2rem]  m-auto w-[80%]">
  <h2 className="inline font-[600] text-[1.75] "  >01</h2>
  <h2 className="inline ml-[20%] font-[600]  text-[1.75] ">Quality Materials</h2>
  <p className= "mt-[2.5rem] pr-[2rem]  text-[1rem] " >We ensure your home&#39;s solid structure by selecting and using the best
    
   construction materials, known for their superior properties and durability.</p>
   <div className= " border-r-[0.1rem] mt-[-10rem]  text-white h-[10rem]" ></div>
</div>

<div className="text-white pt-[2rem]  m-auto w-[80%] ">
  <h2 className="inline font-[600] text-[1.75] "  >02</h2>
  <h2 className="inline ml-[20%] font-[600]  text-[1.75] ">Experienced Team</h2>
  <p className= "mt-[2.5rem] pr-[2rem]  text-[1rem] " >
    With over 15 years of experience, we partner with owners and design professionals
    to build high-quality projects. Our company understand the importance of collaboration 
    
    </p>
   <div className= "border-r-[0.1rem]  mt-[-12rem]  text-white h-[10rem]" ></div>
</div>

<div className="text-white pt-[2rem]  m-auto w-[80%] ">
  <h2 className="inline font-[600] text-[1.75] "  >03</h2>
  <h2 className="inline ml-[20%] font-[600]  text-[1.75] ">Unique Technologies</h2>
  <p className= "mt-[2.5rem]  text-[1rem] " >
  Our innovative technology transform Velot Factory, offering unparallel
  efficiency, groundbreaking solutions, and effortless integration for optimal performance



  </p>
</div>



</div>

</div>









  {/* mobile view */}
  <div   className=" bg-cover md:hidden flex   font-poppins w-screen h-screen justify-center  items-center text-center ">
        <div className=" px-[2rem]  "> 
        <h3 className=" m-auto mb-[1rem] px-[0.6rem] text-[0.9rem] p-[0.6rem] flex justify-center items-center text-center  text-white font-[400] bg-[#232323] " >WELCOME TO VELOT FACTORY</h3>
        <h1 className="text-[1.8rem] font-[400] text-[#232323] "> High-Performance  Engineering For All Your Mechanical Needs </h1>
        <p className=" text-[0.9rem] text-[#000000] m-auto pt-[1.3rem] "> At Velot, we deliver top-tier engineering solutions for all your mechanical needs. Trust our expertise 
            and commitment to quality for exception results in every project.  </p>
          <button className="text-[0.9rem] mt-[2rem] font-[500] bg-[#232323] text-white p-[0.4rem] w-[8rem] "> Read More  &#62; </button>
        </div>
      

  


      </div>


      <div style={{background:`url(${background})`}} className=" bg-cover block md:hidden pb-[3rem]  pt-[1rem]  " > 

      <div className="text-white pt-[2rem] sm:w-[55%] m-auto w-[70%]">
        <h2 className="inline font-[600] text-[1.75] "  >01</h2>
        <h2 className="inline ml-[20%] font-[600]  text-[1.75] ">Quality Materials</h2>
        <p className= "mt-[2.5rem]  text-[1rem] " >We ensure your home&#39;s solid structure by selecting and using the best
          
         construction materials, known for their superior properties and durability.</p>
         <div className= " border-b-[0.1rem] mt-[-8rem]  text-white h-[10rem]" ></div>
      </div>

      <div className="text-white pt-[2rem] sm:w-[55%] m-auto w-[70%] ">
        <h2 className="inline font-[600] text-[1.75] "  >02</h2>
        <h2 className="inline ml-[20%] font-[600]  text-[1.75] ">Experienced Team</h2>
        <p className= "mt-[2.5rem]  text-[1rem] " >
          With over 15 years of experience, we partner with owners and design professionals
          to build high-quality projects.
          and excellence in every endeavor.
          </p>
         <div className= "border-b-[0.1rem] mt-[-8rem]  text-white h-[10rem]" ></div>
      </div>
      
      <div className="text-white pt-[2rem] sm:w-[55%] m-auto w-[70%] ">
        <h2 className="inline font-[600] text-[1.75] "  >03</h2>
        <h2 className="inline ml-[20%] font-[600]  text-[1.75] ">Unique Technologies</h2>
        <p className= "mt-[2.5rem]  text-[1rem] " >
        Our innovative technology transform Velot Factory, offering unparallel
        efficiency, groundbreaking solutions, and effortless integration for optimal performance



        </p>
         <div className= "border-b-[0.1rem] mt-[-8rem]  text-white h-[10rem]" ></div>
      </div>



      </div>



    </>
  )
}
