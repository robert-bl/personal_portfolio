import JavaScriptIcon from "../SVGs/JavaScript"
import HTMLIcon from "../SVGs/HTML"
import CSSIcon from "../SVGs/CSS"

export default function SnekSnak () {

    let dimensions = '30px'

    return (
        <div className="w-4/5">
            <div className='bg-white'>
                <div>SnekSnak</div>
                <div>Snake browser game</div>
            </div>
            <div className="relative bg-sneksnak bg-contain aspect-square text-drkgry">
                <div className='absolute flex gap-1 bg-white rounded-tl-md bottom-0 right-0 p-2'>
                    <JavaScriptIcon dimensions={dimensions}/>
                    <HTMLIcon dimensions={dimensions}/>
                    <CSSIcon dimensions={dimensions}/>
                </div>
            </div>
            <div className='bg-white'>
                <div>Game Logic</div>
                <div>DOM Manipulation</div>
            </div>
        
        </div>
    )
}