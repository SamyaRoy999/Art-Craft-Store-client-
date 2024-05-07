import { IoBagAdd } from "react-icons/io5";
import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";



const UpdateArts = () => {

    const loderdata = useLoaderData()
    // console.log("loder",loderdata);


    const {
        register,
        handleSubmit,
        // reset,
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
        }

        console.log(info);
        fetch(`https://server-side-art.vercel.app/addArts/${loderdata._id}`,{
            method: 'PUT',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(info)
        })
            .then(res => res.json())
            .then(data => {
               if(data.acknowledged){
                Swal.fire({
                    title: 'Craft item update successfully!',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
               }
            })

    }
    return (
        <div className="flex h-screen w-full items-center justify-center bg-gray-900 bg-cover bg-no-repeat bg-[url('https://i.ibb.co/mCdJQgC/india-republic-day-celebration-digital-art-with-woman-portrait.jpg')]" >
            <div className="rounded-xl bg-gray-800 bg-opacity-50 px-16 py-10 shadow-lg backdrop-blur-md max-sm:px-8">
                <div className="text-white">
                    <div className="mb-8 flex flex-col items-center">
                        <IoBagAdd className=" text-6xl" />
                        <h1 className="mb-2 text-2xl"> Update Craft Item </h1>
                       
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="mb-4 text-lg flex flex-col lg:flex-row  gap-4">
                            <input  {...register("name", { required: true })} className="rounded-3xl border-none bg-[#E65B56] bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md" type="text" name="name" defaultValue={loderdata.name} placeholder="item_name" required />

                            <select defaultValue={loderdata.subcategoryName} className=" w-full rounded-3xl border-none bg-[#E65B56] bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md" id="stockStatus" name="stockStatus" placeholder="subcategory_name"   {...register("subcategoryName", { required: true })} required>
                                <option disabled selected hidden>subcategory_name</option>
                                <option value="ndscapePainting">Landscape Painting</option>
                                <option value="PortraitDrawing">Portrait Drawing</option>
                                <option value="WatercolourPainting">Watercolour Painting</option>
                                <option value="OilPainting">Oil Painting</option>
                                <option value="CharcoalSketching">Charcoal Sketching</option>
                                <option value="CartoonDrawing">Cartoon Drawing</option>
                            </select>
                        </div>
                        <div className="mb-4 text-lg flex gap-4 flex-col lg:flex-row">
                            <select defaultValue={loderdata.stockStatus} className=" w-full rounded-3xl border-none bg-[#E65B56] bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md" id="stockStatus" name="stockStatus"  {...register("stockStatus", { required: true })} required>
                                <option value="" disabled selected hidden>stockStatus</option>
                                <option value="In stock">In stock</option>
                                <option value="Made to Order">Made to Order</option>
                            </select>

                            <select defaultValue={loderdata.customization} id="customization" className=" w-full rounded-3xl border-none bg-[#E65B56] bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md" name="customization" placeholder="customization"  {...register("customization", { required: true })} required>
                                <option value="" disabled selected hidden>Customization</option>
                                <option value="yes">Yes</option>
                                <option value="no">No</option>
                            </select>
                        </div>
                        <div className="mb-4 text-lg flex gap-4 flex-col lg:flex-row">
                            <input className="rounded-3xl border-none bg-[#E65B56] bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md" type="text" name="processingTime" placeholder="processing_time" defaultValue={loderdata.processingTime}  {...register("processingTime", { required: true })} required />
                            <input className="rounded-3xl  border-none bg-[#E65B56] bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md" type="text" name="imageURL" placeholder="image_URL" defaultValue={loderdata.imageURL}  {...register("imageURL", { required: true })} required />
                        </div>
                        <div className="mb-4 text-lg flex gap-4 flex-col lg:flex-row">
                            <input className="rounded-3xl border-none bg-[#E65B56] bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md" type="text" name="price" placeholder="price" defaultValue={loderdata.price} {...register("price", { required: true })} required />
                            <input className="rounded-3xl border-none bg-[#E65B56] bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md" type="text" name="rating" placeholder="rating" defaultValue={loderdata.rating} {...register("rating", { required: true })} required />
                        </div>

                        <div className="mb-4 text-lg">
                            <input className="rounded-3xl w-full h-32 border-none bg-[#E65B56] bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md" type="text" name="shortDescription" defaultValue={loderdata.shortDescription}  {...register("shortDescription", { required: true })} placeholder="short description" required />
                        </div>
                        <div className="mt-8 flex justify-center text-lg text-black">
                            <button type="submit" className="rounded-3xl bg-[#E65B56] bg-opacity-50 px-10 py-2 text-white shadow-xl backdrop-blur-md transition-colors duration-300 hover:bg-yellow-600">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default UpdateArts

