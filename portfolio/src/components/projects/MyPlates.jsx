import JavaScriptIcon from "../SVGs/JavaScript"
import ReactIcon from "../SVGs/React"
import SequelizeIcon from "../SVGs/Sequelize"
import ExpressIcon from "../SVGs/Express"
import PostgreSQLIcon from "../SVGs/PostgreSQL"
import { AiOutlineLink, AiOutlineGithub } from "react-icons/ai"

import { useState } from "react"


export default function MyPlates () {

    const [showLinks, setShowLinks] = useState(false)

    const toggleLinks = () => {
        setShowLinks(!showLinks)
    }

    let dimensions = '30px'

    return (
        <div className="w-full shadow-2xl hover:scale-105 duration-300 bg-c5" onClick={toggleLinks}>
            <div className='bg-c5 p-2'>
                <div className='text-xl font-serif'>MyPlates</div>
                <div>Post, find, and review recipes</div>
            </div>
            <div className="relative bg-myplates bg-contain bg-bottom bg-no-repeat aspect-[4/3] text-c5">
                <div className='absolute flex gap-1 bg-white rounded-tl-md bottom-0 right-0 p-2 border-t-2 border-r-2 border-l-2 border-c6'>
                <JavaScriptIcon dimensions={dimensions}/>
                <ReactIcon dimensions={dimensions}/>
                <ExpressIcon dimensions={dimensions}/>
                <SequelizeIcon dimensions={dimensions}/>
                <PostgreSQLIcon dimensions={dimensions}/>
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
            <div className='bg-c5 p-2'>
                <div>• React front-end with router, forms, and JWT user authentication</div>
                <div>• Full CRUD backend with RESTful API and relational Postgres database</div>
            </div>
        </div>
    )
}