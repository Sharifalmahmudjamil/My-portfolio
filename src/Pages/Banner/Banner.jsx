import myImage from "../../assets/IMG-0968-removebg-preview.png"
import { IoArrowForwardOutline } from "react-icons/io5";

const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src={myImage} className="lg:w-2/4 lg:h-2/4 shadow-lg shadow-cyan-500/50" />
    <div>
      <h1 className="text-5xl font-bold">Sharif Al Mahmud</h1>
      <p className="py-6 text-4xl">I am a <span className="text-cyan-400 text-4xl">Junior FrontEnd Developer</span></p>
      <button className="btn btn-outline hover:bg-cyan-500 rounded">Hire Me <span className="hover:rotate-90 duration-200 text-2xl ">
      <IoArrowForwardOutline />
         </span> 
         </button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;