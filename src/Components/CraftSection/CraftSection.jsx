import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const CraftSection = () => {

    const [arts, setArts] = useState([])

    useEffect(() => {

        fetch('http://localhost:5000/addArts')
            .then(res => res.json())
            .then(data => {
                setArts(data);
            })
    }, [])


    return (
        <div className="min-h-screen  mx-auto container py-24">
            <div className=" text-center">
                <h3 className=" text-4xl lg:text-[50px] text-[#E65B56] mb-5 font-EB_Garamond font-medium">Artisanal Treasures Await</h3>
                <p className="font-normal text-sm lg:text-base mb-10 font-Shanti " >Discover handcrafted wonders in our curated collection. From vibrant watercolors <br /> to intricate sculptures, explore artistry in every form.</p>
            </div>
            <div className=" grid grid-cols-1 place-items-center md:grid-cols-2 lg:grid-cols-3 ">
                {arts.slice(0,6).map(item => (
                    <div key={item._id} className=" ">
                        <div className="mx-auto w-80 mb-5">
                            <div className="max-w-xs cursor-pointer rounded-lg bg-white p-2 shadow duration-150 hover:scale-105 hover:shadow-md">
                                <div className=" ">
                                    <img className="w-full h-60 rounded-lg object-cover object-center" src={item.imageURL} alt="product" />
                                </div>
                                <p className="my-4 pl-4 font-bold font-Shanti text-xl text-[#E65B56] ">{item.name}</p>
                                <div className="flex justify-between items-center">
                                    <p className="mb-4 ml-4 text-xl font-semibold text-gray-800">{item.price}</p>
                                    <Link to={`/artsSingle/${item._id}`}>
                                        <button type="button" className="text-[#E65B56] font-semibold font-EB_Garamond text-base bg-white border border-[#E65B56] focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100  rounded-full  px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">View Details</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default CraftSection
