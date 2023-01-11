import JavaScriptIcon from "../SVGs/JavaScript"
import ReactIcon from "../SVGs/React"
import CSSIcon from "../SVGs/CSS"

export default function Bhere () {

    let dimensions = '30px'

    return (
        <div className="w-full">
            <div className='bg-drkgry text-lit p-2'>
                <div>B{'('}HERE{')'}</div>
                <div>App for finding breweres in your area</div>
            </div>
            <div className="relative bg-bhere bg-bottom aspect-[4/3] text-drkgry">
                <div className='absolute flex gap-1 bg-white rounded-tl-md bottom-0 right-0 p-2'>
                <JavaScriptIcon dimensions={dimensions}/>
                <ReactIcon dimensions={dimensions}/>
                <CSSIcon dimensions={dimensions}/>
                </div>
            </div>
            <div className='bg-drkgry text-lit p-2'>
                <div>Axios API Calls</div>
                <div>React Router</div>
            </div>
        </div>
    )
}