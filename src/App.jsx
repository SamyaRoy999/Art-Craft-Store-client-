
import { useContext, useState } from "react";
import { useForm } from "react-hook-form"
import { Link } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from "./AuthProvider/AuthProvider";



function App() {
  const { emailBaseLogin, updateUserProfile } = useContext(AuthContext)

  const [passwordIcon, setPasswordIcon] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    const { email, password, photoUrl, name } = data

    if (!/(?=.*[a-z])(?=.*[A-Z]).{6,}/.test(password)) {
      toast.error('Password must have at least 6 characters, including uppercase and lowercase letters.')
      return;
    }

    console.log(email, password, photoUrl, name);

    emailBaseLogin(email, password)
      .then(result => {
        console.log(result.user);
        updateUserProfile(name, photoUrl)
      })

    // user profileUpdate


  }

  return (


    <div className="flex h-screen w-full items-center justify-center bg-gray-900 bg-cover bg-no-repeat  bg-[url('https://i.ibb.co/mCdJQgC/india-republic-day-celebration-digital-art-with-woman-portrait.jpg')]" >
      <ToastContainer />
      <div className="rounded-xl bg-gray-800 bg-opacity-50 px-16 py-10 shadow-lg backdrop-blur-md max-sm:px-8">
        <div className="text-white">
          <div className="mb-8 flex flex-col items-center">
            <img src="https://i.ibb.co/y6M2n3G/loginer-removebg-preview.png" width="150" alt="" />
            <h1 className="mb-2 text-2xl">Register</h1>
            <span className="text-gray-300">Enter Register Details</span>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4 text-lg">
              <input
                className="rounded-3xl border-none bg-[#E65B56] bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
                type="text"
                name="name"
                placeholder="Name"
                {...register("name", { required: true })} />
              {errors.name && <span>This field is required</span>}
            </div>
            <div className="mb-4 text-lg">
              <input
                className="rounded-3xl border-none bg-[#E65B56] bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
                type="text"
                name="name"
                placeholder="id@email.com"
                {...register("email", { required: true })} />
              {errors.email && <span>This field is required</span>}
            </div>
            <div className="mb-4 text-lg">
              <input
                className="rounded-3xl border-none bg-[#E65B56] bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
                type="text"
                name="name"
                placeholder="PhotoURL"
                {...register("photoUrl", { required: true })} />
              {errors.email && <span>This field is required</span>}
            </div>
            <div className="mb-4 text-lg">
              <div className=" relative">

                <input
                  className="rounded-3xl border-none bg-[#E65B56] bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
                  type={passwordIcon ? "text" : "password"}
                  name="name"
                  placeholder="*******"
                  {...register("password", { required: true })} />
                {errors.password && <span>This field is required</span>}
                <div onClick={() => setPasswordIcon(!passwordIcon)} className=" absolute right-3 top-4">
                  {passwordIcon ? <FaEye /> : <FaEyeSlash />}
                </div>
              </div>
            </div>
            <div className="mt-8 flex justify-center text-lg text-black">
              <button type="submit" className="rounded-3xl bg-[#E65B56] bg-opacity-50 px-10 py-2 text-white shadow-xl backdrop-blur-md transition-colors duration-300 hover:bg-yellow-600">Register</button>
            </div>
          </form>
          <p>Do not have an account   <Link to='/login' className=" text-[#E65B56]">Login</Link></p>
        </div>
      </div>
    </div>

  )
}

export default App
