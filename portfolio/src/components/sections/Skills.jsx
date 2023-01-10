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


    return (
        <div id='skills' className="bg-lit sm:w-full md:w-4/5 mx-auto mt-12 p-4 border-t-4 border-medgry">
            <div className="flex">
                <div>Languages</div>
                <JavaScriptIcon dimensions={dimensions}/>
                <PythonIcon dimensions={dimensions}/>
                <HTMLIcon dimensions={dimensions}/>
                <CSSIcon dimensions={dimensions}/>
            </div>
            <div className="flex">
                <div>Libraries and Frameworks</div>
                <SQLIcon dimensions={dimensions}/>
                <ReactIcon dimensions={dimensions}/>
                <DjangoIcon dimensions={dimensions}/>
                <SequelizeIcon dimensions={dimensions}/>
                <ExpressIcon dimensions={dimensions}/>
                <TailwindIcon dimensions={dimensions}/>
            </div>
            <div className="flex">
                <div>Developer Tools</div>
                <NodeIcon dimensions={dimensions}/>
                <VSCodeIcon dimensions={dimensions}/>
                <GitHubIcon dimensions={dimensions}/>
                <GitIcon dimensions={dimensions}/>
            </div>
        </div>
    )
}