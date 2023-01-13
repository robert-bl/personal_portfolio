import JavaScriptIcon from "../SVGs/JavaScript"
import ReactIcon from "../SVGs/React"
import SequelizeIcon from "../SVGs/Sequelize"
import ExpressIcon from "../SVGs/Express"

export default function MyPlates () {

    let dimensions = '30px'

    return (
        <div className="w-full shadow-2xl hover:scale-105 duration-300" onClick={toggleLinks}>
            <div className='bg-drkgry text-lit p-2'>
                <div>PakRat</div>
                <div>Packing list app</div>
            </div>
            <div className="relative bg-pakrat bg-contain bg-bottom aspect-[4/3] text-drkgry">
                <div className='absolute flex gap-1 bg-white rounded-tl-md bottom-0 right-0 p-2'>
                <JavaScriptIcon dimensions={dimensions}/>
                <ReactIcon dimensions={dimensions}/>
                <SequelizeIcon dimensions={dimensions}/>
                <ExpressIcon dimensions={dimensions}/>
                </div>
                {showLinks ?
                <div className='absolute bg-white bg-opacity-80 h-full w-full'>
                    <div className='flex justify-around items-center h-full'>
                        <div className="text-center w-2/5">
                            <a href='https://github.com/robert-bl/MyPlates' target='_blank'>
                            <AiOutlineGithub size={40} className='mx-auto'/>
                            <div>Github Repository</div>
                            </a>
                        </div>
                        <div className="text-center w-2/5">
                            <a href='https://myplates.netlify.app/' target='_blank'>
                            <AiOutlineLink size={40} className='mx-auto'/>
                            <div>Deployed Site</div>
                            </a>
                        </div>
                    </div>
                </div>
                : null
                }
            </div>
            <div className='bg-drkgry text-lit p-2'>
                <div>PERN Stack</div>
                <div>Full CRUD</div>
            </div>
        </div>
    )
}