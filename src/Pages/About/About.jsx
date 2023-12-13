/* eslint-disable react/no-unescaped-entities */

import myPic from "../../assets/IMG-1374-01.jpeg"


const About = () => {

    return (
        <div className="">

            <div name='about' className="bg-base-200">
                <h1 className="text-5xl font-medium text-center ">About</h1>
                <div className="lg:flex mt-5">
                    <div className="mt-14 ">
                        <p className="pl-20 mt-20 text-lg font-medium"><span className="text-2xl font-medium text-cyan-300">I'm Sharif Al Mahmud,</span> As a junior Computer Science student, I am immersed in the world of MERN stack development. Passionate about crafting seamless digital experiences , <br /> I aim to leverage my skills in HTML,CSS, MongoDB, Express.js, React.js, and Node.js to contribute to impactful web projects. <br /> Seeking a dynamic role to further develop my full-stack capabilities, and Balancing academia with coding,  I'm on a perpetual quest for knowledge, eager to collaborate and contribute to the evolving landscape of web technologies. Let's connect and build something amazing together. <br /> <br />

                            Passionate about playing cricket and football, finding joy in the thrill of the pitch and the camaraderie of the field.</p>
                    </div>
                    <div className="ml-2 mt-5">
                        <img className="rounded w-[1050px]" src={myPic} alt="" />
                    </div>
                </div>

            </div>
        </div>

    );
};

export default About;