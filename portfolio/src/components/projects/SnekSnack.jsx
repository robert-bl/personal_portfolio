import JavaScriptIcon from "../SVGs/JavaScript"
import HTMLIcon from "../SVGs/HTML"
import CSSIcon from "../SVGs/CSS"
import { AiOutlineLink, AiOutlineGithub } from "react-icons/ai"

import { useState } from "react"

export default function SnekSnak () {

    const [showLinks, setShowLinks] = useState(false)

    const toggleLinks = () => {
        setShowLinks(!showLinks)
    }

    let dimensions = '30px'

    return (
        <div className="w-full shadow-2xl hover:scale-105 duration-300" onClick={toggleLinks}>
            <div className='bg-c5 p-2'>
                <div className='text-xl font-serif'>SnekSnack</div>
                <div>Snake browser game</div>
            </div>
            <div className="relative bg-sneksnak bg-contain bg-bottom aspect-[4/3] text-c5">
                <div className='absolute flex gap-1 bg-white rounded-tl-md bottom-0 right-0 p-2 border-t border-r border-l border-c6'>
                    <JavaScriptIcon dimensions={dimensions}/>
                    <HTMLIcon dimensions={dimensions}/>
                    <CSSIcon dimensions={dimensions}/>
                </div>
                {showLinks ?
                <div className='absolute bg-white bg-opacity-80 h-full w-full'>
                    <div className='flex justify-around items-center h-full'>
                        <div className="text-center w-2/5">
                            <a href='https://github.com/robert-bl/snake-browser-game' target='_blank'>
                            <AiOutlineGithub size={40} className='mx-auto'/>
                            <div>Github Repository</div>
                            </a>
                        </div>
                        <div className="text-center w-2/5">
                            <a href='https://snek-snack.surge.sh/' target='_blank'>
                            <AiOutlineLink size={40} className='mx-auto'/>
                            <div>Deployed Site</div>
                            </a>
                        </div>
                    </div>
                </div>
                : null
                }
            </div>
            <div className='bg-c5 p-2'>
                <div>Game Logic</div>
                <div>DOM Manipulation</div>
            </div>
        </div>
    )
}