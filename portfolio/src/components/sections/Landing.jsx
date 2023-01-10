
import AboutMe from './AboutMe';
import Contact from './Contact';
import Header from './Header';
import Portfolio from './Portfolio';
import Skills from './Skills';

export default function Landing () {

    return (
        <div>
            <Header/>
            <AboutMe/>
            {/* <div className='h-80'></div> */}
            <Skills/>
            {/* <div className='h-80'></div> */}
            <Portfolio/>
            <Contact/>
        </div>
    )
}