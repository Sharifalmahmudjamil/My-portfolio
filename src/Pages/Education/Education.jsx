import { FaUserGraduate } from "react-icons/fa";

const Education = () => {
    return (
        <div className="bg-base-200">
            <h1 className="text-5xl font-medium text-center ">Education</h1>

            <ul className="timeline timeline-vertical">
                <li>
                    {/* <div className="timeline-start timeline-box">First Macintosh computer</div> */}
                    <div className="timeline-middle text-2xl">
                       <FaUserGraduate></FaUserGraduate>
                    </div>
                    <hr className="bg-primary" />
                </li>
                <li>
                    <hr className="bg-primary" />
                  
                </li>
                <li>
                    <hr className="bg-primary" />
                   
                    <div className="timeline-start timeline-box">B.S.C IN Computer Science & Engineering <p><small>Bangladesh Institute Of Science & Technology</small></p>
                    <p className="text-center">(2019-2024)</p>
                    </div>
                    
                    <div className="timeline-middle">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-primary"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                    </div>
                    <hr />
                </li>
                <li>
                    <hr />
                    <div className="timeline-middle">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                    </div>
                    <div className="timeline-end timeline-box">Higher Secondary Certificate (HSC)
                    <p className="text-center">Dhaka City College</p>
                    <p className="text-center">(2016-2018)</p>
                    </div>
                    <hr />
                </li>
                <li>
                    <hr />
                   
                   
                </li>
            </ul>
        </div>
    );
};

export default Education;