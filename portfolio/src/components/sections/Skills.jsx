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
import SQLIcon from "../SVGs/SQL"
import TailwindIcon from "../SVGs/Tailwind"
import VSCodeIcon from "../SVGs/VSCode"


export default function Skills () {

    let dimensions = '60px'

    let nameHover = 'text-black text-opacity-0 bg-opacity-0 hover:text-opacity-100 hover:bg-opacity-90 rounded-l-full rounded-r-full absolute w-fit bg-white duration-300 cursor-none text-center top-1/4 p-1 z-10'

    let hoverWrapper = 'relative flex justify-center'

    return (
        <div>
            <div id='skills'  className="h-16"></div>
            <div className="bg-lit sm:w-full md:w-4/5 mx-auto mt-12 p-8 border-t-4 border-medgry text-center">
                <div>
                    <div className="mt-8 mb-2">Languages</div>
                    <div className="flex gap-4 flex-wrap justify-center">
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
                <div>
                <div className="mt-8 mb-2">Libraries and Frameworks</div>
                    <div className="flex gap-4 flex-wrap justify-center">
                        <div className={hoverWrapper}>
                            <div className={nameHover}>Postgres</div>
                            <SQLIcon dimensions={dimensions}/>
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
                <div>
                <div className="mt-8 mb-2">Developer Tools</div>
                    <div className="flex gap-4 flex-wrap justify-center">
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