import assets from '../assets/assets'
import { FaFacebook } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Footer({ theme }) {
  return (
    <div className='bg-neutralSilver pt-10 sm:pt-10 px-4 sm:px-10 lg:px-24 xl:px-40' >
      {/* footer top */}
      <div className='flex justify-between lg:items-center max-lg:flex-col gap-10'>
        <div className='space-y-5 text-sm text-neutralGrey'>
          <a href='/' className='text-2xl font-semibold flex items-center space-x-3' >
            <img src={assets.home_logo} alt='' className='w-10 inline-block items-center'/>
            <span className='text-grey900'>NEXCENT</span>
          </a>
          <p className='max-w-md'>
            From strategy to execution, we craft power solutions that move your
            business foward.
          </p>

          <ul className='flex gap-8'>
            <li>
              <Link to='/' className='hover:text-brandPrimary'>
                Home
              </Link>
            </li>
            <li>
              <Link to='/services' className='hover:text-brandPrimary'>
                Services
              </Link>
            </li>
            <li>
              <Link to='/shop' className='hover:text-brandPrimary'>
                Shop
              </Link>
            </li>
            <li>
              <Link to='/our-work' className='hover:text-brandPrimary'>
                About
              </Link>
            </li>
            <li>
              <Link to='/contact-us' className='hover:text-brandPrimary'>
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
        <div className=' text-neutralGrey' >
          <h3 className='font-semibold'>Send Us A Mail Today</h3>
          <p className='text-sm mt-2 mb-6'>
            Tell Us Which Of Our Services You Need.
          </p>
          <div className='flex gap-2 text-sm'>
            <input
              type='email'
              placeholder='Enter your email'
              className='w-full p-3 text-sm outline-none rounded dark:text-gray-200 bg-transparent border border-gray-300'
            />
            <button className='hover:bg-brandPrimary p-3 text-neutralGrey rounded cursor-pointer hover:scale-103'>
              Submit
            </button>
          </div>
        </div>
      </div>
      <hr className='border-gray-300 my-6' />

      {/*footer bottom */}

      <div className='pb-6 text-sm text-neutralGrey flex justify-center sm:justify-between gap-4 flex-wrap' >
        <div className='flex items-center justify-between gap-4'>
          <a
            href='https://www.facebook.com'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='Facebook'
          >
            <FaFacebook className='text-xl cursor-pointer hover:text-brandPrimary' />{' '}
          </a>

          <a
            href='https://www.instagram.com'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='Instagram'
          >
            <FaInstagram className='text-xl cursor-pointer hover:text-brandPrimary' />{' '}
          </a>

          <a
            href='https://www.linkedin.com'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='Linkedin'
          >
            <FaLinkedin className='text-xl cursor-pointer hover:text-brandPrimary' />{' '}
          </a>

          <a
            href='https://www.twitter.com'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='Twitter'
          >
            <FaTwitter className='text-xl cursor-pointer hover:text-brandPrimary' />{' '}
          </a>
        </div>

        <p>Copyright 2025 @Nextent - All Right Reserved.</p>
      </div>
    </div>
  )
}

export default Footer
