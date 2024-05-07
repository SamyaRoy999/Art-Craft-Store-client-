import { useContext, useEffect, useState, } from "react"
import { AuthContext } from "../../AuthProvider/AuthProvider"
import Swal from "sweetalert2"
import { Link } from "react-router-dom"


const MyArtCraft = () => {

  const { user } = useContext(AuthContext)
  const [myArt, setMyArt] = useState([])
  const [customizArts, setCustomizArts] = useState(myArt)
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    fetch(`https://server-side-art.vercel.app/addArts/${user.email}`)
      .then(res => res.json())
      .then(data => {
        setCustomizArts(data)
        setMyArt(data);
        setLoading(false);
      })

  }, [user])

  console.log(customizArts);
  const sorting = (e) => {
    const customization = e.target.value
    const customiz = myArt.filter(item => item.customization === customization)
    setCustomizArts(customiz);
  }

  const hendelDelete = id => {

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {

        fetch(`https://server-side-art.vercel.app/addArts/${id}`, {
          method: "DELETE"
        })
          .then(res => res.json())
          .then(data => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire(
                "Deleted!",
                "Delete your Arts",
                "success"
              );
              const remining = customizArts.filter(del => del._id !== id)
              setCustomizArts(remining)
            }

          })

      }
    });
  }
  return (
    <div className=" min-h-screen">
      <form className="flex m-7 justify-center">
        <select id="customization" onChange={sorting} className=" w-40 rounded-3xl border-none bg-[#E65B56] bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md" name="customization" placeholder="customization" required>
          <option value="" disabled selected hidden>Customization</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </form>
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
        </div>
      ) : (
        <div className="grid grid-cols-1 place-items-center md:grid-cols-2 lg:grid-cols-3">
          {customizArts.map(item => (
            <div key={item._id} className=" ">
              <div className="mx-auto w-80 mb-5">
                <div className="max-w-xs cursor-pointer rounded-lg bg-white p-2 shadow duration-150 hover:scale-105 hover:shadow-md">
                  <div className=" ">
                    <img className="w-full h-60 rounded-lg object-cover object-center" src={item.imageURL} alt="product" />
                  </div>
                  <p className="my-4 pl-4 font-bold font-Shanti text-xl text-[#E65B56] "> {item.name}</p>
                  <p className="mb-2 ml-4 text-lg font-bold text-gray-800 "> {item.shortDescription}</p>
                  <p className="mb-2 ml-4 text-lg font-normal text-gray-800">Price : {item.price}</p>
                  <p className="mb-2 ml-4 text-lg font-normal text-gray-800">Rating : {item.rating}</p>
                  <p className="mb-2 ml-4 text-lg font-normal text-gray-800">Customization : {item.customization}</p>
                  <p className="mb-2 ml-4 text-lg font-normal text-gray-800">ProcessingTime : {item.processingTime}</p>
                  <p className="mb-6 ml-4 text-lg font-normal text-gray-800">StockStatus : {item.stockStatus}</p>
                  <div className="flex justify-between items-center">
                    <Link to={`/updateArts/${item._id}`}>
                      <button type="button" className="text-[#E65B56] font-semibold font-EB_Garamond text-base bg-white border border-[#E65B56] focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100  rounded-full  px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Update</button>
                    </Link>
                    <button onClick={() => hendelDelete(item._id)} type="button" className="text-[#E65B56] font-semibold font-EB_Garamond text-base bg-white border border-[#E65B56] focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100  rounded-full  px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Delete</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default MyArtCraft
