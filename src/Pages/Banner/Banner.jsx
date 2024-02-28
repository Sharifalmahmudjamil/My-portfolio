/* eslint-disable react/no-unescaped-entities */


import { useEffect } from "react";
import myImage from "../../assets/IMG-0968-removebg-preview.png"
import { IoArrowForwardOutline } from "react-icons/io5";
import Aos from "aos";
import TextEffect from "../TextEffect/TextEffect";






const Banner = () => {
  useEffect(()=>{
    Aos.init()
  },[])
  return (

    <div>
      
      <div data-aos="fade-up-left">
      <div className="hero min-h-screen bg-slate-950">
        
        <div className="hero-content flex-col lg:flex-row-reverse">
        
          <img src={myImage} className="lg:w-2/4 lg:h-2/4 shadow-lg shadow-cyan-500/50" />
          <div>
            
            <h1 className='text-[35px] md:text-[50px] text-white font-bold'>
            HI, I'M <span className='text-cyan-400'>Sharif Al Mahmud</span> </h1>
            <TextEffect></TextEffect>
            <p className='lg:mt-[2rem] text-[20px] text-[#ffffff92]'>A Fresher Developer's Journey Through Code and Creativity.</p>
            
            <button className="btn btn-outline hover:bg-teal-400 rounded mt-3">
              <a href="../../../public/Sharif Al Mahmud Resume.pdf" download={true}
                target="blank">DOWNLOAD RESUME</a> <span className="hover:rotate-90 duration-200 text-2xl ">
                <IoArrowForwardOutline />
              </span>
            </button>
          </div>
        </div>
      </div>
      </div>
    </div>

  );
};

export default Banner;

