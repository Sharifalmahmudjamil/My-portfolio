import { Helmet } from "react-helmet-async";
// import SocialLInks from "../../Components/SocialLInks";
import About from "../About/About";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import Education from "../Education/Education";
import MyProjects from "../MyProjects/MyProjects";
import Navbar from "../Navbar/Navbar";
import Skills from "../Skills/Skills";
import Footer from "../Footer/Footer";


const Home = () => {
    return (
        <div name='Home'>
             <Helmet>
            <title>Sharif Portfolio||Home</title>
          </Helmet>
            <Navbar></Navbar>
            <Banner></Banner>
           
            <About></About>
            <Education></Education>
            <Skills></Skills>
            <MyProjects></MyProjects>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;