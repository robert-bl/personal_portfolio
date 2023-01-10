import JavaScriptIcon from "../SVGs/JavaScript"
import ReactIcon from "../SVGs/React"
import SequelizeIcon from "../SVGs/Sequelize"
import ExpressIcon from "../SVGs/Express"
import TailwindIcon from "../SVGs/Tailwind"

export default function PakRat () {

    let dimensions = '30px'

    return (
        <div className="relative bg-pakrat bg-cover bg-center w-4/5 aspect-square text-drkgry">
            <div className='bg-white bg-opacity-80'>
                <div className="opacity-100">PakRat</div>
                <div>Packing list app</div>
            </div>
            <div className="absolute bottom-0 left-0 bg-white bg-opacity-80 rounded-tr-md">
                <div>Bundled axios API calls</div>
                <div>Dynamic Form and Rendering</div>
            </div>
            <div className='absolute bg-white bg-opacity-80 rounded-tl-md bottom-0 right-0 p-2'>
                <JavaScriptIcon dimensions={dimensions}/>
                <ReactIcon dimensions={dimensions}/>
                <SequelizeIcon dimensions={dimensions}/>
                <ExpressIcon dimensions={dimensions}/>
                <TailwindIcon dimensions={dimensions}/>
            </div>
        </div>
    )
}