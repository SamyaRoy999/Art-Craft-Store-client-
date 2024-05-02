import { Outlet } from "react-router-dom"
import Navbar from "../Components/Navbar/Navbar"
import Footer from "../Components/Footer/Footer"
import { useContext } from "react"
import { AuthContext } from "../AuthProvider/AuthProvider"


const Roots = () => {
    const { loding } = useContext(AuthContext)
    if(loding){
        return <span className="loading loading-bars loading-lg"></span>
    }
    return (
        <div className=" font-Shanti">
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    )
}

export default Roots
 