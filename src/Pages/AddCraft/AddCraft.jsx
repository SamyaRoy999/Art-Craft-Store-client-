import { IoBagAdd } from "react-icons/io5";

const AddCraft = () => {
    return (

        <div className="flex h-screen w-full items-center justify-center bg-gray-900 bg-cover bg-no-repeat bg-[url('https://i.ibb.co/mCdJQgC/india-republic-day-celebration-digital-art-with-woman-portrait.jpg')]" >
            <div className="rounded-xl bg-gray-800 bg-opacity-50 px-16 py-10 shadow-lg backdrop-blur-md max-sm:px-8">
                <div className="text-white">
                    <div className="mb-8 flex flex-col items-center">
                        <IoBagAdd className=" text-6xl" />
                        <h1 className="mb-2 text-2xl"> Add Craft Item </h1>
                        <span className="text-gray-300">Enter Login Details</span>
                    </div>
                    <form action="#">
                        <div className="mb-4 text-lg flex gap-4">
                            <input className="rounded-3xl border-none bg-[#E65B56] bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md" type="text" name="name" placeholder="item_name" required />
                            <input className="rounded-3xl border-none bg-[#E65B56] bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md" type="text" name="subcategoryName" placeholder=" subcategory_Name" required />
                        </div>
                        <div className="mb-4 text-lg flex gap-4">
                            <select className=" w-full rounded-3xl border-none bg-[#E65B56] bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md" id="stockStatus" name="stockStatus" required>
                                <option value="" disabled selected hidden>stockStatus</option>
                                <option value="In stock">In stock</option>
                                <option value="Made to Order">Made to Order</option>
                            </select>

                            <select id="customization" className=" w-full rounded-3xl border-none bg-[#E65B56] bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md" name="customization" placeholder="customization" required>
                                <option value="" disabled selected hidden>Customization</option>
                                <option value="yes">Yes</option>
                                <option value="no">No</option>
                            </select>
                        </div>
                        <div className="mb-4 text-lg flex gap-4">
                            <input className="rounded-3xl border-none bg-[#E65B56] bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md" type="text" name="processing_time" placeholder="processing_time" required />
                            <input className="rounded-3xl  border-none bg-[#E65B56] bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md" type="text" name="image_URL" placeholder="image_URL" required />
                        </div>
                        <div className="mb-4 text-lg flex gap-4">
                            <input className="rounded-3xl border-none bg-[#E65B56] bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md" type="text" name="price" placeholder="price" required />
                            <input className="rounded-3xl border-none bg-[#E65B56] bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md" type="text" name="rating" placeholder="rating" required />
                        </div>

                        <div className="mb-4 text-lg flex gap-4">
                            <input className="rounded-3xl border-none bg-[#E65B56] bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md" type="text" name="User_Name" placeholder="User Name" required />
                            <input className="rounded-3xl border-none bg-[#E65B56] bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md" type="email" name="User Email" placeholder="User Email" required />
                        </div>
                        <div className="mb-4 text-lg">
                            <input className="rounded-3xl w-full h-32 border-none bg-[#E65B56] bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md" type="text" name="short description" placeholder="short description" required />
                        </div>
                        <div className="mt-8 flex justify-center text-lg text-black">
                            <button type="submit" className="rounded-3xl bg-[#E65B56] bg-opacity-50 px-10 py-2 text-white shadow-xl backdrop-blur-md transition-colors duration-300 hover:bg-yellow-600">Add</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddCraft
