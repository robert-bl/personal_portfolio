export default function AboutMe () {

    return (
        <div>
            <div id='about-me' className="h-6 md:h-10"></div>
            <div className='bg-lit sm:w-full md:w-4/5 mx-auto mt-12 border-t-4 border-b-4 border-medgry'>
                <div className="font-serif bg-drkgry text-offw text-2xl p-4 border-b-4 border-medgry mb-6">About Me</div>
                <div className="bg-drkgry p-4 my-4 mx-4 text-center">
                    <div className="text-2xl">Robert Buskirk-Lechner</div>
                    <div>Full Stack Developer</div>
                    <div>JavaScript - Python - React - PostgreSQL</div>
                </div>
                <div className="bg-prof bg-cover bg-center w-10/12 md:w-2/5 mx-auto aspect-square rounded-full border-2 border-drkgry"></div>
                <div className="bg-drkgry text-center p-4 m-4 italic">I am a software engineer who brings over a decade of experience in logistics and project management from the brewing and outdoor education fields. I am passionate about improving outcomes and users' experiences by building complex systems using thorough, collaborative, detail oriented approaches.</div>
            </div>
        </div>
    )
}