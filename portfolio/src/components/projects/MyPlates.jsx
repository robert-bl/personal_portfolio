import JavaScriptIcon from "../SVGs/JavaScript"
import ReactIcon from "../SVGs/React"
import SequelizeIcon from "../SVGs/Sequelize"
import ExpressIcon from "../SVGs/Express"

export default function MyPlates () {

    let dimensions = '30px'

    return (
        <div className="w-full">
            <div className='bg-drkgry text-lit p-2'>
                <div>MyPlates</div>
                <div>Recipe sharing app</div>
            </div>
            <div className="relative bg-medblu bg-bottom aspect-[4/3] text-drkgry">
                <div className='absolute flex gap-1 bg-white rounded-tl-md bottom-0 right-0 p-2'>
                <JavaScriptIcon dimensions={dimensions}/>
                <ReactIcon dimensions={dimensions}/>
                <SequelizeIcon dimensions={dimensions}/>
                <ExpressIcon dimensions={dimensions}/>
                </div>
            </div>
            <div className='bg-drkgry text-lit p-2'>
                <div>PERN Stack</div>
                <div>Full CRUD</div>
            </div>
        </div>
    )
}