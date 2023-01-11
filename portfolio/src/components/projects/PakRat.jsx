import JavaScriptIcon from "../SVGs/JavaScript"
import ReactIcon from "../SVGs/React"
import SequelizeIcon from "../SVGs/Sequelize"
import ExpressIcon from "../SVGs/Express"
import TailwindIcon from "../SVGs/Tailwind"

export default function PakRat () {

    let dimensions = '30px'

    return (
        <div className="w-full">
            <div className='bg-drkgry text-lit p-2'>
                <div>PakRat</div>
                <div>Packing list app</div>
            </div>
            <div className="relative bg-pakrat bg-bottom aspect-[4/3] text-drkgry">
                <div className='absolute flex gap-1 bg-white rounded-tl-md bottom-0 right-0 p-2'>
                    <JavaScriptIcon dimensions={dimensions}/>
                    <ReactIcon dimensions={dimensions}/>
                    <SequelizeIcon dimensions={dimensions}/>
                    <ExpressIcon dimensions={dimensions}/>
                    <TailwindIcon dimensions={dimensions}/>
                </div>
            </div>
            <div className='bg-drkgry text-lit p-2'>
                <div>Bundled axios API calls</div>
                <div>Dynamic Form and Rendering</div>
            </div>
        </div>
    )
}