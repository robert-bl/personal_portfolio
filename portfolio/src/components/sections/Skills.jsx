import CSSIcon from "../SVGs/CSS"
import DjangoIcon from "../SVGs/Django"
import ExpressIcon from "../SVGs/Express"
import GitIcon from "../SVGs/Git"
import GitHubIcon from "../SVGs/GitHib"
import HTMLIcon from "../SVGs/HTML"
import JavaScriptIcon from "../SVGs/JavaScript"
import NodeIcon from "../SVGs/Node"
import PythonIcon from "../SVGs/Python"
import ReactIcon from "../SVGs/React"
import SequelizeIcon from "../SVGs/Sequelize"
import PostgreSQLIcon from "../SVGs/PostgreSQL"
import TailwindIcon from "../SVGs/Tailwind"
import VSCodeIcon from "../SVGs/VSCode"


export default function Skills () {

    let dimensions = '60px'

    // let nameHover = 'text-black text-opacity-0 bg-opacity-0 hover:text-opacity-100 hover:bg-opacity-90 rounded-l-full rounded-r-full absolute w-fit bg-white duration-300 cursor-none text-center top-8 p-1 z-10'

    let nameHover = 'text-black text-opacity-0 bg-opacity-0 border-opacity-0 hover:text-opacity-100 hover:bg-opacity-80 hover:border-opacity-70 rounded-full absolute w-24 h-24 bg-white duration-500 text-center pt-8 z-10 border-2 border-c4 cursor-default'

    let hoverWrapper = 'relative flex justify-center items-center rounded-full bg-white w-24 h-24 border-2 border-c6'

    return (
        <div>
            <div id='skills'  className="h-6 md:h-10"></div>
            <div className="bg-c2 sm:w-full md:w-4/5 mx-auto mt-12 border-b-4 border-c6 pb-4">
            <div className="font-serif bg-c5 text-2xl p-4 mb-6">Skills</div>
                <div className="text-center">
                    <div className="mt-8 m-4 py-2 bg-c5">Languages</div>
                    <div className="flex gap-4 flex-wrap justify-center p-1">
                        <div className={hoverWrapper}>
                            <div className={nameHover}>JavaScript</div>
                            <JavaScriptIcon dimensions={dimensions}/>
                        </div>
                        <div className={hoverWrapper}>
                            <div className={nameHover}>Python</div>
                            <PythonIcon dimensions={dimensions}/>
                        </div>
                        <div className={hoverWrapper}>
                            <div className={nameHover}>HTML</div>
                            <HTMLIcon dimensions={dimensions}/>
                        </div>
                        <div className={hoverWrapper}>
                            <div className={nameHover}>CSS</div>
                            <CSSIcon dimensions={dimensions}/>
                        </div>
                    </div>
                </div>
                <div className="text-center">
                <div className="mt-8 m-4 py-2 bg-c5">Libraries and Frameworks</div>
                    <div className="flex gap-4 flex-wrap justify-center p-1">
                        <div className={hoverWrapper}>
                            <div className={nameHover}>PostgreSQL</div>
                            <PostgreSQLIcon dimensions={dimensions}/>
                        </div>
                        <div className={hoverWrapper}>
                            <div className={nameHover}>React</div>
                            <ReactIcon dimensions={dimensions}/>
                        </div>
                        <div className={hoverWrapper}>
                            <div className={nameHover}>Django</div>
                            <DjangoIcon dimensions={dimensions}/>
                        </div>
                        <div className={hoverWrapper}>
                            <div className={nameHover}>Sequelize</div>
                            <SequelizeIcon dimensions={dimensions}/>
                        </div>
                        <div className={hoverWrapper}>
                            <div className={nameHover}>Express</div>
                            <ExpressIcon dimensions={dimensions}/>
                        </div>
                        <div className={hoverWrapper}>
                            <div className={nameHover}>Tailwind</div>
                            <TailwindIcon dimensions={dimensions}/>
                        </div>
                    </div>
                </div>
                <div className="text-center">
                <div className="mt-8 m-4 py-2 bg-c5">Developer Tools</div>
                    <div className="flex gap-4 flex-wrap justify-center p-1">
                        <div className={hoverWrapper}>
                            <div className={nameHover}>Node.js</div>
                            <NodeIcon dimensions={dimensions}/>
                        </div>
                        <div className={hoverWrapper}>
                            <div className={nameHover}>VSCode</div>
                            <VSCodeIcon dimensions={dimensions}/>
                        </div>
                        <div className={hoverWrapper}>
                            <div className={nameHover}>GitHub</div>
                            <GitHubIcon dimensions={dimensions}/>
                        </div>
                        <div className={hoverWrapper}>
                            <div className={nameHover}>Git</div>
                            <GitIcon dimensions={dimensions}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}