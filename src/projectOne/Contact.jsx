import background from "../assets/Rectangle 10.jpg"

export default function Contact() {
  return (
    <>
      <div id="contact"
      style={{backgroundImage:`url(${background})`}}
       className="w-screen bg-cover pb-[9rem] font-[poppins]  ">
        <h1 className="font-[500] lg:text-[2.8rem] lg:font-[600] text-center text-white text-[2rem] pt-[5rem] " > Make An Enquiry </h1>
      
        <form className="bg-white pb-[2rem] m-auto md:w-[400px] lg:w-[450px] xl:w-[580px] w-[340px] mt-[5rem] p-[2rem] rounded-[0.1rem] ">
        <p className="text-[1rem] m-auto md:text-[1.3rem] mb-[1.5rem] lg:text-[1.2rem]  font-[400] text-[#232323] text-center lg:max-w-[19.5rem] "> Fill all information details to consult with us to get services from us  </p>
 
        <div className=" lg:grid lg:grid-cols-2 gap-4 " >
         <div className="pt-[1rem]  lg:inline  ">
         <label className="text-[1rem] lg:text-[1.3rem] lg:font-[500] font-[400] " >First Name</label>
         <input className=" rounded-[0.5rem] border-[0.5px] w-[100%] bg-[#D9D9D9A3] p-[0.6rem] outline-none     " type="text" required  />
         </div>
        
         <div className="pt-[1rem]  lg:inline  " >
         <label className="text-[1rem] lg:text-[1.3rem] lg:font-[500] font-[400] " >Second Name</label>
         <input className=" rounded-[0.5rem] border-[0.5px] w-[100%] bg-[#D9D9D9A3] p-[0.6rem] outline-none     " type="text" required  />
         </div>

        </div>
         <div className="pt-[1rem]   ">
         <label className="text-[1rem] lg:text-[1.3rem] lg:font-[500] font-[400] " >What is your inquiry about</label>
         <textarea className=" rounded-[0.5rem] h-[6rem] border-[0.5px] w-[100%] bg-[#D9D9D9A3] p-[0.4rem] outline-none     " type="text" required rows="2" />
         </div>

         <div className="pt-[1rem]   ">
         <label className="text-[1rem] lg:text-[1.3rem] lg:font-[500] font-[400] " >Ask question from us(optional)</label>
         <textarea className=" rounded-[0.5rem] border-[0.5px] w-[100%] bg-[#D9D9D9A3] p-[0.4rem] outline-none     " type="text" rows="4"   />
         </div>
            <div className="flex justify-center "> 
            <button className="text-white lg:w-[9rem] lg:text-[1.1rem] p-[0.4rem] rounded-[0.2rem] text-center  w-[7rem] mt-[1.9rem] my-[1rem]  bg-[#232323] text-[1rem] font-[500]  "> Submit </button>
            </div>
        </form>


      </div>
    </>
  )
}
