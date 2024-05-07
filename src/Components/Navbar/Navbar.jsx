import { useContext, useEffect, useState } from "react"
import { Link, NavLink } from "react-router-dom"
import { AuthContext } from "../../AuthProvider/AuthProvider"


const Navbar = () => {
  const { user, userSignOut, name, photoURl } = useContext(AuthContext);

  const [theme, setTheme] = useState('light')

  useEffect(() => {
    localStorage.setItem('theme', theme)
    const localthem = localStorage.getItem('theme')
    document.querySelector('html').setAttribute("data-theme", localthem)
  }, [theme])

  const hendelThems = (e) => {
    if (e.target.checked) {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }
  console.log(theme);
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
            <ul tabIndex={0} className="menu menu-sm z-10 dropdown-content mt-3  p-2 shadow bg-base-100 rounded-box w-52">
              {NabvarItem}
            </ul>
          </div>
          <div className=" flex -ml-3 items-center gap-0 lg:gap-2">
            <div className=" w-7 lg:w-12 ">
              <img src="https://i.ibb.co/hLhtdsV/nq31-07fy-230113.jpg" alt="" />
            </div>
            <a className=" font-bold text-xl  lg:text-3xl">Artful<span className="text-[#E65B56]">Nook</span></a>
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
            </div> : <div className="flex gap-5 ">
              <Link to='/login' className="relative w-14 lg:w-full px-2 py-2 lg:px-5 lg:py-2 font-medium text-white group">
                <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-[#ec807c] group-hover:bg-[#E65B56] group-hover:skew-x-12"></span>
                <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-[#E65B56] group-hover:bg-[#ec807c] group-hover:-skew-x-12"></span>
                <span className="absolute bottom-0 left-0 hidden w-10 h-20 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 bg-[#e86965] -rotate-12"></span>
                <span className="absolute bottom-0 right-0 hidden w-10 h-20 transition-all duration-100 ease-out transform translate-x-10 translate-y-8 bg-[#ec807c] -rotate-12"></span>
                <span className="relative text-sm  ">Login</span>
              </Link>
              <Link to='/register' className="relative w-14 lg:w-full  px-1 py-2 lg:px-5 lg:py-2 font-medium text-white group">
                <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-[#ec807c] group-hover:bg-[#E65B56] group-hover:skew-x-12"></span>
                <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-[#E65B56] group-hover:bg-[#ec807c] group-hover:-skew-x-12"></span>
                <span className="absolute bottom-0 left-0 hidden w-10 h-20 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 bg-[#e86965] -rotate-12"></span>
                <span className="absolute bottom-0 right-0 hidden w-10 h-20 transition-all duration-100 ease-out transform translate-x-10 translate-y-8 bg-[#e58d8a] -rotate-12"></span>
                <span className="relative text-sm">Register</span>
              </Link>
            </div>
          }
          <label className="swap swap-rotate mr-5">

            <input type="checkbox" onChange={hendelThems} className="theme-controller" />

            <svg className="swap-off fill-current w-7 h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>

            <svg className="swap-on fill-current w-7 h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>

          </label>
        </div>
      </div>
    </div>
  )
}

export default Navbar
