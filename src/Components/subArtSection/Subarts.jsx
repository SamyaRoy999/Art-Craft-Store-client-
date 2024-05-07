import { useEffect, useState } from "react"
import { Link } from "react-router-dom"


const Subarts = () => {
    const [subArt, setSubArt] = useState([])
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch('https://server-side-art.vercel.app/subcategoryArt')
            .then(res => res.json())
            .then(data => {
                setSubArt(data);
                setLoading(false);
            })
    }, [])
    console.log(subArt);
    return (
        <div>
            <h3 className="text-3xl text-center lg:text-5xl text-[#E65B56]  font-normal font-EB_Garamond mb-10">Art & Craft Categories</h3>
            {loading ? (
                <div className="flex justify-center items-center h-screen">
                    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
                </div>
            ) : (
                <div className=" grid grid-cols-1 place-items-center md:grid-cols-2 lg:grid-cols-3 ">
                    {subArt.map(item => (
                        <Link to={`/subcategory/${item.subcategoryName}`} key={item._id}>
                            <div className=" ">
                                <div className="mx-auto w-80 mb-5">
                                    <div className="max-w-xs cursor-pointer rounded-lg  p-2 shadow duration-150 hover:scale-105 hover:shadow-md">
                                        <div className=" ">
                                            <img className="w-full h-60 rounded-lg object-cover object-center" src={item.imageURL} alt="product" />
                                        </div>
                                        <p className="my-4 pl-4 font-bold font-Shanti text-xl text-[#E65B56] ">{item.subcategoryName}</p>

                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}

                </div>
            )}
        </div>
    )
}

export default Subarts
