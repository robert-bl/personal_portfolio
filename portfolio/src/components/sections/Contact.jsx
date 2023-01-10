import GitHubIcon from "../SVGs/GitHib"
import LinkedInIcon from "../SVGs/LinkedIn"

export default function Contact () {

    let dimensions= '30px'

    return (
        <div id='contact' className="mx-auto bg-lit sm:w-full md:w-4/5 mt-12 p-4 border-t-4 border-medgry">
            <div className="text-center">Connect with me</div>
            <div className="flex justify-around m-8">
                <LinkedInIcon dimensions={dimensions} />
                <GitHubIcon dimensions={dimensions} />
            </div>
        </div>
    )
}