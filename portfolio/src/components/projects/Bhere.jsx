import JavaScriptIcon from "../SVGs/JavaScript"
import ReactIcon from "../SVGs/React"
import CSSIcon from "../SVGs/CSS"

export default function Bhere () {

    let dimensions = '30px'

    return (
        <div className="relative bg-bhere bg-cover bg-center w-4/5 aspect-square text-drkgry">
            <div className='bg-white bg-opacity-80'>
                <div className="opacity-100">B{'('}HERE{')'}</div>
                <div>App for finding breweres in your area</div>
            </div>
            <div className="absolute bottom-0 left-0 bg-white bg-opacity-80">
                <div>Axios API Calls</div>
                <div>React Router</div>
            </div>
            <div className='absolute bg-white bg-opacity-80 rounded-tl-md bottom-0 right-0 p-2'>
                <JavaScriptIcon dimensions={dimensions}/>
                <ReactIcon dimensions={dimensions}/>
                <CSSIcon dimensions={dimensions}/>
            </div>
        </div>
    )
}