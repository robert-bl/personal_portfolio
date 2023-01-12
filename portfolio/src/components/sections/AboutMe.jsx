export default function AboutMe () {

    return (
        <div>
            <div id='about-me' className="h-16"></div>
            <div className='bg-lit sm:w-full md:w-4/5 mx-auto mt-12 p-4 border-t-4 border-b-4 border-medgry'>
                <div className="bg-drkgry text-lit p-4 my-4">
                    <div className="text-center">Robert Buskirk-Lechner | Full Stack Developer</div>
                    <div className="text-center">JavaScript - Python - React - Sequelize</div>
                </div>

                <div className="bg-prof bg-cover bg-center sm:w-3/5 md:w-2/5 mx-auto aspect-square rounded-full border-2 border-drkgry"></div>
                <div className="bg-drkgry text-lit p-4 my-4">I am a software engineer who brings over a decade of experience in logistics and project management from the brewing and outdoor education fields. I am passionate about improving outcomes and user's experiences by building complex systems using thorough, collaborative, detail oriented approaches.</div>
            </div>
        </div>
    )
}