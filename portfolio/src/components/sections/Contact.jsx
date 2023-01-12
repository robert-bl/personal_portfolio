import GitHubIcon from "../SVGs/GitHib"
import LinkedInIcon from "../SVGs/LinkedIn"
import { IoIosMail } from "react-icons/io";

export default function Contact () {

    let dimensions= '30px'

    return (
        <div>
            <div id='contact' className="h-16"></div>
            <div className="mx-auto bg-lit sm:w-full md:w-4/5 mt-12 p-4 border-t-4 border-b-4 border-medgry">
                <div className="font-serif text-2xl mb-6">Connect</div>
                <div className="flex-col justify-around m-8">
                    <div className="flex-col">
                        <a href="https://www.linkedin.com/in/robert-buskirk-lechner/" target='_blank'>
                            <LinkedInIcon dimensions={dimensions} className='mx-auto'/></a>
                        <div>linkedin.com/in/robert-buskirk-lechner</div>
                    </div>
                    <div className="flex-col">
                        <a href="https://github.com/robert-bl" target='_blank'>
                            <GitHubIcon dimensions={dimensions}/></a>
                        <div>github.com/robert-bl</div>
                    </div>
                    <div className="flex-col">
                        <a href="mailto:buskirklechner@gmail.com">
                            <IoIosMail size={30}/></a>
                        <div>buskirklechner@gmail.com</div>
                    </div>
                </div>
            </div>
        </div>
    )
}