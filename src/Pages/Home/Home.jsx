import SocialLInks from "../../Components/SocialLInks";
import About from "../About/About";
import Banner from "../Banner/Banner";
import Education from "../Education/Education";
import Navbar from "../Navbar/Navbar";
import Skills from "../Skills/Skills";


const Home = () => {
    return (
        <div name='Home'>
            <Navbar></Navbar>
            <Banner></Banner>
            <SocialLInks></SocialLInks>
            <About></About>
            <Education></Education>
            <Skills></Skills>
        </div>
    );
};

export default Home;