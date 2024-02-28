

import html from '../../../public/images/html-5-2-removebg-preview.png'
import css from '../../../public/images/css-4-removebg-preview.png'
import tailwind from '../../../public/images/Tailwind.webp'
import javascript from '../../../public/images/javascript.png'
import react from '../../../public/images/react js.jpg'
import node from '../../../public/images/node.js.jpg'
import express from '../../../public/images/Express.js.png'
import mongo from '../../../public/images/Mongodb (2).png'

const Skills = () => {
    
    return (
        
        // <div name='skill' className="bg-base-200 overflow-x-hidden">
        //     <h1 className="text-5xl font-medium text-center mt-5 ">My Skills</h1>
        //     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
        //         <div className="card w-52 bg-base-200 shadow-lg shadow-orange-600/100 mx-16">
        //             <figure className="px-10 pt-10">
        //                 <img src="https://i.ibb.co/C0XG9pm/html-5-2-removebg-preview.png" alt="Shoes" className="rounded-xl" />
        //             </figure>
        //         </div>
        //         <div className="card w-52 bg-base-200 shadow-lg shadow-sky-600/100 mx-16">
        //             <figure className="px-10 pt-10">
        //                 <img src="https://i.ibb.co/Lt4cVRS/css-4-removebg-preview.png" alt="Shoes" className="rounded-xl" />
        //             </figure>
        //         </div>
        //         <div className="card w-52 bg-base-200 shadow-lg shadow-indigo-600/100 mx-16">
        //             <figure className="px-10 pt-10">
        //                 <img src="https://i.ibb.co/NmFkZ9g/dxy1c2bvl6odeo52dodk.webp" alt="Shoes" className="rounded-xl" />
        //             </figure>
        //         </div>
        //         <div className="card w-52 bg-base-200 shadow-lg shadow-yellow-600/100 mx-16">
        //             <figure className="px-10 pt-10">
        //                 <img src="https://i.ibb.co/THkcz1h/Javascript-badge-svg.png" alt="Shoes" className="rounded-xl" />
        //             </figure>
        //         </div>
        //         <div className="card w-52 bg-base-200 shadow-lg shadow-sky-300/100 mx-16">
        //             <figure className="px-10 pt-10">
        //                 <img src="https://i.ibb.co/sjzMYj6/1-MF5-V-dkyb-UTcfzw-HFh0-VSw.jpg" alt="Shoes" className="rounded-xl" />
        //             </figure>
        //         </div>
        //         <div className="card w-52 bg-base-200 shadow-lg shadow-green-600/100 mx-16">
        //             <figure className="px-10 pt-10">
        //                 <img src="https://i.ibb.co/XzXZLGQ/1-IWn-UIs-LJV5g-ADU0e-Zic8-YA.jpg" alt="Shoes" className="rounded-xl" />
        //             </figure>
        //         </div>


        //     </div>
        // </div>

        <div>
        <div name='skill' className="bg-slate-950 overflow-x-hidden">
             <h1 className="text-5xl font-medium text-center mt-5 text-teal-400 ">My Skills</h1>
             <span className='w-[280px] hidden md:block h-[5px] bg-teal-500 rounded-sm mb-4 mx-[39%] mt-5'></span>
 
             <h1 className='text-2xl font-bold uppercase text-teal-400 mb-[1rem] lg:mx-10 mt-5'>Frontend</h1>
                 <span className='w-[130px] md:block h-[5px] bg-teal-500 rounded-sm mb-4 lg:mx-10'></span>
 
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-5 mx-auto">
                 <div className="card w-52 bg-slate-800 shadow-lg shadow-orange-600/100 mx-16 hover:row-auto hover:scale-110 transition-all duration-300">
                     <figure className="px-10 pt-10">
                      
                      <img src={html} alt="html" />
                     
                     </figure>
                     <span className='w-[185px]  md:block h-[7px] bg-orange-500 rounded-sm mb-4 mt-5'></span>
                     
                 </div>
              
 
              <div className="card w-52 bg-slate-800 shadow-lg shadow-sky-600/100 mx-16 hover:row-auto hover:scale-110 transition-all duration-300">
                     <figure className="px-10 pt-10">
                     <img src={css} alt="css" />
                     </figure>
                     <span className='w-[160px]  md:block h-[7px] bg-blue-500 rounded-sm mb-4 mt-5'></span>
                 </div>  
             
                 <div className="card w-52 bg-slate-800 shadow-lg shadow-indigo-600/100 mx-16 hover:row-auto hover:scale-110 transition-all duration-300">
                     <figure className="px-10 pt-10">
                     <img src={tailwind} alt="tailwind" />
                     </figure>
                     <span className='w-[200px]  md:block h-[7px] bg-indigo-500 rounded-sm mb-4 mt-5'></span>
                 </div>
                 <div className="card w-52 bg-slate-800 shadow-lg shadow-yellow-600/100 mx-16 hover:row-auto hover:scale-110 transition-all duration-300">
                     <figure className="px-10 pt-10">
                     <img src={javascript} alt="javascript" />
                     </figure>
                     <span className='w-[150px]  md:block h-[7px] bg-yellow-500 rounded-sm mb-4 mt-5'></span>
                 </div>
 
                 <div className="card w-52 bg-slate-800 shadow-lg shadow-sky-300/100 mx-16 hover:row-auto hover:scale-110 transition-all duration-300">
                     <figure className="px-10 pt-10">
                     <img src={react} alt="react" />
                     </figure>
                     <span className='w-[150px]  md:block h-[7px] bg-cyan-400 rounded-sm mb-4 mt-5'></span>
                 </div>
              
             </div>
             {/* backend */}
             <h1 className='text-2xl font-bold uppercase text-teal-400 mb-[1rem] lg:mx-10 mt-6'>Backend</h1>
                 <span className='w-[130px] md:block h-[5px] bg-teal-500 rounded-sm mb-4 lg:mx-10'></span>
                 <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-auto'>
                   {/* Node.js */}
                 <div className="card w-52 bg-slate-800 shadow-lg shadow-green-600/100 mx-16 hover:row-auto hover:scale-110 transition-all duration-300">
                     <figure className="px-10 pt-10">
                     <img src={node} alt="node" />
                     </figure>
                     <span className='w-[130px]  md:block h-[7px] bg-lime-500 rounded-sm mb-4 mt-5'></span>
                 </div>
                 {/* Express.js */}
                 <div className="card w-52 bg-slate-800 shadow-lg shadow-green-600/100 mx-16 hover:row-auto hover:scale-110 transition-all duration-300">
                     <figure className="px-10 pt-10">
                     <img src={express} alt="express" />
                     </figure>
                     <span className='w-[110px]  md:block h-[7px] bg-gray-600 rounded-sm mb-4 mt-5'></span>
                 </div>
                 {/* mongodb */}
                 <div className="card w-52 bg-slate-800 shadow-lg shadow-green-600/100 mx-16 hover:row-auto hover:scale-110 transition-all duration-300">
                     <figure className="px-10 pt-10">
                     <img src={mongo} alt="mongo" />
                     </figure>
                     <span className='w-[160px]  md:block h-[7px] bg-green-700 rounded-sm mb-4 mt-5'></span>
                 </div>
 
                 </div>
         </div>
       
     </div>
        
    );
};

export default Skills;