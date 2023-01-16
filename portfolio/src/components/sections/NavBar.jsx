import { Link } from "react-router-dom"
import { HashLink } from 'react-router-hash-link'

export default function NavBar () {

    return (
        <div className='flex gap-4 mr-4'>
            <HashLink smooth to="/#about-me">About Me</HashLink>
            <HashLink smooth to="/#skills">Skills</HashLink>
            <HashLink smooth to="/#projects">Projects</HashLink>
            <HashLink smooth to="/#contact">Connect</HashLink>
        </div>
    )
}