import NavBar from "./NavBar"
import AltNav from "./AltNav"
import { useState, useEffect } from "react"

export default function Header () {

    const [width, setWidth] = useState(null)

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth)
            console.log(width)
        }
        window.addEventListener("resize", handleResize)

        handleResize()

        return () => window.removeEventListener("resize", handleResize)
    },[])
    
    return (
    <div className="fixed z-20 top-0 w-full flex justify-between p-4 bg-drkgry text-lit">
        <div>Robert Buskirk-Lechner</div>
        {width <=640 ? <AltNav /> : <NavBar />}
    </div>
    )
}