import GitHubIcon from "../SVGs/GitHib"
import LinkedInIcon from "../SVGs/LinkedIn"
import { IoIosMail, IoIosDocument } from "react-icons/io";

export default function Contact () {

    let dimensions= '40px'

    return (
        <div>
            <div id='contact' className="h-6 md:h-10"></div>
            <div className="mx-auto bg-c2 sm:w-full md:w-4/5 mt-12 border-b-4 border-c6">
            <div className="font-serif bg-c5 text-2xl p-4 mb-6">Connect</div>
                <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 m-8 text-black">
                    <div className="flex-col mb-6">
                        <a href="https://www.linkedin.com/in/robert-bl/" target='_blank'>
                            <LinkedInIcon dimensions={dimensions} className='mx-auto'/>
                        <div>linkedin.com/in/robert-bl</div>
                        </a>
                    </div>
                    <div className="flex-col mb-6">
                        <a href="https://github.com/robert-bl" target='_blank'>
                            <GitHubIcon dimensions={dimensions}/>
                        <div>github.com/robert-bl</div>
                        </a>
                    </div>
                    <div className="flex-col mb-6">
                        <a href="mailto:buskirklechner@gmail.com">
                            <IoIosMail size={40}/>
                        <div>buskirklechner@gmail.com</div>
                        </a>
                    </div>
                    <div className="flex-col mb-6">
                        <a href="https://docs.google.com/document/d/1zuuv9UEogvM07LQaUgZRUY2whRVcs9tikghB7UfY8iU/edit?usp=sharing" target='_blank'>
                            <IoIosDocument size={40}/>
                        <div>Resume</div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}