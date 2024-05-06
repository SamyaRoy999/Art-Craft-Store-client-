import Lottie from 'lottie-react'
import Love from "../../assets/love.json"

const NewExhibiztion = () => {
    return (
        <div className=" mx-auto mb-5 mt-5  lg:mb-16 lg:mt-16 container gap-5 flex-wrap flex flex-1 items-center justify-between">
            <div className="grid grid-cols-3 gap-4 mx-5 lg:mx-0">
                <div className=" ">
                    <img className="  w-32  lg:w-40 h-72" src="https://i.ibb.co/mCdJQgC/india-republic-day-celebration-digital-art-with-woman-portrait.jpg" alt="" />
                </div>
                <div className=" ">
                    <img className="  w-32  lg:w-40 h-72" src="https://i.ibb.co/syQW7sS/2151123847.jpg" alt="" />
                </div>
                <div className=" ">
                    <img className="  w-32  lg:w-40 h-72" src="https://i.ibb.co/0FkNX5x/2151135152.jpg" alt="" />
                </div>
                <div className=" ">
                    <img className="  w-32  lg:w-40 h-72" src="https://i.ibb.co/6WypDZ8/2151151089.jpg" alt="" />
                </div>
                <div className=" ">
                    <img className="  w-32  lg:w-40 h-72" src="https://i.ibb.co/z890xJg/32099.jpg" alt="" />
                </div>
                <div className=" ">
                    <img className=" w-32 h-32" src="https://i.ibb.co/fGL6hLB/2151123336.jpg" alt="" />
                </div>
            </div>
            <div className="  text-right flex-1 mx-5 lg:mx-0">
                <Lottie className=' w-40' animationData={Love}/>
                <h3 className="text-3xl lg:text-5xl text-[#E65B56] mb-6 font-normal font-EB_Garamond ">Artisanal Treasures: <br /> Handcrafted Delights Await</h3>
                <p className=' font-normal mb-12 text-sm lg:text-base '> Explore a world of artisanal craftsmanship with our curated selection of handcrafted treasures. From intricately carved wooden sculptures to meticulously woven textiles, each piece tells a story of tradition, skill, and creativity.</p>
                <a className="relative px-5 py-2 font-medium  text-white group">
                    <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-[#ec807c] group-hover:bg-[#E65B56] group-hover:skew-x-12"></span>
                    <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-[#E65B56] group-hover:bg-[#ec807c] group-hover:-skew-x-12"></span>
                    <span className="absolute bottom-0 left-0 hidden w-10 h-20 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 bg-[#e86965] -rotate-12"></span>
                    <span className="absolute bottom-0 right-0 hidden w-10 h-20 transition-all duration-100 ease-out transform translate-x-10 translate-y-8 bg-[#e58d8a] -rotate-12"></span>
                    <span className="relative">Explore Now</span>
                </a>
            </div>
        </div>
    )
}

export default NewExhibiztion
