import JavaScriptIcon from "../SVGs/JavaScript"
import HTMLIcon from "../SVGs/HTML"
import CSSIcon from "../SVGs/CSS"

export default function SnekSnak () {

    let dimensions = '30px'

    return (
        <div className="w-full shadow-2xl">
            <div className='bg-drkgry text-lit p-2'>
                <div>SnekSnack</div>
                <div>Snake browser game</div>
            </div>
            <div className="relative bg-sneksnak bg-bottom aspect-[4/3] text-drkgry">
                <div className='absolute flex gap-1 bg-white rounded-tl-md bottom-0 right-0 p-2'>
                    <JavaScriptIcon dimensions={dimensions}/>
                    <HTMLIcon dimensions={dimensions}/>
                    <CSSIcon dimensions={dimensions}/>
                </div>
            </div>
            <div className='bg-drkgry text-lit p-2'>
                <div>Game Logic</div>
                <div>DOM Manipulation</div>
            </div>
        </div>
    )
}