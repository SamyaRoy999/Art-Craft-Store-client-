
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const Banner = () => {



    return (
        <>
            <Swiper
                rewind={true}
                navigation={true}
                modules={[Navigation]}
                className="mySwiper  z-0 min-h-[85vh] "
            >

                <SwiperSlide >
                    <div className='  flex justify-between items-center mx-auto container'>

                        <div className=''>
                            <h1 className='text-4xl '> Explore Majestic Landscapes</h1>
                            <p className=''> Immerse yourself in nature s beauty with serene <br /> mountain vistas and enchanting forest scenes.</p>
                            <button className='btn bg-[#E65B56] text-white hover:text-[#E65B56]'>SHOP NOW</button>
                        </div>
                        <div className=' flex items-center mt-10'>
                            <div className='relative'>
                                <div className='  w-80 pb-7'>
                                    <img src='https://i.ibb.co/VYGTYLk/2151357854.jpg' alt="" />
                                </div>
                                <div className=' w-80 absolute  -left-[50%] top-[25%]'>
                                    <img src='https://i.ibb.co/nRsDrJZ/2151120993.jpg' alt="" />
                                </div>
                                <div className=' w-80 pt-7'>
                                    <img src='https://i.ibb.co/DwwTDnX/green-leafed-trees-with-mountain-view.jpg' alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide >
                    <div className='  flex justify-between items-center mx-auto container'>

                        <div className=''>
                            <h1 className='text-4xl '> Explore Majestic Landscapes</h1>
                            <p className=''> Immerse yourself in nature s beauty with serene <br /> mountain vistas and enchanting forest scenes.</p>
                            <button className='btn bg-[#E65B56] text-white hover:text-[#E65B56]'>SHOP NOW</button>
                        </div>
                        <div className=' flex items-center mt-10'>
                            <div className='relative'>
                                <div className='  w-80 pb-7'>
                                    <img src='https://i.ibb.co/VYGTYLk/2151357854.jpg' alt="" />
                                </div>
                                <div className=' w-80 absolute  -left-[50%] top-[25%]'>
                                    <img src='https://i.ibb.co/nRsDrJZ/2151120993.jpg' alt="" />
                                </div>
                                <div className=' w-80 pt-7'>
                                    <img src='https://i.ibb.co/DwwTDnX/green-leafed-trees-with-mountain-view.jpg' alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide >
                    <div className='  flex justify-between items-center mx-auto container'>

                        <div className=''>
                            <h1 className='text-4xl '> Explore Majestic Landscapes</h1>
                            <p className=''> Immerse yourself in nature s beauty with serene <br /> mountain vistas and enchanting forest scenes.</p>
                            <button className='btn bg-[#E65B56] text-white hover:text-[#E65B56]'>SHOP NOW</button>
                        </div>
                        <div className=' flex items-center mt-10'>
                            <div className='relative'>
                                <div className='  w-80 pb-7'>
                                    <img src='https://i.ibb.co/VYGTYLk/2151357854.jpg' alt="" />
                                </div>
                                <div className=' w-80 absolute  -left-[50%] top-[25%]'>
                                    <img src='https://i.ibb.co/nRsDrJZ/2151120993.jpg' alt="" />
                                </div>
                                <div className=' w-80 pt-7'>
                                    <img src='https://i.ibb.co/DwwTDnX/green-leafed-trees-with-mountain-view.jpg' alt="" />
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


