
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { useTypewriter } from 'react-simple-typewriter'
const Ratting = () => {

  const [text] = useTypewriter({
    words: ['CEO, ','Artistic Haven'],
    loop: 0
  })
  const [text2] = useTypewriter({
    words: ['Marketing Manager', 'Canvas Crafters'],
    loop: 0
  })
  const [text3] = useTypewriter({
    words: ['Customer Support,','Creative Palette'],
    loop: 0
  })

  return (
    <Swiper
      rewind={true}
      navigation={true}
      modules={[Navigation]}
      className="mySwiper  z-0 min-h-[85vh] "
    >

      <SwiperSlide>
        <section className="relative isolate overflow-hidden border-b border-t  px-6 py-24 sm:py-32 lg:px-8">
          {/* Background Elements */}
          <div className="absolute inset-0 -z-10  opacity-20"></div>
          <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg]  shadow-xl  ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center"></div>
          {/* Content */}
          <div className="mx-auto max-w-2xl lg:max-w-4xl">
            {/* Logo */}
            <img className="mx-auto h-12 grayscale" src="https://www.svgrepo.com/show/443576/brand-xmpp.svg" alt="Zilla Digital Logo" />
            {/* Review */}
            <figure className="mt-10">
              <blockquote className="text-center text-xl font-semibold leading-8  sm:text-2xl sm:leading-9">
                <p>As an artist, I was thrilled to discover Painting and Drawing. Its a haven for creative souls like me, offering a wide range of tools and resources to fuel my passion for art.</p>
              </blockquote>
              <figcaption className="mt-10">
                {/* User Image */}
                <img className="mx-auto h-16 w-16 rounded-full object-cover" src="https://images.unsplash.com/photo-1605462863863-10d9e47e15ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw5fHxtYW58ZW58MHwwfHx8MTY5NzQ0MjkzOHww&ixlib=rb-4.0.3&q=80&w=1080" alt="" />
                {/* User Info */}
                <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                  <div className="font-semibold ">John Doe</div>
                  <svg viewBox="0 0 2 2" width="3" height="3" aria-hidden="true" className="fill-gray-900">
                    <circle cx="1" cy="1" r="1"></circle>
                  </svg>
                  <div className="">{text} </div>
                </div>
                <div className="rating text-center flex justify-center pt-4">
                  <input type="radio" name="rating-1" className="mask mask-star" />
                  <input type="radio" name="rating-1" className="mask mask-star" checked />
                  <input type="radio" name="rating-1" className="mask mask-star" />
                  <input type="radio" name="rating-1" className="mask mask-star" />
                  <input type="radio" name="rating-1" className="mask mask-star" />
                </div>
              </figcaption>
            </figure>
          </div>
        </section>
      </SwiperSlide>

      <SwiperSlide>
        <section className="relative isolate overflow-hidden border-b border-t  px-6 py-24 sm:py-32 lg:px-8">
          {/* Background Elements */}
          <div className="absolute inset-0 -z-10  opacity-20"></div>
          <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg]  shadow-xl  ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center"></div>
          {/* Content */}
          <div className="mx-auto max-w-2xl lg:max-w-4xl">
            {/* Logo */}
            <img className="mx-auto h-12 grayscale" src="https://i.ibb.co/L9X8mGX/preview.jpg" alt="Zilla Digital Logo" />
            {/* Review */}
            <figure className="mt-10">
              <blockquote className="text-center text-xl font-semibold leading-8 sm:text-2xl sm:leading-9">
                <p>Painting and Drawing has revolutionized the way I approach my artwork. From expert tutorials to a vibrant community, this platform has become my go-to destination for inspiration and learning.</p>
              </blockquote>
              <figcaption className="mt-10">
                {/* User Image */}
                <img className="mx-auto h-16 w-16 rounded-full object-cover" src="https://i.ibb.co/prfL2wj/istockphoto-1550589735-170667a.webp" alt="" />
                {/* User Info */}
                <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                  <div className="font-semibold ">Jane Smith</div>
                  <svg viewBox="0 0 2 2" width="3" height="3" aria-hidden="true" className="fill-gray-900">
                    <circle cx="1" cy="1" r="1"></circle>
                  </svg>
                  <div className="">{text2}</div>
                </div>
                <div className="rating text-center flex justify-center pt-4">
                  <input type="radio" name="rating-1" className="mask mask-star" />
                  <input type="radio" name="rating-1" className="mask mask-star" checked />
                  <input type="radio" name="rating-1" className="mask mask-star" />
                  <input type="radio" name="rating-1" className="mask mask-star" />
                  <input type="radio" name="rating-1" className="mask mask-star" />
                </div>
              </figcaption>
            </figure>
          </div>
        </section>
      </SwiperSlide>

      <SwiperSlide>
        <section className="relative isolate overflow-hidden border-b border-t px-6 py-24 sm:py-32 lg:px-8">
          {/* Background Elements */}
          <div className="absolute inset-0 -z-10  opacity-20"></div>
          <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg]  shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center"></div>
          {/* Content */}
          <div className="mx-auto max-w-2xl lg:max-w-4xl">
            {/* Logo */}
            <img className="mx-auto h-12 grayscale" src="https://i.ibb.co/4P2MpJg/489.jpg" alt="Zilla Digital Logo" />
            {/* Review */}
            <figure className="mt-10">
              <blockquote className="text-center text-xl font-semibold leading-8  sm:text-2xl sm:leading-9">
                <p>Painting and Drawing is more than just a website it s a supportive ecosystem for artists of all levels. Whether you are a beginner or a seasoned pro, you ll find everything you need to unleash your creativity and thrive.</p>
              </blockquote>
              <figcaption className="mt-10">
                {/* User Image */}
                <img className="mx-auto h-16 w-16 rounded-full object-cover" src="https://i.ibb.co/Km44LhC/istockphoto-1437816897-170667a.webp" alt="" />
                {/* User Info */}
                <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                  <div className="font-semibold ">Michael Johnson</div>
                  <svg viewBox="0 0 2 2" width="3" height="3" aria-hidden="true" className="fill-gray-900">
                    <circle cx="1" cy="1" r="1"></circle>
                  </svg>
                  <div className="">{text3}</div>
                </div>
                <div className="rating text-center flex justify-center pt-4">
                  <input type="radio" name="rating-1" className="mask mask-star" />
                  <input type="radio" name="rating-1" className="mask mask-star" checked />
                  <input type="radio" name="rating-1" className="mask mask-star" />
                  <input type="radio" name="rating-1" className="mask mask-star" />
                  <input type="radio" name="rating-1" className="mask mask-star" />
                </div>
              </figcaption>
            </figure>
          </div>
        </section>
      </SwiperSlide>

    </Swiper>
  )
}

export default Ratting

{/* <a href="https://imgbb.com/"><img src="https://i.ibb.co/wdNmdZ1/istockphoto-1490764451-170667a.webp" alt="istockphoto-1490764451-170667a" border="0"></a>
<a href="https://imgbb.com/"><img src="https://i.ibb.co/Km44LhC/istockphoto-1437816897-170667a.webp" alt="istockphoto-1437816897-170667a" border="0"></a>
<a href="https://imgbb.com/"><img src="https://i.ibb.co/prfL2wj/istockphoto-1550589735-170667a.webp" alt="istockphoto-1550589735-170667a" border="0"></a> */}