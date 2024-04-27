import { Outlet } from "react-router-dom"
import Navbar from "../Components/Navbar/Navbar"


const Roots = () => {
    return (
        <div >
            <Navbar/>
            <Outlet/>
        </div>
    )
}

export default Roots
