import emailjs from '@emailjs/browser';
import { useRef } from 'react';
// import { BsGlobe } from 'react-icons/bs';
// import { FaPhoneAlt } from 'react-icons/fa';
// import { MdEmail } from 'react-icons/md';
import Swal from 'sweetalert2';
import SocialLInks from '../../Components/SocialLInks';

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm(
            'service_5l4zyfm', 
            'template_byy7zbo', 
            form.current, 
            'lVY-X-bjgMnF91uUf')
          .then((result) => {
              console.log(result.text);
              if(result.text){
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your Message Send Successfully",
                    showConfirmButton: false,
                    timer: 1500
                  });
              }
          }, (error) => {
              console.log(error.text);
          });
      };
    return (
       
        <div name='contact' className='bg-slate-950'>
        <h1 className='text-center text-3xl font-medium text-teal-300 '>Contact</h1>
        <span className='w-[280px] hidden md:block h-[5px] bg-teal-500 rounded-sm mb-4 mx-[39%] mt-3'></span>
        <div className='grid grid-cols-1 md:grid-cols-2'>
            <div>
                
                <SocialLInks></SocialLInks>
            </div>
            <div>
            <form ref={form} onSubmit={sendEmail} className=''>
            <div className="md:w-[60%]">
                <label className="label">
                    <span className="label-text text-xl font-medium text-teal-200">Name :</span>
                </label>
                <label className="input-group">
                    
                    <input type="text" name="user_name" placeholder="" className="input input-bordered w-full rounded bg-cyan-200" />
                </label>
                </div>
            <div className="md:w-[60%]">
                <label className="label">
                    <span className="label-text text-xl font-medium text-teal-200">Email :</span>
                </label>
                <label className="input-group">
                    
                    <input type="text" name="user_email" placeholder="" className="input input-bordered w-full rounded bg-cyan-200" />
                </label>
                </div>
                <h1 className="text-xl font-medium mt-3 text-teal-200">Message:</h1>
                <textarea name="message" placeholder="" className="textarea textarea-bordered textarea-lg w-full max-w-xs mt-3 bg-cyan-200 text-black rounded" ></textarea>
                <div>
                <button className='btn btn-outline btn-sm bg-cyan-300 text-black rounded'><input type="submit" value="Send" /></button>
                </div>
            </form> 
            </div>
      
        </div>
    </div>
    );
};

export default Contact;