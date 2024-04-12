import { useState,useEffect } from "react";
import { Link } from "react-router-dom";;
function NavBar(){
    const [navActive,setNavActive] = useState(false);

    const toggleNav =()=>{
        setNavActive(!navActive);
    }

    const closeMenu =()=>{
        setNavActive(false);
    }

    useEffect(()=>{
        const handleResize =()=>{
            if(window.innerWidth <= 500){
                closeMenu();
            }
        }
        window.addEventListener("resize",handleResize);

        return ()=>{
            window.removeEventListener("resize",handleResize);
        };
    },[]);

    useEffect(()=>{
        if(window.innerWidth <= 1200){
            closeMenu();
        }
    },[]);
    return (
        <nav className={`navbar ${navActive?"active":""}`}>
            <div>
                <img className="navbar-logo" src="../img/logo.png" alt="logo"/>
            </div>
            <a 
            className={`nav__hamburger${navActive ? 
            "active":""}`} 
            onClick={toggleNav}
            >
                <span className="nav__hamburger__Line"></span>
                <span className="nav__hamburger__Line"></span>
                <span className="nav__hamburger__Line"></span>
            </a>
            <div className={`navbar--items${navActive ?
             "active" : ""}`}>
                <ul>
                    <li>
                        <Link onClick={closeMenu} activeClass="navbar--active--content"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        to="HeroSection"
                        className="navbar--content"
                        >
                            Home</Link>
                    </li>
                    <li>
                        <Link onClick={closeMenu} activeClass="navbar--active--content"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        to="MyPorfolio"
                        className="navbar--content"
                        >
                            Pofolio</Link>
                    </li>
                    <li>
                        <Link onClick={closeMenu} activeClass="navbar--active--content"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        to="Aboutme"
                        className="navbar--content"
                        >
                            About Me</Link>
                    </li>
                </ul>
            </div>
            <Link
            onClick={closeMenu} activeClass="navbar--active--content"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            to="Contact"
            className="btn btn-outline-primary"
            >
            Contact Me</Link>
        </nav>
    )
}
export default NavBar;
