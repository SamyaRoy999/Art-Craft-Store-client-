
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { useTypewriter } from 'react-simple-typewriter'

const Banner = () => {
    const [text] = useTypewriter({
        words: ['Explore Majestic Landscapes','Creative Corner Emporium',' Gallery of Inspiration'],
        loop: 0
      })
    return (
        <>
            <Swiper
                rewind={true}
                navigation={true}
                modules={[Navigation]}
                className="mySwiper  z-0 min-h-[85vh] "
            >

                <SwiperSlide className=' w-full'>
                    <div className=' flex  lg:flex-row justify-center flex-col-reverse  lg:justify-between   items-center mx-auto container'>
                        <div className=' container  ml-10  lg:ml-0'>
                            <h1 className=' text-3xl  mt-20 lg:text-[42px] text-[#E65B56] mb-5 font-EB_Garamond font-medium'><samp className=' font-extralight text-xs'>.</samp>{text}</h1>
                            <p className=' font-normal mb-5 lg:mb-12'> Immerse yourself in nature s beauty with serene <br /> mountain vistas and enchanting forest scenes.</p>
                            <a className="relative px-5 py-2 font-medium text-white group">
                                <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-[#ec807c] group-hover:bg-[#E65B56] group-hover:skew-x-12"></span>
                                <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-[#E65B56] group-hover:bg-[#ec807c] group-hover:-skew-x-12"></span>
                                <span className="absolute bottom-0 left-0 hidden w-10 h-20 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 bg-[#e86965] -rotate-12"></span>
                                <span className="absolute bottom-0 right-0 hidden w-10 h-20 transition-all duration-100 ease-out transform translate-x-10 translate-y-8 bg-[#e58d8a] -rotate-12"></span>
                                <span className="relative ">SHOP NOW</span>
                            </a>
                        </div>
                        <div className=' flex items-center   mt-10'>
                            <div className=' relative -right-24 mb-5 lg:-right-0'>
                                <div>
                                    <div className='  w-56  pr-2 lg:w-80 pb-7'>
                                        <img src='https://i.ibb.co/VYGTYLk/2151357854.jpg' alt="" />
                                    </div>
                                    <div className=' w-[270px] lg:w-96 absolute  -left-[70%] top-[25%] border-[8px] p-2 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] border-[#E65B56]'>
                                        <img src='https://i.ibb.co/nRsDrJZ/2151120993.jpg' alt="" />
                                    </div>
                                    <div className=' w-56 pr-2 lg:w-80 pt-7'>
                                        <img src='https://i.ibb.co/DwwTDnX/green-leafed-trees-with-mountain-view.jpg' alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide >
                    <div className=' flex  lg:flex-row justify-center flex-col-reverse  lg:justify-between   items-center mx-auto container'>
                        <div className=' container  ml-10  lg:ml-0'>
                            <h1 className=' text-3xl  mt-20 lg:text-[42px] text-[#E65B56] mb-5 font-EB_Garamond font-medium'><samp className=' font-extralight text-xs'>.</samp>{text}</h1>
                            <p className=' font-normal mb-5 lg:mb-12'>Explore our eclectic collection of art supplies and unique <br /> creations, perfect for unleashing your imagination.</p>
                            <a className="relative px-5 py-2 font-medium text-white group">
                                <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-[#ec807c] group-hover:bg-[#E65B56] group-hover:skew-x-12"></span>
                                <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-[#E65B56] group-hover:bg-[#ec807c] group-hover:-skew-x-12"></span>
                                <span className="absolute bottom-0 left-0 hidden w-10 h-20 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 bg-[#e86965] -rotate-12"></span>
                                <span className="absolute bottom-0 right-0 hidden w-10 h-20 transition-all duration-100 ease-out transform translate-x-10 translate-y-8 bg-[#e58d8a] -rotate-12"></span>
                                <span className="relative ">SHOP NOW</span>
                            </a>
                        </div>
                        <div className=' flex items-center   mt-10'>
                            <div className=' relative -right-24 mb-5 lg:-right-0'>
                                <div>
                                    <div className='  w-56 pr-2 lg:w-80 pb-7'>
                                        <img src="https://i.ibb.co/syQW7sS/2151123847.jpg" alt="" />
                                    </div>
                                    <div className=' w-[270px] lg:w-96 absolute  -left-[70%] top-[25%] border-[8px] p-2 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] border-[#E65B56]'>
                                        <img src="https://i.ibb.co/0FkNX5x/2151135152.jpg" alt="" />
                                    </div>
                                    <div className=' w-56 pr-2 lg:w-80 pt-7'>
                                        <img src="https://i.ibb.co/6WypDZ8/2151151089.jpg" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide >
                    <div className=' flex  lg:flex-row justify-center flex-col-reverse  lg:justify-between   items-center mx-auto container'>
                        <div className=' container  ml-10  lg:ml-0'>
                            <h1 className=' text-3xl  mt-20 lg:text-[42px] text-[#E65B56] mb-5 font-EB_Garamond font-medium'><samp className=' font-extralight text-xs'>.</samp>{text}</h1>
                            <p className=' font-normal mb-5 lg:mb-12'>Step into a world of creativity and inspiration with our<br /> curated selection  of artworks and artisanal goods.</p>
                            <a className="relative px-5 py-2 font-medium text-white group">
                                <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-[#ec807c] group-hover:bg-[#E65B56] group-hover:skew-x-12"></span>
                                <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-[#E65B56] group-hover:bg-[#ec807c] group-hover:-skew-x-12"></span>
                                <span className="absolute bottom-0 left-0 hidden w-10 h-20 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 bg-[#e86965] -rotate-12"></span>
                                <span className="absolute bottom-0 right-0 hidden w-10 h-20 transition-all duration-100 ease-out transform translate-x-10 translate-y-8 bg-[#e58d8a] -rotate-12"></span>
                                <span className="relative ">SHOP NOW</span>
                            </a>
                        </div>
                        <div className=' flex items-center   mt-10'>
                            <div className=' relative -right-24 mb-5 lg:-right-0'>
                                <div>
                                    <div className='  w-56  lg:w-80 pb-7'>
                                        <img src='https://i.ibb.co/VYGTYLk/2151357854.jpg' alt="" />
                                    </div>
                                    <div className=' w-[250px] lg:w-96 absolute  -left-[70%] top-[25%] border-[8px] p-2 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] border-[#E65B56]'>
                                        <img src="https://i.ibb.co/0FkNX5x/2151135152.jpg" alt="" />
                                    </div>
                                    <div className=' w-56  lg:w-80 pt-7'>
                                        <img src='https://i.ibb.co/DwwTDnX/green-leafed-trees-with-mountain-view.jpg' alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    )
}

export default Banner

