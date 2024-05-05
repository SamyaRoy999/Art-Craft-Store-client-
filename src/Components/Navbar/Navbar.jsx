import { useContext } from "react"
import { Link, NavLink } from "react-router-dom"
import { AuthContext } from "../../AuthProvider/AuthProvider"


const Navbar = () => {
  const { user, userSignOut, name, photoURl } = useContext(AuthContext);


  const NabvarItem = <>
    <li><NavLink to='/'>Home</NavLink></li>
    <li><NavLink to='/AllArtsCraft'>AllArtsCraft</NavLink></li>
    <li><NavLink to='/addCraft'>AddCraft</NavLink></li>
    <li><NavLink to='/myArtCraft'>MyArtCraft</NavLink></li>
    {/* {user && (<>
    </>
    )} */}
  </>
  return (
    <div >
      <div className="navbar bg-base-100 z-30">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              {NabvarItem}
            </ul>
          </div>
          <div className=" flex items-center gap-2">
            <div className=" w-12">
              <img src="https://i.ibb.co/hLhtdsV/nq31-07fy-230113.jpg" alt="" />
            </div>
            <a className=" font-bold text-3xl">Artful<span className="text-[#E65B56]">Nook</span></a>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {NabvarItem}
          </ul>
        </div>
        <div className="navbar-end">
          {
            user ? <div className="dropdown dropdown-hover">
              <div tabIndex={0} className=" ml-10">
                {/* avatar */}
                <div className="avatar">
                  <div className="w-14 rounded-full">
                    <img src={user.photoURL || photoURl} />
                  </div>
                </div>
              </div>
              {/* dropdrown */}
              <ul tabIndex={0} className="dropdown-content z-10 menu p-2 shadow bg-base-100 rounded-box w-42">
                <li><a>{user.displayName || name}</a></li>
                <li><button onClick={() => userSignOut()}>LogOut</button></li>
              </ul>
            </div> : <div className="flex gap-5">
              <Link to='/login' className="relative px-5 py-2 font-medium text-white group">
                <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-[#ec807c] group-hover:bg-[#E65B56] group-hover:skew-x-12"></span>
                <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-[#E65B56] group-hover:bg-[#ec807c] group-hover:-skew-x-12"></span>
                <span className="absolute bottom-0 left-0 hidden w-10 h-20 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 bg-[#e86965] -rotate-12"></span>
                <span className="absolute bottom-0 right-0 hidden w-10 h-20 transition-all duration-100 ease-out transform translate-x-10 translate-y-8 bg-[#ec807c] -rotate-12"></span>
                <span className="relative">Login</span>
              </Link>
              <Link to='/register' className="relative px-5 py-2 font-medium text-white group">
                <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-[#ec807c] group-hover:bg-[#E65B56] group-hover:skew-x-12"></span>
                <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-[#E65B56] group-hover:bg-[#ec807c] group-hover:-skew-x-12"></span>
                <span className="absolute bottom-0 left-0 hidden w-10 h-20 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 bg-[#e86965] -rotate-12"></span>
                <span className="absolute bottom-0 right-0 hidden w-10 h-20 transition-all duration-100 ease-out transform translate-x-10 translate-y-8 bg-[#e58d8a] -rotate-12"></span>
                <span className="relative">Register</span>
              </Link>
            </div>

          }
        </div>
      </div>
    </div>
  )
}

export default Navbar
