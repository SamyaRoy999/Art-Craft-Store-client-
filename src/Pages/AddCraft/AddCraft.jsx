import { IoBagAdd } from "react-icons/io5";
import { useForm } from "react-hook-form"
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from 'sweetalert2'
 
 
const AddCraft = () => {
    const {user} =  useContext(AuthContext);
   
    const UserEmail= user?.email
    const UserName = user?.displayName
    
    
    

    const {
        register,
        handleSubmit,
        reset,
    } = useForm()


    const onSubmit = (data) => {

        const {
          
            customization,
            imageURL,
            name,
            price,
            processingTime,
            rating,
            shortDescription,
            stockStatus,
            subcategoryName,
        } = data;

        const info = {

            customization,
            imageURL,
            name,
            price,
            processingTime,
            rating,
            stockStatus,
            shortDescription,
            subcategoryName,
            UserEmail,
            UserName
        }

        console.log(info);

            fetch('http://localhost:5000/addArts', {
                method: "POST",
                headers: { "content-type": "application/json" },
                body: JSON.stringify(info)
            })
                .then(res => res.json())
                .then(data => {
                
                    if (data.acknowledged === true) {
                        Swal.fire({
                            title: 'Craft item added successfully!',
                            text: 'Do you want to continue',
                            icon: 'success',
                            confirmButtonText: 'Cool'
                          })
                        reset()
                        
                    }
                })
    }

    return (

        <div className="flex  w-full items-center justify-center bg-gray-900 bg-cover bg-no-repeat bg-[url('https://i.ibb.co/mCdJQgC/india-republic-day-celebration-digital-art-with-woman-portrait.jpg')]" >
            <div className="rounded-xl my-10 bg-gray-800 bg-opacity-50 px-16 py-10 shadow-lg backdrop-blur-md max-sm:px-8">
                <div className="text-white ">
                    <div className="mb-8 flex flex-col items-center">
                        <IoBagAdd className=" text-6xl" />
                        <h1 className="mb-2 text-2xl"> Add Craft Item </h1>
                        <span className="text-gray-300">Enter Login Details</span>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="mb-4 text-lg flex flex-col lg:flex-row gap-4">
                            <input  {...register("name", { required: true })} className="rounded-3xl border-none bg-[#E65B56] bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md" type="text" name="name" placeholder="item_name" required />

                            <select className=" w-full rounded-3xl border-none bg-[#E65B56] bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md" id="stockStatus" name="stockStatus" placeholder="subcategory_name"  {...register("subcategoryName", { required: true })} required>
                                <option value="" disabled selected hidden>subcategory_name</option>
                                <option value="LandscapePainting">Landscape Painting</option>
                                <option value="PortraitDrawing">Portrait Drawing</option>
                                <option value="WatercolourPainting">Watercolour Painting</option>
                                <option value="OilPainting">Oil Painting</option>
                                <option value="CharcoalSketching">Charcoal Sketching</option>
                                <option value="CartoonDrawing">Cartoon Drawing</option>
                            </select>
                        </div>
                        <div className="mb-4 text-lg flex flex-col lg:flex-row gap-4">
                            <select className=" w-full rounded-3xl border-none bg-[#E65B56] bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md" id="stockStatus" name="stockStatus"  {...register("stockStatus", { required: true })} required>
                                <option value="" disabled selected hidden>stockStatus</option>
                                <option value="In stock">In stock</option>
                                <option value="Made to Order">Made to Order</option>
                            </select>

                            <select id="customization" className=" w-full rounded-3xl border-none bg-[#E65B56] bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md" name="customization" placeholder="customization"  {...register("customization", { required: true })} required>
                                <option value="" disabled selected hidden>Customization</option>
                                <option value="yes">Yes</option>
                                <option value="no">No</option>
                            </select>
                        </div>
                        <div className="mb-4 text-lg flex gap-4 flex-col lg:flex-row">
                            <input className="rounded-3xl border-none bg-[#E65B56] bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md" type="text" name="processingTime" placeholder="processing_time"  {...register("processingTime", { required: true })} required />
                            <input className="rounded-3xl  border-none bg-[#E65B56] bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md" type="text" name="imageURL" placeholder="image_URL"  {...register("imageURL", { required: true })} required />
                        </div>
                        <div className="mb-4 text-lg flex gap-4 flex-col lg:flex-row">
                            <input className="rounded-3xl border-none bg-[#E65B56] bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md" type="text" name="price" placeholder="price" {...register("price", { required: true })} required />
                            <input className="rounded-3xl border-none bg-[#E65B56] bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md" type="text" name="rating" placeholder="rating" {...register("rating", { required: true })} required />
                        </div>

                       
                        <div className="mb-4 text-lg">
                            <input className="rounded-3xl w-full h-32 border-none bg-[#E65B56] bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md" type="text" name="shortDescription"  {...register("shortDescription", { required: true })} placeholder="short description" required />
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

