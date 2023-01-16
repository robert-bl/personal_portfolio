import NavBar from "./NavBar"
import AltNav from "./AltNav"
import { useState, useEffect } from "react"

export default function Header () {

    const [width, setWidth] = useState(null)

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth)
        }
        window.addEventListener("resize", handleResize)

        handleResize()

        return () => window.removeEventListener("resize", handleResize)
    },[])
    
    return (
    <div className="fixed z-20 top-0 w-full flex justify-between p-4 md:p-6 bg-c5 h-1/12">
        <div className="font-serif text-2xl">Robert Buskirk-Lechner</div>
        {width <=640 ? <AltNav /> : <NavBar />}
    </div>
    )
}