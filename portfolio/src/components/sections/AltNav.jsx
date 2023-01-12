import { useState } from "react"
import { HashLink } from 'react-router-hash-link'
import { TiThMenu } from "react-icons/ti";

export default function AltNav () {

    const [navOpen, setNavOpen] = useState(false)

    const toggleNav = () => {
        setNavOpen(!navOpen)
    }

    let dimensions = '20px'
    let linkStyle = 'bg-lit h-10 pt-2 pl-2 border border-drkgry'

    return (
        <div className="relative cursor-poiner">
            <div className='cursor-poiner' onClick={toggleNav}>
                <TiThMenu size={20}/>
            </div>
            {navOpen ? 
            <div className="absolute flex flex-col bg-drkgry text-white w-36 right-0 border border-drkgry">
                <HashLink smooth to="/#about-me" onClick={toggleNav} className={linkStyle}>About Me</HashLink>
                <HashLink smooth to="/#skills" onClick={toggleNav} className={linkStyle}>Skills</HashLink>
                <HashLink smooth to="/#projects" onClick={toggleNav} className={linkStyle}>Projects</HashLink>
                <HashLink smooth to="/#contact" onClick={toggleNav} className={linkStyle}>Contact</HashLink>
                <div className={linkStyle}><a href='https://docs.google.com/document/d/1zuuv9UEogvM07LQaUgZRUY2whRVcs9tikghB7UfY8iU/edit' target='_blank'>Resume</a></div>
            </div>
            :null}
        </div>
    )
}