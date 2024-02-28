import { Link } from "react-scroll";



const Navbar = () => {

const links= [
    {
        id:1,
        link:'Home'
    },
    {
        id:2,
        link:'about'
    },
    {
        id:3,
        link:'skill'
    },
    {
        id:4,
        link:'education'
    },
    {
        id:5,
        link:'projects'
    },
    {
        id:6,
        link:'contact'
    },
]
    return (
        <div>
            <div className="navbar fixed z-[10000] bg-slate-950 shadow-md">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 gap-5">
                          {links.map(({id,link})=> (
                            <li key={id}  className=" cursor-pointer capitalize font-semibold text-gray-400 hover:scale-105 duration-200 hover:text-cyan-300">
                                 <button className="btn btn-outline btn-sm rounded hover:text-cyan-300"> <Link to={link} smooth duration={500} >{link}</Link></button>
                                </li>
                          ))}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-2xl font-signature text-cyan-300">Sharif</a>
                    <h1 className="text-xl font-medium">Portfolio</h1>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-5">
                    {links.map(({id,link})=> (
                            <li key={id}  className=" cursor-pointer capitalize font-semibold text-gray-400 hover:scale-105 duration-200 hover:text-cyan-300">
                               <button className="btn btn-outline btn-sm rounded hover:text-cyan-300"> <Link to={link} smooth duration={500} >{link}</Link></button>
                                </li>
                          ))}
                    </ul>
                </div>
              
            </div>

        </div>
    );
};

export default Navbar;