import { FaGithub } from "react-icons/fa";
import { IoLogoGoogle } from "react-icons/io";
import { useForm } from "react-hook-form"
import { Link } from "react-router-dom";

// type Inputs = {
//     example: string
//     exampleRequired: string
//   }
const Login = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()
    const onSubmit = (data) => {

        const email = data.email;
        const password = data.password;
        console.log(email, password);
    }

    return (
        <section className="h-screen bg-[#FFF2E2]">
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
                            {/*  Email input  */}
                          

                            <div className="bg-white p-4 rounded-lg">
                                <div className="relative bg-inherit">
                                    <input
                                        type="text"
                                        id="username"
                                        name="name"
                                        className="peer  h-10 w-full rounded-lg text-gray-600 placeholder-transparent ring-2 px-2 ring-gray-500 focus:ring-sky-600 focus:outline-none focus:border-rose-600" placeholder="Email address" 
                                        {...register("email", { required: true })} /><label for="email" className="absolute cursor-text left-0 -top-3 text-sm text-gray-500 bg-inherit mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm transition-all">Email address</label>
                                    {errors.email && <span>This field is required</span>}
                                </div>
                            </div>

                            {/*  Password input  */}
                            <div className="bg-white p-4 rounded-lg">
                                <div className="relative bg-inherit">
                                    <input
                                        type="password"
                                        id="username"
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

                            {/*  Divider  */}
                            <div
                                className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300 dark:before:border-neutral-500 dark:after:border-neutral-500">
                                <p
                                    className="mx-4 mb-0 text-center font-semibold dark:text-neutral-200">
                                    OR
                                </p>
                            </div>

                            {/*  Social login buttons  */}
                            <a
                                className="mb-3 flex w-full items-center gap-4 justify-center rounde bg-gray-500 px-7 pb-2.5 pt-3 text-center text-sm font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"

                                href="#!"
                                role="button"
                                data-twe-ripple-init
                                data-twe-ripple-color="light">
                                {/*  Facebook  */}
                                <IoLogoGoogle className=" text-2xl " />
                                Continue with Google
                            </a>
                            <a
                                className="mb-3 flex bg-gray-500  w-full items-center gap-4 justify-center rounded  px-7 pb-2.5 pt-3 text-center text-sm font-medium uppercase leading-normal text-white shadow-info-3 transition duration-150 ease-in-out hover:bg-info-accent-300 hover:shadow-info-2 focus:bg-info-accent-300 focus:shadow-info-2 focus:outline-none focus:ring-0 active:bg-info-600 active:shadow-info-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                                // style="background-color: "
                                href="#!"
                                role="button"
                                data-twe-ripple-init
                                data-twe-ripple-color="light">
                                {/*  X  */}
                                <FaGithub className=" text-2xl " />
                                Continue with Facebook
                            </a>
                        </form>
                        <p>Do not have an account   <Link to='/register' className=" text-[#E65B56]">Register</Link></p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Login
