import { Outlet } from "react-router-dom"
import Navbar from "../Components/Navbar/Navbar"
import Footer from "../Components/Footer/Footer"


const Roots = () => {
    return (
        <div className=" font-Shanti">
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    )
}

export default Roots
