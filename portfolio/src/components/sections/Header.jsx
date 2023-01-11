import NavBar from "./NavBar"
import AltNav from "./AltNav"

export default function Header () {
    
    return (
    <div className="fixed z-20 top-0 w-full flex justify-between p-4 bg-drkgry text-lit">
        <div>Robert Buskirk-Lechner</div>
        <NavBar />
        <AltNav />
    </div>
    )
}