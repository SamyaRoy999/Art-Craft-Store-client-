import { NavLink } from "react-router-dom"


const Navbar = () => {
  const NabvarItem = <>
    <li><NavLink to='/'>Home</NavLink></li>
    <li> <NavLink to='/register'>register</NavLink></li>
    <li><NavLink to='/login'>login</NavLink></li>
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
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {NabvarItem}
          </ul>
        </div>
        <div className="navbar-end">
          <div className="dropdown dropdown-hover">
            <div tabIndex={0}  className=" ml-10">
              {/* avatar */}
              <div className="avatar">
                <div className="w-14 rounded-full">
                  <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
              </div>
            </div>
            {/* dropdrown */}
            <ul tabIndex={0} className="dropdown-content z-10 menu p-2 shadow bg-base-100 rounded-box w-52">
              <li><a>Item 1</a></li>
              <li><a>Item 2</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar