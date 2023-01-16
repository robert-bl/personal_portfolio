
import AboutMe from './AboutMe';
import Contact from './Contact';
import Footer from './Footer';
import Header from './Header';
import Portfolio from './Portfolio';
import Skills from './Skills';

export default function Landing () {

    return (
        <div className='relative'>
            <Header/>
            <div className='h-8'></div>
            <AboutMe/>
            <Skills/>
            <Portfolio/>
            <Contact/>
            <Footer/>
        </div>
    )
}