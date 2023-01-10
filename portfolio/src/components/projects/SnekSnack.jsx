import JavaScriptIcon from "../SVGs/JavaScript"
import HTMLIcon from "../SVGs/HTML"
import CSSIcon from "../SVGs/CSS"

export default function SnekSnak () {

    let dimensions = '30px'

    return (
        <div className="relative bg-sneksnak bg-contain w-4/5 aspect-square text-drkgry">
            <div className='bg-white bg-opacity-80'>
                <div className="opacity-100">SnekSnak</div>
                <div>Snake browser game</div>
            </div>
            <div className="absolute bottom-0 left-0 bg-white bg-opacity-80 rounded-tr-md">
                <div>Game Logic</div>
                <div>DOM Manipulation</div>
            </div>
            <div className='absolute bg-white bg-opacity-80 rounded-tl-md bottom-0 right-0 p-2'>
                <JavaScriptIcon dimensions={dimensions}/>
                <HTMLIcon dimensions={dimensions}/>
                <CSSIcon dimensions={dimensions}/>
            </div>
        </div>
    )
}