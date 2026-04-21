import Title from './Title'
import assets from '../assets/assets'

function OurClients() {
  const logos = [
    assets.companylogo_1,
    assets.companylogo_2,
    assets.companylogo_3,
    assets.companylogo_4,
    assets.companylogo_5,
  ]

  return (
    <div className='flex flex-col items-center px-4 sm:px-6 lg:px-15 xl:px-20 gap-10 text-gray-700 mt-10'>
      {/* Heading */}
      <div className='text-center text-2xl md:text-3xl py-8'>
        <Title text1={'Our'} text2={'Client'} />
        <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-neutralGrey'>
          As an agency company we give our esteemed clients the best.
        </p>
      </div>

      {/* Marquee Container */}
      <div className='w-full mt-3 bg-neutralSilver overflow-hidden relative z-[-20]'>
        {/* Marquee Track */}
        <div className='marquee flex items-center gap-6 sm:gap-10'>
          {logos.map((logo, index) => (
            <span
              key={index}
              className='flex-shrink-0 flex items-center justify-center 
              bg-[#f9f9f9] rounded-xl 
              p-4 sm:p-6 lg:p-8 
              shadow-sm 
              min-w-[100px] sm:min-w-[120px]'
            >
              <img
                src={logo}
                alt={`company logo ${index + 1}`}
                className='h-10 sm:h-14 lg:h-20 w-auto object-contain 
                transition-transform duration-300 hover:scale-110'
              />
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default OurClients
