import { Link } from "react-scroll"

import logo from "../assets/Frame 64.jpg";
import search from "../assets/iconamoon_search-light.jpg";
import menu from "../assets/menu.png"
import close from "../assets/close.png"
import vector from "../assets/Vector.svg"

export default function Header({ isVisible, setIsVisible }) {
  const toggle = () => {
    setIsVisible(!isVisible);
  };

  return (

    <>
   
      <div className="font-poppins fixed z-10  bg-white 
      justify-between xl:py-[2rem] py-[1rem] flex mt-[-4rem]
        3xl:justify-around items-center w-full text-center ">
        
     
        
        <div className=" md:flex hidden w-[102px] h-[30px] ml-[4rem] ">
          <img className="w-full h-full" src={logo} alt="company-logo" />
        </div>

        <div>
          <ul className=" md:flex hidden lg:font-[500] justify-center mr-[3rem] text-[#232323] text-[1rem] font-Poppins items-center text-center">
          <Link to="home" smooth={true} duration={1500} offset={-80} > 
          <li className=" underline underline-offset-4 decoration-2 active:text-blue-600 cursor-pointer">Home</li>
          </Link>  
        <Link  to="services" smooth={true} duration={700} offset={-80}  >  
         <li className="md:pl-[1.2rem] active:text-blue-600 lg:ml-[1.7rem] cursor-pointer">Services <span> <img  className=" inline mb-[0.1rem] ml-[0.1rem] w-[13px] h-[13px] " src={vector}  />  </span></li>   
           </Link> 
           <Link  to="projects" smooth={true} duration={1000} offset={-50}  >  
           <li className="md:pl-[1.2rem] inline  active:text-blue-600 lg:ml-[1.7rem] cursor-pointer"> Projects <span> <img  className=" mb-[0.1rem] inline ml-[0.1rem] w-[13px] h-[13px] " src={vector}  />  </span>  </li>
           </Link>
           <Link  to="contact" smooth={true} duration={1100} offset={-80} > 
             <li className=" active:text-blue-600 md:pl-[1.2rem] lg:ml-[1.7rem] cursor-pointer">Contact Us</li>
            </Link>
           <Link  to="testimonial" smooth={true} duration={1300} offset={-80} >
            <li className="md:pl-[1.2rem]  active:text-blue-600 lg:ml-[1.7rem] cursor-pointer"> Testimonials</li>
            </Link>
        
            <li className="md:pl-[1.2rem] lg:ml-[1.7rem] cursor-pointer">
              <img className="w-[1.9rem] h-[1.9rem]" src={search} alt="search icon" />
            </li>
          </ul>
        </div>
      </div>

       {/* mobile view  */}

      <div className="fixed z-10 font-poppins  w-full flex justify-around  bg-white   ">
      <div className=" md:hidden my-[1rem] flex w-[102px] h-[30px]  ">
         <img className="w-full h-full" src={logo} alt="company-logo" />
       </div>
      {!isVisible? (
        
            <div className=" md:hidden my-[1rem]  flex w-[27px] h-[27px]  " ><img className=" cursor-pointer w-[100%] h-[100%] md:hidden flex " onClick={toggle} src={menu}  /></div>

            ) : ( 
                <div className="md:hidden flex flex-cols-6 justify-end items-center text-center"> 
                     
                <ul className=" text-[#232323] pb-[1.5rem] text-[1rem] font-Poppins text-center">
                <div className=" ml-[2rem] my-[1rem]  w-[27px] h-[27px]"><img className="md:hidden w-[100%] cursor-pointer h-[100%]  flex" onClick={toggle} src={close}  /></div> 
                <Link to="home" smooth={true} duration={2000} offset={-9380} > 
                  <li onClick={toggle}  className="cursor-pointer active:text-blue-600 mt-[0.5rem] ">Home</li>
                  </Link>
                  <Link to="services" smooth={true} duration={700} offset={-240} > 
                   <li onClick={toggle}  className="active:text-blue-600 mt-[0.5rem] cursor-pointer">Services</li>
                   </Link>
                  <Link  to="projects" smooth={true} duration={900} offset={-220}  > 
                    <li onClick={toggle}   className="active:text-blue-600 mt-[0.5rem] cursor-pointer">Projects</li>
                  </Link>
                  <Link  to="contact" smooth={true} duration={1000} offset={-360} > 
           <li onClick={toggle}  className=" active:text-blue-600 mt-[0.5rem] cursor-pointer">Contact Us</li>
           </Link>
          <Link  to="testimonial" smooth={true} duration={1200} offset={-240}> 
          <li onClick={toggle}   className=" active:text-blue-600 mt-[0.5rem] cursor-pointer">Testimonials</li>
          </Link>
       
          </ul>
         
               </div>
               
            )}
    

      </div>
   
    </>
  );
}
