import JavaScriptIcon from "../SVGs/JavaScript"
import ReactIcon from "../SVGs/React"
import SequelizeIcon from "../SVGs/Sequelize"
import ExpressIcon from "../SVGs/Express"

export default function MyPlates () {

    let dimensions = '30px'

    return (
        <div className="relative bg-blue-400 bg-center w-4/5 aspect-square">
            <div className='bg-white bg-opacity-50'>
                <div className="opacity-100">My Plates</div>
                <div>Recipe sharing app</div>
            </div>
            <div className="absolute bottom-0 left-0">
                <div>PERN Stack</div>
                <div>Full CRUD</div>
            </div>
            <div className='absolute bg-white bg-opacity-50 rounded-tl-md bottom-0 right-0 p-2'>
                <JavaScriptIcon dimensions={dimensions}/>
                <ReactIcon dimensions={dimensions}/>
                <SequelizeIcon dimensions={dimensions}/>
                <ExpressIcon dimensions={dimensions}/>
            </div>
        </div>
    )
}