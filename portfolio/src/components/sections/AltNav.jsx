import { useState } from "react"
import { HashLink } from 'react-router-hash-link'
import { TiThMenu } from "react-icons/ti";

export default function AltNav () {

    const [navOpen, setNavOpen] = useState(false)

    const toggleNav = () => {
        setNavOpen(!navOpen)
    }

    let dimensions = '20px'
    let linkStyle = 'bg-c2 h-10 pt-2 pl-2 border border-c5 text-c5'

    return (
        <div className="relative cursor-poiner">
            <div className='cursor-poiner' onClick={toggleNav}>
                <TiThMenu size={25}/>
            </div>
            {navOpen ? 
            <div className="absolute flex flex-col bg-c5 text-white w-36 right-0 top-8 border border-c5">
                <HashLink smooth to="/#about-me" onClick={toggleNav} className={linkStyle}>About Me</HashLink>
                <HashLink smooth to="/#skills" onClick={toggleNav} className={linkStyle}>Skills</HashLink>
                <HashLink smooth to="/#projects" onClick={toggleNav} className={linkStyle}>Projects</HashLink>
                <HashLink smooth to="/#contact" onClick={toggleNav} className={linkStyle}>Connect</HashLink>
            </div>
            :null}
        </div>
    )
}