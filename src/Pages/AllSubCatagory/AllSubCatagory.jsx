import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"


const AllSubCatagory = () => {
    const [specific, setSpecific] = useState([])
    const { subcategoryName } = useParams()

    useEffect(() => {
        fetch('http://localhost:5000/addArts')
            .then(res => res.json())
            .then(data => {
                const filter = data.filter(item => item.subcategoryName === subcategoryName)
                setSpecific(filter);
            })
    }, [])

    return (
        <div className=" min-h-screen">
            <div className="grid grid-cols-1 place-items-center md:grid-cols-2 lg:grid-cols-3">
                {specific.map(item => (
                    <div key={item._id} className=" ">
                        <div className="mx-auto w-80 mb-5">
                            <div className="max-w-xs cursor-pointer rounded-lg bg-white p-2 shadow duration-150 hover:scale-105 hover:shadow-md">
                                <div className=" ">
                                    <img className="w-full h-60 rounded-lg object-cover object-center" src={item.imageURL} alt="product" />
                                </div>
                                <p className="my-4 pl-4 font-bold font-Shanti text-xl text-[#E65B56] "> {item.name}</p>
                                <p className="mb-2 ml-4 text-lg font-bold text-gray-800 "> {item.shortDescription}</p>
                                <p className="mb-2 ml-4 text-lg font-normal text-gray-800">SubcategoryName : {item.subcategoryName}</p>
                                <p className="mb-2 ml-4 text-lg font-normal text-gray-800">Price : {item.price}</p>
                                <p className="mb-2 ml-4 text-lg font-normal text-gray-800">Rating : {item.rating}</p>
                                <p className="mb-2 ml-4 text-lg font-normal text-gray-800">ProcessingTime : {item.processingTime}</p>
                                <Link to={`/artsSingle/${item._id}`}>
                                    <button type="button" className="text-[#E65B56] font-semibold font-EB_Garamond text-base bg-white border border-[#E65B56] focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100  rounded-full  px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">View Details</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default AllSubCatagory
