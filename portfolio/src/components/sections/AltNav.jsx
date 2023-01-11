import { useState } from "react"
import PythonIcon from "../SVGs/Python"
import { HashLink } from 'react-router-hash-link'

export default function AltNav () {

    const [navOpen, setNavOpen] = useState(false)

    const toggleNav = () => {
        setNavOpen(!navOpen)
    }

    let dimensions = '20px'
    let linkStyle = 'bg-lit h-10 pt-2 border border-drkgry'

    return (
        <div className="relative cursor-poiner">
            <div className='cursor-poiner border border-white' onClick={toggleNav}><PythonIcon dimensions={dimensions}/></div>
            {navOpen ? 
            <div className="absolute flex flex-col bg-drkgry text-white w-36 right-0">
                <HashLink smooth to="/#about-me" onClick={toggleNav} className={linkStyle}>About Me</HashLink>
                <HashLink smooth to="/#skills" onClick={toggleNav} className={linkStyle}>Skills</HashLink>
                <HashLink smooth to="/#projects" onClick={toggleNav} className={linkStyle}>Projects</HashLink>
                <HashLink smooth to="/#contact" onClick={toggleNav} className={linkStyle}>Contact</HashLink>
            </div>
            :null}
        </div>
    )
}