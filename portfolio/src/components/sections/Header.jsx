import NavBar from "./NavBar"

export default function Header () {
    
    return (
    <div className="fixed z-10 top-0 w-full flex justify-between p-4 bg-drkgry text-lit">
        <div>Robert Buskirk-Lechner</div>
        <NavBar />
    </div>
    )
}