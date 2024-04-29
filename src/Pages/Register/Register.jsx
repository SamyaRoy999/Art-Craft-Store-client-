import { useContext } from "react";
import { useForm } from "react-hook-form"
import { Link } from "react-router-dom";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Register = () => {
    const { emailBaseLogin, updateUserProfile } = useContext(AuthContext)
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
                updateUserProfile(name , photoUrl)
            })

        // user profileUpdate
       

    }

    return (
        <section className="h-screen bg-[#FFF2E2]">
            <ToastContainer />
            <div className="container h-full px-6 py-24">
                <div
                    className="flex h-full flex-wrap items-center justify-center lg:justify-between">
                    {/*  Left column container with background */}
                    <div className="mb-12 md:mb-0 md:w-8/12 lg:w-6/12">
                        <img
                            src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                            className="w-full"
                            alt="Phone image" />
                    </div>

                    {/*  Right column container with form  */}
                    <div className="md:w-8/12 lg:ms-6 lg:w-5/12">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            {/*  name input  */}

                            <div className="bg-white p-4 rounded-lg">
                                <div className="relative bg-inherit">
                                    <input
                                        type="text"
                                        name="name"
                                        className="peer  h-10 w-full rounded-lg text-gray-600 placeholder-transparent ring-2 px-2 ring-gray-500 focus:ring-sky-600 focus:outline-none focus:border-rose-600" placeholder="Name"
                                        {...register("name", { required: true })} /><label for="name" className="absolute cursor-text left-0 -top-3 text-sm text-gray-500 bg-inherit mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm transition-all">Name</label>
                                    {errors.name && <span>This field is required</span>}
                                </div>
                            </div>
                            {/*  Email input  */}


                            <div className="bg-white p-4 rounded-lg">
                                <div className="relative bg-inherit">
                                    <input
                                        type="text"
                                        name="name"
                                        className="peer  h-10 w-full rounded-lg text-gray-600 placeholder-transparent ring-2 px-2 ring-gray-500 focus:ring-sky-600 focus:outline-none focus:border-rose-600" placeholder="Email address"
                                        {...register("email", { required: true })} /><label for="email" className="absolute cursor-text left-0 -top-3 text-sm text-gray-500 bg-inherit mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm transition-all">Email address</label>
                                    {errors.email && <span>This field is required</span>}
                                </div>
                            </div>
                            {/*  photoUrl input  */}


                            <div className="bg-white p-4 rounded-lg">
                                <div className="relative bg-inherit">
                                    <input
                                        type="text"
                                        name="photoUrl"
                                        className="peer  h-10 w-full rounded-lg text-gray-600 placeholder-transparent ring-2 px-2 ring-gray-500 focus:ring-sky-600 focus:outline-none focus:border-rose-600" placeholder="Photo Url"
                                        {...register("photoUrl", { required: true })} /><label for="email" className="absolute cursor-text left-0 -top-3 text-sm text-gray-500 bg-inherit mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm transition-all">Email address</label>
                                    {errors.email && <span>This field is required</span>}
                                </div>
                            </div>


                            {/*  Password input  */}
                            <div className="bg-white p-4 rounded-lg">
                                <div className="relative bg-inherit">
                                    <input
                                        type="password"
                                        name="password"
                                        className="peer  h-10 w-full rounded-lg text-gray-600 placeholder-transparent ring-2 px-2 ring-gray-500 focus:ring-sky-600 focus:outline-none focus:border-rose-600" placeholder="Email address"
                                        {...register("password", { required: true })} /><label for="password" className="absolute cursor-text left-0 -top-3 text-sm text-gray-500 bg-inherit mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm transition-all">Password</label>
                                    {errors.password && <span>This field is required</span>}
                                </div>
                            </div>

                            {/*  Submit button  */}
                            <button
                                type="submit"
                                className="inline-block w-full rounded  bg-[#E65B56] px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                                data-twe-ripple-init
                                data-twe-ripple-color="light">
                                Sign in
                            </button>


                        </form>
                        <p>Do not have an account   <Link to='/login' className=" text-[#E65B56]">Login</Link></p>
                    </div>
                </div>
            </div>
        </section>
    )

}

export default Register
