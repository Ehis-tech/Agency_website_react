import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import assets from '../assets/assets'

function Hero() {
  return (
    <div className='bg-neutralSilver pt-24 z-[-999] relative'>
      <div className='max-w-screen-2xl mx-auto'>
        <Swiper
          modules={[Pagination, Autoplay]}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          className='w-full min-h-[500px] md:min-h-[600px]'
        >
          {/* Slide 1 */}
          <SwiperSlide>
            <div className='w-full h-full flex items-center'>
              <div className='px-4 lg:px-14 w-full flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-12'>
                {/* TEXT */}
                <div className='md:w-1/2 text-center md:text-left'>
                  <h1 className='text-2xl sm:text-3xl md:text-5xl font-semibold mb-4 text-neutralDGrey leading-snug'>
                    We are the best agent around{' '}
                    <span className='text-brandPrimary'>
                      with topnotch experience
                    </span>
                  </h1>

                  <p className='text-base md:text-base text-neutralGrey mb-6'>
                    Where to grow your business as a tailor
                  </p>

                  <button className='px-6 py-2 bg-brandPrimary text-white rounded hover:bg-neutralDGrey transition cursor-pointer'>
                    Register
                  </button>
                </div>

                {/* IMAGE */}
                <div className='flex justify-center md:w-1/2'>
                  <img
                    src={assets.hero_bot}
                    alt=''
                    className='w-[220px] sm:w-[280px] md:w-full h-auto'
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 2 */}
          <SwiperSlide>
            <div className='w-full h-full flex items-center'>
              <div className='px-4 lg:px-14 w-full flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-12'>
                {/* TEXT */}
                <div className='md:w-1/2 text-center md:text-left'>
                  <h1 className='text-2xl sm:text-3xl md:text-5xl font-semibold mb-4 text-neutralDGrey leading-snug'>
                    Lessons and insights{' '}
                    <span className='text-brandPrimary'>from 8 years</span>
                  </h1>

                  <p className='text-base md:text-base text-neutralGrey mb-6'>
                    Where to grow your business as a photographer
                  </p>

                  <button className='px-6 py-2 bg-brandPrimary text-white rounded hover:bg-neutralDGrey transition cursor-pointer'>
                    Register
                  </button>
                </div>

                {/* IMAGE */}
                <div className='flex justify-center md:w-1/2'>
                  <img
                    src={assets.hero_bot2}
                    alt=''
                    className='w-[220px] sm:w-[280px] md:w-full h-auto'
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 3 */}
          <SwiperSlide>
            <div className='w-full h-full flex items-center'>
              <div className='px-4 lg:px-14 w-full flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-12'>
                {/* TEXT */}
                <div className='md:w-1/2 text-center md:text-left'>
                  <h1 className='text-2xl sm:text-3xl md:text-5xl font-semibold mb-4 text-neutralDGrey leading-snug'>
                    Welcome to our website{' '}
                    <span className='text-brandPrimary'>
                      all you need is here!
                    </span>
                  </h1>

                  <p className='text-base md:text-base text-neutralGrey mb-6'>
                    Where to grow your business as an engineer
                  </p>

                  <button className='px-6 py-2 bg-brandPrimary text-white rounded hover:bg-neutralDGrey transition cursor-pointer'>
                    Register
                  </button>
                </div>

                {/* IMAGE */}
                <div className='flex justify-center md:w-1/2'>
                  <img
                    src={assets.hero_bot3}
                    alt=''
                    className='w-[220px] sm:w-[280px] md:w-full h-auto'
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}

export default Hero
