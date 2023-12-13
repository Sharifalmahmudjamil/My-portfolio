import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import { BsGlobe } from 'react-icons/bs';
import { FaPhoneAlt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import Swal from 'sweetalert2';

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
        <div name="contact">
            <h1 className="text-5xl font-medium text-center bg-base-200 ">Contact</h1>
            <div   className="card lg:card-side shadow-xl bg-gray-500 ">
                
                <div className="card-body">
                    <div className="grid grid-cols-1 lg:grid-cols-3 ">

                        <div>
                            <BsGlobe className="text-3xl text-cyan-400 mx-40"></BsGlobe>
                        <h1 className="text-2xl font-medium text-center"></h1>
                        </div>
                        
                        <div>
                            <FaPhoneAlt className="text-3xl text-cyan-400  lg:mx-44 mx-40"></FaPhoneAlt>
                        <h1 className="text-2xl font-medium text-center">+8801685158940</h1>
                        </div>
                       <div>
                        <MdEmail className="text-3xl text-cyan-400  mx-40"></MdEmail>
                       <h1 className="text-2xl font-medium text-center">smjamil111@gmail.com</h1>
                       </div>
                    </div>
                    <div className="divider divider-neutral">Contact</div>

                     <form ref={form} onSubmit={sendEmail} className=''>
            <div className="md:w-1/2">
                <label className="label">
                    <span className="label-text text-xl font-medium">Name :</span>
                </label>
                <label className="input-group">
                    
                    <input type="text" name="user_name" placeholder="" className="input input-bordered w-full rounded bg-gray-500" />
                </label>
                </div>
            <div className="md:w-1/2">
                <label className="label">
                    <span className="label-text text-xl font-medium">Email :</span>
                </label>
                <label className="input-group">
                    
                    <input type="text" name="user_email" placeholder="" className="input input-bordered w-full rounded bg-gray-500" />
                </label>
                </div>
                <h1 className="text-xl font-medium mt-3">Message:</h1>
                <textarea name="message" placeholder="" className="textarea textarea-bordered textarea-lg w-full max-w-xs mt-3 bg-gray-500 text-white rounded" ></textarea>
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