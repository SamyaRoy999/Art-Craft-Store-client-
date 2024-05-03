import { useContext, useEffect, useState, } from "react"
import { AuthContext } from "../../AuthProvider/AuthProvider"


const MyArtCraft = () => {

  const { user } = useContext(AuthContext)
  const [myArt, setMyArt] = useState([])
  const [customizArts, setCustomizArts] = useState(myArt)
  
  useEffect(() => {
    
    fetch(`http://localhost:5000/addArts/${user.email}`)
    .then(res => res.json())
    .then(data => {
      setMyArt(data);
    })
    
  }, [user])
  
  console.log(customizArts);
  const sorting = (e) => {
    const customization = e.target.value
    const customiz = myArt.filter(item => item.customization === customization)
    setCustomizArts(customiz);
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
      <div className="grid grid-cols-1 place-items-center md:grid-cols-2 lg:grid-cols-3">
        { customizArts.map(item => (
          <div key={item._id} className=" ">
            <div className="mx-auto w-80 mb-5">
              <div className="max-w-xs cursor-pointer rounded-lg bg-white p-2 shadow duration-150 hover:scale-105 hover:shadow-md">
                <div className=" ">
                  <img className="w-full h-60 rounded-lg object-cover object-center" src={item.imageURL} alt="product" />
                </div>
                <p className="my-4 pl-4 font-bold font-Shanti text-xl text-[#E65B56] "> {item.name}</p>
                <p className="my-4 pl-4 font-bold font-Shanti text-xl text-[#E65B56] "> {item.shortDescription}</p>
                <p className="mb-2 ml-4 text-lg font-normal text-gray-800">Price : {item.price}</p>
                <p className="mb-2 ml-4 text-lg font-normal text-gray-800">Rating : {item.rating}</p>
                <p className="mb-2 ml-4 text-lg font-normal text-gray-800">Customization : {item.customization}</p>
                <p className="mb-2 ml-4 text-lg font-normal text-gray-800">ProcessingTime : {item.processingTime}</p>
                <p className="mb-6 ml-4 text-lg font-normal text-gray-800">StockStatus : {item.stockStatus}</p>
                <div className="flex justify-between items-center">
                  <button type="button" className="text-[#E65B56] font-semibold font-EB_Garamond text-base bg-white border border-[#E65B56] focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100  rounded-full  px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">“Update</button>
                  <button type="button" className="text-[#E65B56] font-semibold font-EB_Garamond text-base bg-white border border-[#E65B56] focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100  rounded-full  px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Delete</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MyArtCraft