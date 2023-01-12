import { Link } from "react-router-dom"
import { HashLink } from 'react-router-hash-link'

export default function NavBar () {

    return (
        <div className='flex gap-4 mr-4'>
            <HashLink smooth to="/#about-me">About Me</HashLink>
            <HashLink smooth to="/#skills">Skills</HashLink>
            <HashLink smooth to="/#projects">Projects</HashLink>
            <HashLink smooth to="/#contact">Contact</HashLink>
            <div><a href='https://docs.google.com/document/d/1zuuv9UEogvM07LQaUgZRUY2whRVcs9tikghB7UfY8iU/edit' target='_blank'>Resume</a></div>
        </div>
    )
}