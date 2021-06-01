import React ,{useState , useEffect}from 'react'
import { NavLink} from 'react-router-dom'
import "./navmenu.css"
import { MdClose, MdMenu } from "react-icons/md";




export default function NavMenu() {

    const [clicked , setClicked] = useState(false)
    const [notClicked , setNotClicked] = useState(false)



    function getWindowDimensions() {
        const { innerWidth: width, innerHeight: height } = window;
        return {
            width,
            height
        };
        }
    
     const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

      useEffect(() => {
            function handleResize() {
            setWindowDimensions(getWindowDimensions());
            }

            window.addEventListener('resize', handleResize);
            return () => window.removeEventListener('resize', handleResize);
        }, []);

        console.log(windowDimensions.width)
    


    return (
        <div className="navbar">
            {windowDimensions.width > 768 ?
               <ul className="navitems">
                    <li onClick={() => { setClicked(false)
                setNotClicked(false)}}>
                    <NavLink to="/" exact>
                    Home
                    </NavLink>
                </li>
                <li onClick={() => { setClicked(false)
                setNotClicked(false)}}>  
                    <NavLink to="/about">
                    About
                    </NavLink>
                </li>
                <li onClick={() => { setClicked(false)
                setNotClicked(false)}}>
                    <NavLink to="/projects">
                    Projects
                    </NavLink>
                </li>
                <li onClick={() => { setClicked(false)
                setNotClicked(false)}}>
                    <NavLink to="/contact">
                      Contact
                    </NavLink>
                </li>

               </ul>
            :
            <>
            {!notClicked && 
            <div className="mobile-menu-icon">
            <MdMenu onClick={() => {
                setClicked(true)
                setNotClicked(true)
            }}/>
            </div>
            }
              {clicked && 
            <ul className="navitems">
          
            <div className="closeNavIcon">
            <MdClose onClick={() =>{ 
                 setClicked(false)
                setNotClicked(false)}}/>
            </div>
            
                <li onClick={() => { setClicked(false)
                setNotClicked(false)}}>
                    <NavLink to="/" exact>
                    Home
                    </NavLink>
                </li>
                <li onClick={() => { setClicked(false)
                setNotClicked(false)}}>  
                    <NavLink to="/about">
                    About
                    </NavLink>
                </li>
                <li onClick={() => { setClicked(false)
                setNotClicked(false)}}>
                    <NavLink to="/projects">
                    Projects
                    </NavLink>
                </li>
                <li onClick={() => { setClicked(false)
                setNotClicked(false)}}>
                    <NavLink to="/contact">
                      Contact
                    </NavLink>
                </li>
            </ul>
          
            }
              </>}
        </div>
    )
}
