import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const AllArtsCraft = () => {
    const [arts, setArts] = useState([])

    useEffect(() => {

        fetch('https://server-side-art.vercel.app/addArts')
            .then(res => res.json())
            .then(data => {
                setArts(data);
            })

    }, [])
    console.log(arts);
    return (
        <div className=" min-h-screen">
            <div className="overflow-x-auto">
                <table className="table text-center">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>StockStatus & Description</th>
                            <th>Price</th>
                            <th>ProcessingTime</th>
                            <th></th>
                        </tr>
                    </thead>
                    {arts.map(item => (
                        <tbody key={item._id}>
                            <tr>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item.imageURL} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{item.name}</div>

                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {item.shortDescription}
                                    <br />
                                    <span className="badge badge-ghost badge-sm">{item.stockStatus}</span>
                                </td>
                                <td>{item.price}</td>
                                <td>{item.processingTime}</td>
                                <th>
                                    <Link to={`/artsSingle/${item._id}`}>
                                        <button type="button" className="text-[#E65B56] font-semibold font-EB_Garamond text-base bg-white border border-[#E65B56] focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100  rounded-full  px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">View Details</button>
                                    </Link>
                                </th>
                            </tr>
                        </tbody>
                    ))}
                </table>
            </div>

        </div>
    )
}

export default AllArtsCraft
